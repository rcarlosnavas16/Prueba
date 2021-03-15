import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApkMhYiS8J4jAQYrZSmDMgSqvUTh6ovj4',
    }),
  ],
})
export class DashboardModule {}
