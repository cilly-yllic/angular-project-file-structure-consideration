import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { HighlightComponent } from './highlight.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ HighlightComponent ],
  entryComponents: [ HighlightComponent ]
})
export class HighlightModule { }
