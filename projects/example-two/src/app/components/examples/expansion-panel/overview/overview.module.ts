import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatInputModule } from '@angular/material';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, MatExpansionModule, MatInputModule ],
  declarations: [ OverviewComponent ],
  entryComponents: [ OverviewComponent ]
})
export class OverviewModule { }
