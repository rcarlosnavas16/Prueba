import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { COUNTRY_CODE } from 'src/app/shared/utils/constants';
import { buildTemplate } from 'src/app/shared/utils/functions';
import { Marker, Markers, SELECTED_MAKER } from './dashboard.model';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public map = null;

  public markers: Array<Markers> = [];

  constructor(private dashboard_service: DashboardService) {}

  ngOnInit(): void {
    // get data
    this.onFetch();
    // GEOjSON
    this.dashboard_service.getGeoJson().subscribe((data) => console.log(data));
  }
  /**
   * get maker list
   * @name onFetch
   */
  public onFetch(): void {
    // call service
    this.dashboard_service.fetch().subscribe((maker_response) => {
      // on success response
      if (maker_response) {
        // filter data
        let array_data = maker_response.data.filter(
          (element) => element.country_code == COUNTRY_CODE
        );
        // add values
        array_data.map((item) => {
          // setting value
          let current_marker = new Marker(item);
          this.markers.push(current_marker.getMarker);
        });
        // load map
        this.loadMap();
      }
    });
  }
  public loadMap(): void {
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: SELECTED_MAKER,
        zoom: 3,
      }
    );

    this.markers.forEach((item) => {
      this.addMarker(item);
    });
  }
  /**
   * add a new marker
   * @param element
   */
  public addMarker(element: Markers) {
    let pop_up = new google.maps.InfoWindow({
      // build template
      content: buildTemplate(element),
    });

    let marker = new google.maps.Marker({
      position: element.position,
      map: this.map,
    });

    // send element to service
    marker.addListener('click', () => {
      // enable menu
      element.show_menu = true;
      // setting value
      this.dashboard_service.setMarker = element;
    });

    // show window on hover
    marker.addListener('mouseover', () => {
      pop_up.open(this.map, marker);
    });

    // close window when removing cursor
    marker.addListener('mouseout', () => {
      pop_up.close(this.map, marker);
    });
  }
}
