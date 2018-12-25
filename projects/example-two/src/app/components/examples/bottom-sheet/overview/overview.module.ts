import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule, MatButtonModule, MatListModule } from '@angular/material';

import { OverviewComponent, OverviewSheetComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, MatBottomSheetModule, MatButtonModule, MatListModule ],
  declarations: [ OverviewComponent, OverviewSheetComponent ],
  entryComponents: [ OverviewComponent, OverviewSheetComponent ]
})
export class OverviewModule { }
