import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { MSearch } from 'src/app/shared/directive/search';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MSearch) search!: MSearch;
  @ViewChild(MatButtonToggleGroup) filter!: MatButtonToggleGroup;

  public refresh: EventEmitter<boolean> = new EventEmitter();
  public refreshStatus = new BehaviorSubject(true);

  constructor() {}

  ngOnInit(): void {}
}
