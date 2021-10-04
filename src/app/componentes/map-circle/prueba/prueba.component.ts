import { Component, OnInit, ViewChild } from '@angular/core';
import { MapDirectionsRenderer, MapDirectionsService, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @ViewChild(MapDirectionsRenderer) directionRender: MapDirectionsRenderer;

  directionsDisplay: Observable<google.maps.DirectionsResult | undefined>;
  displayOptions:google.maps.DirectionsRendererOptions={suppressMarkers:true,suppressInfoWindows:true};
  dataArray=[
    {position:{ lat: -33.880966, lng: -60.566377 },info:'Punto0001'},
    {position:{lat:-33.887462720411314,lng:-60.570660396900806},info:'Punto0002'},
    {position:{lat:-33.889573989649705, lng:-60.57072294177235},info:'Punto0003'},
    {position:{lat:-33.87855340086212, lng:-60.54542620167361},info:'Punto0004'},
    {position:{ lat: -33.910331, lng:-60.585483 },info:'Punto0005'}
  ];
  center = this.dataArray[0];
  wayPoints_: google.maps.DirectionsWaypoint[] = [];
  info="";
  cambioRuta:boolean=false;
  options={
    mapTypeControl:false,

  };
  icon='assets/geo-programmed.png';
  constructor(private directionsService: MapDirectionsService) { }

  ngOnInit() {
    this.metodoRuta() ;
  }

  metodoRuta() {
    this.wayPoints_=[];
    this.dataArray.forEach(
      (data,index)=>{
        if(index>0 && index<this.dataArray.length-1)
        this.wayPoints_.push({location:new google.maps.LatLng(data.position).toUrlValue()});
      }
    );

    this.directionsDisplay = this.directionsService.route({
      origin: this.dataArray[0].position,
      destination: this.dataArray[this.dataArray.length-1].position,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints:this.wayPoints_,
      optimizeWaypoints:true,
      }).pipe(map((response:any) => response.result));
  }
  addMarker(event: google.maps.MapMouseEvent){
    this.dataArray.push({position:event.latLng.toJSON(),info:'Punto'+(parseInt(this.dataArray[this.dataArray.length-1].info.padEnd(4))+1).toString().slice(-4)});
    this.directionRender=undefined;
    this.metodoRuta();
  }

  openInfoWindow(marker: MapMarker,i:number) {
    this.info=this.dataArray[i].info;
    this.cambioRuta=false
    this.infoWindow.open(marker);
  }
  cambio(marker: MapMarker,i:number) {
    this.info='cambio ruta';
    this.cambioRuta=true
    this.infoWindow.open(marker);
  }
}
