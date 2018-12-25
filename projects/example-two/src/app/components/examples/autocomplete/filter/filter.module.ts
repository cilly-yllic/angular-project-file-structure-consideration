import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ FilterComponent ],
  entryComponents: [ FilterComponent ]
})
export class FilterModule { }
