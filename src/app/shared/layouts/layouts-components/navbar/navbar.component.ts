import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/main/dashboard/dashboard.service';
import { MAT_ICON } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public mat_icon = MAT_ICON;

  public locations: string = '';

  @Output() show_nav: EventEmitter<boolean> = new EventEmitter();

  constructor(private dashboard_service: DashboardService) {}

  ngOnInit(): void {
    this.dashboard_service.marker_object.subscribe((marker_response) => {
      // on success response
      if (marker_response) {
        this.locations = marker_response.location;
      }
    });
  }
  /**
   * show/hide sideNav menu
   * @param value (required)
   */
  public onAction(value: boolean): void {
    this.show_nav.emit(value);
  }
}
