import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  /* lat = 37.09024;
  lng = -95.712891;
  googleMapType = 'satellite'; */
  public country_code: string = 'us';

  latitude = 43.879078;
  longitude = -103.4615581;
  selectedMarker: any;
  markers: Array<{ latitude: number; longitude: number }> = [];
  /* lat: number, lng: number */
  addMarker(value: any) {
    console.log('agregar', value);
    /* this.markers.push({ lat, lng, alpha: 0.4 }); */
  }

  /* max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map((marker) => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map((marker) => marker[coordType]));
  } */

  selectMarker(event: any) {
    console.log(event);

    /* this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude,
    }; */
  }

  constructor(private dashboard_service: DashboardService) {}

  ngOnInit(): void {
    let parameter = new HttpParams({ fromObject: { code: this.country_code } });
    this.dashboard_service.fetch(parameter).subscribe((data_response) => {
      let current_data = data_response.data.filter(
        (item: any) => item?.country_code == 'us'
      );
      this.markers = current_data;
      console.log(this.markers);
    });
  }
}
