import { TestBed } from '@angular/core/testing';

import { MapCircleService } from './map-circle.service';

describe('MapCircleService', () => {
  let service: MapCircleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapCircleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
