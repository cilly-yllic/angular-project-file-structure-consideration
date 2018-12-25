import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { SimpleComponent } from './simple.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ SimpleComponent ],
  entryComponents: [ SimpleComponent ]
})
export class SimpleModule { }
