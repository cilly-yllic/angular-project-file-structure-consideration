import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule } from '@angular/material';

import { FilteringComponent } from './filtering.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatTableModule ],
  declarations: [ FilteringComponent ],
  entryComponents: [ FilteringComponent ]
})
export class FilteringModule { }
