import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ FilterComponent ],
  entryComponents: [ FilterComponent ]
})
export class FilterModule { }
