import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { DrawerOverviewComponent } from './drawer-overview.component';

@NgModule({
  imports: [ CommonModule, MatSidenavModule ],
  declarations: [ DrawerOverviewComponent ],
  entryComponents: [ DrawerOverviewComponent ]
})
export class DrawerOverviewModule { }
