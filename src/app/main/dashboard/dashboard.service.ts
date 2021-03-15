import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { DataSource, Markers } from './dashboard.model';
import { GenealResponse } from 'src/app/shared/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly endpoint = 'https://www.trackcorona.live/api/provinces';

  private $marker_object: BehaviorSubject<Markers | any> = new BehaviorSubject(
    null
  );

  public marker_object: Observable<Markers> = this.$marker_object.asObservable();

  constructor(private http: HttpClient) {}

  public set setMarker(v: Markers) {
    this.$marker_object.next(v);
  }
  /**
   * make petition to get makers data
   * @param parameter code(optional)
   * @returns Array Markers
   */
  public fetch(parameter?: HttpParams): Observable<GenealResponse<DataSource>> {
    return this.http.get<GenealResponse<DataSource>>(`${this.endpoint}`, {
      params: parameter,
    });
  }

  public getGeoJson(): Observable<any> {
    return this.http.get<any>(
      `https://www.santacruzdetenerife.es/opendata/dataset/f1728492-96a2-4b5f-8d89-ad932ff1f489/resource/0cae87a8-b1ba-4f9c-a963-2abcc1b926a2/download/distritos.geojson`
    );
  }
}
