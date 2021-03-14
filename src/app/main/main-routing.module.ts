import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from '../shared/layouts/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
