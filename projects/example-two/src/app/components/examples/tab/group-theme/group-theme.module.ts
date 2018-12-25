import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule, MatTabsModule } from '@angular/material';

import { GroupThemeComponent } from './group-theme.component';

@NgModule({
  imports: [ CommonModule, MatButtonToggleModule, MatTabsModule ],
  declarations: [ GroupThemeComponent ],
  entryComponents: [ GroupThemeComponent ]
})
export class GroupThemeModule { }
