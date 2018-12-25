import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule } from '@angular/material';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatMenuModule ],
  declarations: [ OverviewComponent ],
  entryComponents: [ OverviewComponent ]
})
export class OverviewModule { }
