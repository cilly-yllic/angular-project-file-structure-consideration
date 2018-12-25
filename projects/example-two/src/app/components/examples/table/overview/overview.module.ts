import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatPaginatorModule, MatTableModule } from '@angular/material';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatPaginatorModule, MatTableModule ],
  declarations: [ OverviewComponent ],
  entryComponents: [ OverviewComponent ]
})
export class OverviewModule { }
