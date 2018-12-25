import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { NavBarBasicComponent } from './nav-bar-basic.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ NavBarBasicComponent ],
  entryComponents: [ NavBarBasicComponent ]
})
export class NavBarBasicModule { }
