import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DashboardTableItem } from './dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly endpoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  /**
   * make petition to get post data
   * @param parameter (optional)
   * @returns Array post
   */
  public fetch(parameter?: HttpParams): Observable<DashboardTableItem[]> {
    return this.http.get<DashboardTableItem[]>(`${this.endpoint}`, {
      params: parameter,
    });
  }
}
