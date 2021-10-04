import { Component, OnInit } from '@angular/core';
import { MapCircleService } from './map-circle.service';

@Component({
  selector: 'app-map-circle',
  templateUrl: './map-circle.component.html',
  styleUrls: ['./map-circle.component.css'],
})
export class MapCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  center: google.maps.LatLngLiteral ={lat: -34.691794375358896, lng:-58.334464425920046};
  zoom = 15;
  
  circleCenter: google.maps.LatLngLiteral = {lat: -34.691794375358896, lng:-58.334464425920046};
  radius = 1000;

}
