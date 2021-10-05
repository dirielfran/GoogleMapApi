import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapAgrupacionesComponent } from './map-agrupaciones/map-agrupaciones.component';

const routes: Routes = [
  {
     path: '',
     component: MapAgrupacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapAgrupacionesRoutingModule { }
