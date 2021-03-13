import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MaterialModules } from './material';
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
  imports: [
    CommonModule,
    RouterModule,
    // MATERIAL
    MaterialModules,
    MatToolbarModule,
    MatSidenavModule,
    // OTHERS
    FlexLayoutModule,
  ],
  exports: [FullLayoutComponent, MaterialModules, FlexLayoutModule],
})
export class SharedModule {}
