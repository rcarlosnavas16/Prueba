import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  /* lat = 37.09024;
  lng = -95.712891;
  googleMapType = 'satellite'; */

  latitude = 43.879078;
  longitude = -103.4615581;
  selectedMarker: any;
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 },
  ];
  /* lat: number, lng: number */
  addMarker(value: any) {
    console.log('agregar', value);
    /* this.markers.push({ lat, lng, alpha: 0.4 }); */
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map((marker) => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map((marker) => marker[coordType]));
  }

  selectMarker(event: any) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude,
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
