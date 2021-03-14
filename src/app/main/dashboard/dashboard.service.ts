import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly endpoint = 'https://www.trackcorona.live/api/provinces';

  constructor(private http: HttpClient) {}
  /**
   *
   * @param parameter
   * @returns
   */
  public fetch(parameter?: HttpParams): Observable<any> {
    return this.http.get<any>(`${this.endpoint}`, { params: parameter });
  }
}
