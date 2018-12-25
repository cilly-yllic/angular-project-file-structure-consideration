import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { RowContextComponent } from './row-context.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ RowContextComponent ],
  entryComponents: [ RowContextComponent ]
})
export class RowContextModule { }
