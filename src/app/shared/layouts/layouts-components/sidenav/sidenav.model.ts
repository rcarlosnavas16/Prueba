import { Markers } from 'src/app/main/dashboard/dashboard.model';

export class MakerInfo {
  private marker: Markers;

  constructor(marker: Markers) {
    this.marker = {
      confirmed: marker.confirmed,
      country_code: marker.country_code,
      dead: marker.dead,
      location: marker.location,
      recovered: marker.recovered,
      updated: marker.updated,
      total_count: marker.total_count,
      show_menu: marker.show_menu,
      position: { lat: marker.position.lat, lng: marker.position.lng },
      map: marker.map,
      title: marker.title,
    };
  }

  public get getMakerInfo() {
    return this.marker;
  }
}
