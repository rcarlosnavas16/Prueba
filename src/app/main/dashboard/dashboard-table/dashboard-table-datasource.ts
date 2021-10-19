import { HttpParams } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';

import { map, switchMap } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

import { DashboardService } from '../dashboard.service';
import { compare } from 'src/app/shared/utils/functions';
import { ConfigDataTable, DashboardTableItem } from '../dashboard.model';

export class DashboardTableDataSource extends DataSource<DashboardTableItem> {
  /**
   * Data table configurations. Stream emits
   */
  private config!: ConfigDataTable;

  private loading_subject = new BehaviorSubject<boolean>(false);

  private total_count = 0;

  constructor(private dashboard_service: DashboardService) {
    super();
  }

  set setConfig(config: ConfigDataTable) {
    this.config = config;
  }

  get $loading(): Observable<boolean> {
    return this.loading_subject.asObservable();
  }

  get totalCount(): number {
    return this.total_count;
  }

  connect(): Observable<DashboardTableItem[]> {
    const dataMutations = [];

    dataMutations.push(observableOf([]));

    if (this.config.paginator) {
      dataMutations.push(this.config.paginator.page);
    }

    if (this.config.sort) {
      dataMutations.push(this.config.sort.sortChange);
    }

    if (this.config.search) {
      dataMutations.push(this.config.search.onChange);
    }

    if (this.config.filter) {
      dataMutations.push(this.config.filter.change);
    }

    if (this.config.refresh) {
      dataMutations.push(this.config.refresh);
    }

    return merge(...dataMutations).pipe(
      switchMap(async () => {
        return await this.getData();
      }),
      map((data) => {
        return this.getSortedData([...data]);
      })
    );
  }

  disconnect() {
    this.loading_subject.complete();
  }

  private getSortedData(data: DashboardTableItem[]) {
    if (!this.config?.sort?.active || this.config?.sort?.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let is_asc = this.config?.sort?.direction === 'asc';
      switch (this.config?.sort?.active) {
        case 'id':
          return compare(+a.id, +b.id, is_asc);
        case 'name':
          return compare(a.name.toLowerCase(), b.name.toLowerCase(), is_asc);
        case 'username':
          return compare(
            a.username.toLowerCase(),
            b.username.toLowerCase(),
            is_asc
          );
        case 'email':
          return compare(a.email.toLowerCase(), b.email.toLowerCase(), is_asc);
        case 'phone':
          return compare(+a.phone, +b.phone, is_asc);
        case 'address':
          return compare(
            a.address.street.toLowerCase(),
            b.address.street.toLowerCase(),
            is_asc
          );
        case 'website':
          return compare(
            a.website.toLowerCase(),
            b.website.toLowerCase(),
            is_asc
          );
        default:
          return 0;
      }
    });
  }

  private getData(): Promise<DashboardTableItem[]> {
    return new Promise((resolve) => {
      this.loading_subject.next(true);

      let parameters: any = {};

      if (this.config.paginator) {
        const paginator = this.config.paginator;
        parameters = {
          ...parameters,
          offset: (paginator.pageIndex * paginator.pageSize) | 1,
          limit: paginator.pageSize,
        };
      }

      if (this.config.search) {
        if (this.config.search.getValue) {
          parameters = {
            ...parameters,
            email: this.config.search.getValue,
          };
        } else {
          delete parameters['search'];
        }
      }

      if (this.config.filter) {
        if (this.config.filter.value) {
          // remove last filter
          delete parameters['is_contacted'];
          delete parameters['is_registered'];
          // concat new filter to params
          parameters = {
            ...parameters,
            ...this.config.filter.value,
          };
        } else {
          delete parameters['is_contacted'];
          delete parameters['is_registered'];
        }
      }

      let params = new HttpParams({ fromObject: parameters });

      this.dashboard_service.fetch(params).subscribe((rta) => {
        this.total_count = rta.length;
        resolve(rta);
      });
    });
  }
}
