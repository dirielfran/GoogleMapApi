import { Injectable } from '@angular/core';
import { MapRectangleModule } from '../map-rectangle/map-rectangle.module';
import { MapCircleModule } from './map-circle.module';

@Injectable({
  providedIn: MapCircleModule
})
export class MapCircleService {

  constructor() { }
}
