import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatChipsModule, MatIconModule, MatInputModule } from '@angular/material';

import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatAutocompleteModule, MatChipsModule, MatIconModule, MatInputModule ],
  declarations: [ AutocompleteComponent ],
  entryComponents: [ AutocompleteComponent ]
})
export class AutocompleteModule { }
