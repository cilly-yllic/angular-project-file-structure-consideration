import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, MatChipsModule ],
  declarations: [ OverviewComponent ],
  entryComponents: [ OverviewComponent ]
})
export class OverviewModule { }
