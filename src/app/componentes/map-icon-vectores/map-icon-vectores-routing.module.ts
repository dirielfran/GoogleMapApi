import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapIconVectoresComponent } from './map-icon-vectores.component';

const routes: Routes = [
  {
     path: '',
     component: MapIconVectoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapIconVectoresRoutingModule { }
