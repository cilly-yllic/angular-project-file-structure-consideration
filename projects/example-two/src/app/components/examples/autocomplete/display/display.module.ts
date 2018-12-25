import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { DisplayComponent } from './display.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ DisplayComponent ],
  entryComponents: [ DisplayComponent ]
})
export class DisplayModule { }
