import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { SortingComponent } from './sorting.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ SortingComponent ],
  entryComponents: [ SortingComponent ]
})
export class SortingModule { }
