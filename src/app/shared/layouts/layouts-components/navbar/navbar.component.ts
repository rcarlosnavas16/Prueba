import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() show_nav: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  /**
   * show/hide sideNav menu
   * @param value (required)
   */
  public onAction(value: boolean): void {
    this.show_nav.emit(value);
  }
}
