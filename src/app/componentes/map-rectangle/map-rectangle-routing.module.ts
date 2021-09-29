import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapRectangleComponent } from './map-rectangle.component';

const routes: Routes = [
  {
     path: '',
     component: MapRectangleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRectangleRoutingModule { }
