import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DataSource } from './dashboard.model';
import { GenealResponse } from 'src/app/shared/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly endpoint = 'https://www.trackcorona.live/api/provinces';

  constructor(private http: HttpClient) {}
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
      `https://api.github.com/repos/unitedstates/districts/contents/cds/2012?ref=gh-pages`
    );
  }
}
