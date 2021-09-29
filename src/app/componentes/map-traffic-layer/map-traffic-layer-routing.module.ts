import { MapTrafficLayerComponent } from './map-traffic-layer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: '',
     component: MapTrafficLayerComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapTrafficLayerRoutingModule { }
