import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapInfoWindowComponent } from './map-info-window.component';

const routes: Routes = [
  {
     path: '',
     component: MapInfoWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapInfoWindowRoutingModule { }
