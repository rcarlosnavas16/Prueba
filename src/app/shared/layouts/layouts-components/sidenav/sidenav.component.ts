import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectorRef, Component } from '@angular/core';
import { OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MAT_ICON } from 'src/app/shared/utils/constants';
import { CaseInfo, CASE_INFO } from './sidenav.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  private _mobileQueryListener: () => void;

  public mat_icon = MAT_ICON;

  public indicator: number = 0;

  public mobileQuery: MediaQueryList;

  public case_info: Array<CaseInfo> = CASE_INFO;

  @ViewChild('snav') snav: MatSidenav;

  constructor(
    snav: MatSidenav,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.snav = snav;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public navToggle(value: boolean) {
    if (value) {
      this.snav.toggle();
    }
  }
}
