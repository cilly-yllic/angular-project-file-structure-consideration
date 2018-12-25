import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { ExpandableRowsComponent } from './expandable-rows.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ ExpandableRowsComponent ],
  entryComponents: [ ExpandableRowsComponent ]
})
export class ExpandableRowsModule { }
