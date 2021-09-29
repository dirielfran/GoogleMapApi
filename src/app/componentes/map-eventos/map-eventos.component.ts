import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map-eventos',
  templateUrl: './map-eventos.component.html',
  styleUrls: ['./map-eventos.component.css']
})
export class MapEventosComponent implements OnInit {

  constructor() { }

  @ViewChild(GoogleMap, { static: false }) mapa!: GoogleMap;

  zoom = 12
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions  = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  //Obtiene el centro
  logCenter() {
    console.log(JSON.stringify(this.mapa.getCenter()))
  }

  //Obtiene el centro
  getZoom(){
    console.log(JSON.stringify(this.mapa.getZoom()))
  }

  //Event Double Click
  doubleClick(event: google.maps.MouseEvent) {
    console.log(event)
    this.logCenter();
    this.getZoom();
  }

  //Event change Center
  changeCenter() {
    console.log('Evento cambio')
  }

  //DragEvent
  eventDrag(){
    console.log('Evento Grag')
  }

  //Change Zoom
  zoomChanged(){
    console.log('zoomChanged')
  }

  zoomIn() {
    let variable = this.options.maxZoom == undefined ? this.zoom : this.options.maxZoom;
    if (this.zoom < variable) this.zoom++
  }

  zoomOut() {
    let variable = this.options.minZoom== undefined ? this.zoom : this.options.minZoom;
    if (this.zoom > variable) this.zoom--
  }
}
