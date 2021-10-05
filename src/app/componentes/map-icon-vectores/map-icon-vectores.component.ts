import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-icon-vectores',
  templateUrl: './map-icon-vectores.component.html',
  styleUrls: ['./map-icon-vectores.component.css']
})
export class MapIconVectoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 12,
        center: { lat: 34.84555, lng: -111.8035 },
      }
    );

    const tourStops: [google.maps.LatLngLiteral, string][] = [
      [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
      [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
      [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
      [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
      [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
    ];

    const infoWindow = new google.maps.InfoWindow();

    const svgMarker = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "red",
      fillOpacity: 0.8,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    tourStops.forEach(([position, title], i) => {
      const marker:any = new google.maps.Marker({
        position,
        map,
        animation: google.maps.Animation.DROP,
        icon: svgMarker,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        };
      });
    }); 
  }

}
