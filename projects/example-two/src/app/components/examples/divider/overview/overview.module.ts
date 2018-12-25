import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatDividerModule } from '@angular/material';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, MatListModule, MatDividerModule ],
  declarations: [ OverviewComponent ],
  entryComponents: [ OverviewComponent ]
})
export class OverviewModule { }
