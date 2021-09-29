import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGoogleMaps';

  options: google.maps.MapOptions = {
    center: {lat: -34.69485538726678, lng: -58.32933609231212},
    zoom: 4
  };

  apiLoaded: Observable<boolean>;
  visibleSidebar1: any;

  constructor(httpClient: HttpClient, private primengConfig: PrimeNGConfig) {
    this.apiLoaded = httpClient.jsonp('https://maps.google.com/maps/api/js?sensor=false&libraries=visualization', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
