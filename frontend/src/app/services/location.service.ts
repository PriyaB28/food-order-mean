import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getCurrentLocation(): Observable<LatLngLiteral> {
    if (!navigator.geolocation) {
      return new Observable((observer) => {
        observer.error('Geolocation API is not supported');
      });
    }
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (
            !position.coords ||
            !position.coords.latitude ||
            !position.coords.longitude
          ) {
            observer.error('Invalid location response');
            return;
          }

          observer.next({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
