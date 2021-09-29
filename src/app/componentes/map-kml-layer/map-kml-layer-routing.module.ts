import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapKmlLayerComponent } from './map-kml-layer.component';

const routes: Routes = [
  {
     path: '',
     component: MapKmlLayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapKmlLayerRoutingModule { }
