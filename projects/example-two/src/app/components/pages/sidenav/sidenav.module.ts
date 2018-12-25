import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { SidenavDrawerOverviewModule, SidenavAutosizeModule } from '~examples/sidenav/modules';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, SidenavDrawerOverviewModule, SidenavAutosizeModule ],
  declarations: [ SidenavComponent ],
  exports: [ SidenavComponent ]
})
export class SidenavModule { }
