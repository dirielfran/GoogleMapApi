import { Component, OnInit, ViewChild } from '@angular/core';
import { MapDirectionsRenderer, MapDirectionsService, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @ViewChild(MapDirectionsRenderer) directionRender: MapDirectionsRenderer;

  directionsDisplay1: Observable<google.maps.DirectionsResult | undefined>;
  directionsDisplay2: Observable<google.maps.DirectionsResult | undefined>;
  displayOptions:google.maps.DirectionsRendererOptions={suppressMarkers:true,suppressInfoWindows:true};
  dataArray1=[
    {position:{ lat: -33.880966, lng: -60.566377 },info:'Punto0001'},
    {position:{lat:-33.887462720411314,lng:-60.570660396900806},info:'Punto0002'},
    {position:{lat:-33.889573989649705, lng:-60.57072294177235},info:'Punto0003'},
  ];
  dataArray2=[
    {position:{lat:-33.87855340086212, lng:-60.54542620167361},info:'Punto0004'},
    {position:{ lat: -33.910331, lng:-60.585483 },info:'Punto0005'}
  ];
  center = this.dataArray1[0];
  wayPoints_: google.maps.DirectionsWaypoint[] = [];
  info="";
  cambioRuta:boolean=false;
  options={mapTypeControl:false,};
  icon_yellow='assets/geo-programmed.png';
  icon_green='assets/geo-concluded.png';

  constructor(private directionsService: MapDirectionsService) { }

  ngOnInit() {
    this.directionsDisplay1= this.metodoRuta(this.dataArray1) ;
    this.directionsDisplay2= this.metodoRuta(this.dataArray2) ;
  }

  metodoRuta(array:any[]) {
    this.wayPoints_=[];
    array.forEach(
      (data:any,index)=>{
        if(index>0 && index<array.length-1)
        this.wayPoints_.push({location:new google.maps.LatLng(data.position).toUrlValue()});
      }
    );

   const display = this.directionsService.route({
      origin: array[0].position,
      destination: array[array.length-1].position,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints:this.wayPoints_,
      optimizeWaypoints:true,
      }).pipe(map((response:any) => response.result));
      return display;
  }
  aux:number;
  open(marker: MapMarker,elemento:number,arrayNumber:number) {
    this.aux=elemento;
    this.info=arrayNumber.toString();
    this.infoWindow.open(marker);
  }
  cambiar(event:any){
    let value=parseInt(event.target.value);
    this.infoWindow.close();

    if(value===2){
      const e=this.dataArray1[this.aux];
      this.dataArray2.push(e);
      this.dataArray1.splice(this.aux,1);
    }else{
      const e=this.dataArray2[this.aux];
      this.dataArray1.push(e);
      this.dataArray2.splice(this.aux,1);
    }
    this.dataArray1.sort((a,b)=>a.info.localeCompare(b.info));
    this.dataArray2.sort((a,b)=>a.info.localeCompare(b.info));
    this.directionRender=undefined;
    this.directionsDisplay1= this.metodoRuta(this.dataArray1) ;
    this.directionsDisplay2= this.metodoRuta(this.dataArray2) ;
  }
}
