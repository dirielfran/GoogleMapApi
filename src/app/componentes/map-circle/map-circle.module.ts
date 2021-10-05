import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapCircleRoutingModule } from './map-circle-routing.module';

import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    PruebaComponent,
    Prueba2Component
  ],
  imports: [
    CommonModule,
    MapCircleRoutingModule,
    GoogleMapsModule,
    PanelModule
  ],
  providers:[],
})
export class MapCircleModule { }
