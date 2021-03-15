// default US location
export const SELECTED_MAKER = {
  lat: 43.879078,
  lng: -103.4615581,
};

export interface DataSource {
  confirmed: number;
  country_code: string;
  dead: number;
  latitude: number;
  longitude: number;
  location: string;
  recovered: number;
  updated: Date;
}

export interface Markers extends MarkerOption {
  confirmed: number;
  country_code: string;
  dead: number;
  location: string;
  recovered: number;
  updated: Date;
  total_count?: number;
}

export interface MarkerOption {
  position: Positions;
  map?: any;
  title?: string;
}

export interface Positions {
  lat: number;
  lng: number;
}

export class Marker {
  private marker: Markers;

  constructor(item: DataSource) {
    this.marker = {
      confirmed: item.confirmed,
      country_code: item.country_code,
      dead: item.dead,
      location: item.location,
      recovered: item.recovered,
      updated: item.updated,
      total_count: item.confirmed + item.dead + item.recovered,
      position: { lat: item.latitude, lng: item.longitude },
    };
  }

  public get getMarker() {
    return this.marker;
  }
}
