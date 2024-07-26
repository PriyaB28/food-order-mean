import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import {
  map,
  Map,
  LatLngTuple,
  tileLayer,
  icon,
  Marker,
  LatLng,
  marker,
  LatLngExpression,
  LeafletMouseEvent,
} from 'leaflet';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @ViewChild('map', { static: true }) mapElemRef!: ElementRef;
  locationService: LocationService = inject(LocationService);

  private readonly MARKER_ZOOM_LEVEL: number = 16;
  private readonly MARKER_ICON = icon({
    iconUrl: 'assets/images/marker.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
  });
  private readonly DEFAULT_LATLNG: LatLngTuple = [51.505, -0.09];
  map!: Map;
  currentMarker!: Marker;
  constructor() {}

  ngOnInit() {
    this.initializeMap();
  }
  initializeMap() {
    if (this.map) {
      return;
    }
    this.map = map(this.mapElemRef.nativeElement, {
      attributionControl: false,
    }).setView(this.DEFAULT_LATLNG, 1.5);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    this.map.on('click', (e: LeafletMouseEvent) => {
      this.setMarker(e.latlng);
    });
  }

  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next: (location) => {
        this.map.setView(location, this.MARKER_ZOOM_LEVEL);
        this.setMarker(location);
      },
    });
  }

  setMarker(latlng: LatLngExpression) {
    if (this.currentMarker) {
      this.currentMarker.setLatLng(latlng);
      return;
    }

    this.currentMarker = marker(latlng, {
      draggable: true,
      icon: this.MARKER_ICON,
    }).addTo(this.map);
  }
}
