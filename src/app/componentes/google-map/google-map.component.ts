
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

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

  click(event: google.maps.MouseEvent) {
    console.log(event)
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
