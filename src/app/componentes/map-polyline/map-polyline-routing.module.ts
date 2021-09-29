import { MapPolylineComponent } from './map-polyline.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPolylineModule } from './map-polyline.module';

const routes: Routes = [
  {
     path: '',
     component: MapPolylineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPolylineRoutingModule { }
