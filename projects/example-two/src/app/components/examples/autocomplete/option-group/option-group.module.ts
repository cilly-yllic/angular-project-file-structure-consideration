import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { OptionGroupComponent } from './option-group.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ OptionGroupComponent ],
  entryComponents: [ OptionGroupComponent ]
})
export class OptionGroupModule { }
