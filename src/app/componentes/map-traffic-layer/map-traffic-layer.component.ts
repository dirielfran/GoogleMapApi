import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-traffic-layer',
  templateUrl: './map-traffic-layer.component.html',
  styleUrls: ['./map-traffic-layer.component.css']
})
export class MapTrafficLayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  center: google.maps.LatLngLiteral ={lat: -34.691794375358896, lng:-58.334464425920046};
  zoom = 15;

  heatmapOptions = {radius: 5};
  heatmapData = [
    {lat: 37.782, lng: -122.447},
    {lat: 37.782, lng: -122.445},
    {lat: 37.782, lng: -122.443},
    {lat: 37.782, lng: -122.441},
    {lat: 37.782, lng: -122.439},
    {lat: 37.782, lng: -122.437},
    {lat: 37.782, lng: -122.435},
    {lat: 37.785, lng: -122.447},
    {lat: 37.785, lng: -122.445},
    {lat: 37.785, lng: -122.443},
    {lat: 37.785, lng: -122.441},
    {lat: 37.785, lng: -122.439},
    {lat: 37.785, lng: -122.437},
    {lat: 37.785, lng: -122.435}
  ];
}
