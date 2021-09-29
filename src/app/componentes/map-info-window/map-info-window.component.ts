import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map-info-window',
  templateUrl: './map-info-window.component.html',
  styleUrls: ['./map-info-window.component.css']
})
export class MapInfoWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

}
