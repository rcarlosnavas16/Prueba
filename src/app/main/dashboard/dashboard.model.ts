import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

import { Observable } from 'rxjs';

import { MSearch } from 'src/app/shared/directive/search';

export interface ConfigDataTable {
  paginator?: MatPaginator;
  sort?: MatSort;
  search?: MSearch;
  refresh: Observable<boolean>;
  filter?: MatButtonToggleGroup;
}

export interface DashboardTableItem {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
