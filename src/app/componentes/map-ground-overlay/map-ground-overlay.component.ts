import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-ground-overlay',
  templateUrl: './map-ground-overlay.component.html',
  styleUrls: ['./map-ground-overlay.component.css']
})
export class MapGroundOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  center: google.maps.LatLngLiteral = {lat: -34.691794375358896, lng:-58.334464425920046};
  zoom = 15;

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 15,
    north: 15,
    south: 10,
    west: 10,
  };

}
