import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapCircleComponent } from './map-circle.component';

const routes: Routes = [
  {
     path: '',
     component: MapCircleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapCircleRoutingModule { }
