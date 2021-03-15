import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectorRef, Component } from '@angular/core';
import { OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MakerInfo } from './sidenav.model';
import { MAT_ICON } from 'src/app/shared/utils/constants';
import { Markers } from 'src/app/main/dashboard/dashboard.model';
import { DashboardService } from 'src/app/main/dashboard/dashboard.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  private _mobileQueryListener: () => void;

  public mat_icon = MAT_ICON;

  public mobileQuery: MediaQueryList;

  public marker: Markers = {
    confirmed: 0,
    country_code: '',
    dead: 0,
    location: '',
    recovered: 0,
    updated: '',
    total_count: 0,
    show_menu: false,
    position: { lat: 0, lng: 0 },
    map: null,
    title: '',
  };

  @ViewChild('snav') snav: MatSidenav;

  constructor(
    snav: MatSidenav,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    private dashboard_service: DashboardService
  ) {
    this.snav = snav;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.dashboard_service.marker_object.subscribe((marker_response) => {
      // on success response
      if (marker_response) {
        let result = new MakerInfo(marker_response);
        this.marker = result.getMakerInfo;
        this.snav.open();
        console.log(this.marker.updated);
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public navToggle(value: boolean) {
    if (value) {
      this.snav.toggle();
    }
  }
}
