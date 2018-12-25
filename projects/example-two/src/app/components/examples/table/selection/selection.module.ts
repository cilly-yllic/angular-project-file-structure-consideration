import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatTableModule } from '@angular/material';

import { SelectionComponent } from './selection.component';

@NgModule({
  imports: [ CommonModule, MatCheckboxModule, MatTableModule ],
  declarations: [ SelectionComponent ],
  entryComponents: [ SelectionComponent ]
})
export class SelectionModule { }
