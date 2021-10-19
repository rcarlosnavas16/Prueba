import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MSearch } from 'src/app/shared/directive/search';
import { PAGINATOR_OPTS } from 'src/app/shared/utils/constants';
import { DashboardTableItem } from '../dashboard.model';
import { DashboardService } from '../dashboard.service';
import { DashboardTableDataSource } from './dashboard-table-datasource';

export interface NetworkStatus {
  is_completed: Boolean;
  referenced: Number;
  registered_customers: Number;
  registered_providers: Number;
  required: Number;
  required_customers: Number;
  required_providers: Number;
}

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent
  implements AfterViewInit, OnInit, OnDestroy
{
  @Input('search') search!: MSearch;
  @Input('filter') filter!: MatButtonToggleGroup;

  @Input() refresh!: Observable<boolean>;
  @Input() refreshStatus!: Observable<boolean>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<DashboardTableItem>;

  private destroy: Subject<any>;

  public status!: NetworkStatus;

  public PAGINATOR_OPTS = PAGINATOR_OPTS;

  public data_source: DashboardTableDataSource;

  public displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'address',
    'website',
  ];

  constructor(private dashboard_service: DashboardService) {
    this.destroy = new Subject();
    this.data_source = new DashboardTableDataSource(this.dashboard_service);
  }

  public ngOnInit() {
    this.refreshStatus.pipe(takeUntil(this.destroy));
  }

  public ngAfterViewInit() {
    this.data_source.setConfig = {
      paginator: this.paginator,
      refresh: this.refresh,
      search: this.search,
      filter: this.filter,
      sort: this.sort,
    };
    this.table.dataSource = this.data_source;
  }

  public ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
