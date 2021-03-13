import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MsgBoxComponent } from './components/msg-box/msg-box.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NavbarComponent } from './layouts/layouts-components/navbar/navbar.component';
import { SidenavComponent } from './layouts/layouts-components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    // LAYOUT
    FullLayoutComponent,
    // SERVICE
    MsgBoxComponent,
    // COMPONENT
    SidenavComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [FullLayoutComponent],
})
export class SharedModule {}
