import { MapEventosModule } from './componentes/map-eventos/map-eventos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    children: [
      {
        path: 'circulo',
        loadChildren: () => import('./componentes/map-circle/map-circle.module').then(m => m.MapCircleModule),
      },
      {
        path: 'mapGroundOverlay',
        loadChildren: () => import('./componentes/map-ground-overlay/map-ground-overlay.module').then(m => m.MapGroundOverlayModule),
      },
      {
        path: 'mapInfo',
        loadChildren: () => import('./componentes/map-info-window/map-info-window.module').then(m => m.MapInfoWindowModule),
      },
      {
        path: 'mapKml',
        loadChildren: () => import('./componentes/map-kml-layer/map-kml-layer.module').then(m => m.MapKmlLayerModule),
      },
      {
        path: 'poligono',
        loadChildren: () => import('./componentes/map-polygon/map-polygon.module').then(m => m.MapPolygonModule),
      },
      {
        path: 'polyline',
        loadChildren: () => import('./componentes/map-polyline/map-polyline.module').then(m => m.MapPolylineModule),
      },
      {
        path: 'rectangulo',
        loadChildren: () => import('./componentes/map-rectangle/map-rectangle.module').then(m => m.MapRectangleModule),
      },
      {
        path: 'trafico',
        loadChildren: () => import('./componentes/map-traffic-layer/map-traffic-layer.module').then(m => m.MapTrafficLayerModule),
      },
      {
        path: 'eventos',
        loadChildren: () => import('./componentes/map-eventos/map-eventos.module').then(m => m.MapEventosModule),
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
