import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { NestedOverviewComponent } from './nested-overview.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatTreeModule ],
  declarations: [ NestedOverviewComponent ],
  entryComponents: [ NestedOverviewComponent ]
})
export class NestedOverviewModule { }
