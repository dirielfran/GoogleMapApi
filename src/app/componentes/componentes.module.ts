import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapPolylineComponent } from './map-polyline/map-polyline.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';
import { MapRectangleComponent } from './map-rectangle/map-rectangle.component';
import { MapCircleComponent } from './map-circle/map-circle.component';
import { MapGroundOverlayComponent } from './map-ground-overlay/map-ground-overlay.component';
import { MapKmlLayerComponent } from './map-kml-layer/map-kml-layer.component';
import { MapTrafficLayerComponent } from './map-traffic-layer/map-traffic-layer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { MapEventosComponent } from './map-eventos/map-eventos.component';
import { MapEventosModule } from './map-eventos/map-eventos.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    GoogleMapComponent,
    MapInfoWindowComponent,
    MapPolylineComponent,
    MapPolygonComponent,
    MapRectangleComponent,
    MapCircleComponent,
    MapGroundOverlayComponent,
    MapKmlLayerComponent,
    MapTrafficLayerComponent,
    MapEventosComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    CardModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    GoogleMapComponent,
    MapInfoWindowComponent,
    MapPolylineComponent,
    MapPolygonComponent,
    MapRectangleComponent,
    MapCircleComponent,
    MapGroundOverlayComponent,
    MapKmlLayerComponent,
    MapTrafficLayerComponent,
    MapEventosModule
  ]
})
export class ComponentesModule { }
