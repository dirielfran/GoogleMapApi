import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapCircleComponent } from './map-circle.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'prueba',
        component: PruebaComponent,

      },
      {
        path: 'prueba2',
        component: Prueba2Component,

      },
      {
        path: 'mapa',
        component: MapCircleComponent,

      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapCircleRoutingModule { }
