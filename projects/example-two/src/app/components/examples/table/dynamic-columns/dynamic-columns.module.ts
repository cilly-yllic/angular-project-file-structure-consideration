import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule } from '@angular/material';

import { DynamicColumnsComponent } from './dynamic-columns.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatTableModule ],
  declarations: [ DynamicColumnsComponent ],
  entryComponents: [ DynamicColumnsComponent ]
})
export class DynamicColumnsModule { }
