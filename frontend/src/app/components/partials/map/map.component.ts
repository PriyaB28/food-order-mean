import { Component, ElementRef, ViewChild } from '@angular/core';
import { map, Map,LatLngTuple, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
@ViewChild('map') mapElemRef !: ElementRef


private readonly DEFAULT_LATLNG: LatLngTuple = [51.505, -0.09]
map!:Map
constructor(){}

ngOnInit(){
  this.initializeMap()
}
initializeMap(){
  if (this.map) {
    return;
  }
  this.map = map(this.mapElemRef.nativeElement, {
    attributionControl:false,
    center: [51.505, -0.09],
    zoom: 13,
    }).setView(
      this.DEFAULT_LATLNG,1
    )

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(this.map)
}
}
