import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapGroundOverlayComponent } from './map-ground-overlay.component';

const routes: Routes = [
  {
     path: '',
     component: MapGroundOverlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapGroundOverlayRoutingModule { }
