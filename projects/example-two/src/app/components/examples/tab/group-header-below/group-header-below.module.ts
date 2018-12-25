import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { GroupHeaderBelowComponent } from './group-header-below.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ GroupHeaderBelowComponent ],
  entryComponents: [ GroupHeaderBelowComponent ]
})
export class GroupHeaderBelowModule { }
