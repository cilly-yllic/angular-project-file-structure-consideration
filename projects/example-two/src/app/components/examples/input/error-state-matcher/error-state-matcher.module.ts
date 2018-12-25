import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { ErrorStateMatcherComponent } from './error-state-matcher.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatInputModule ],
  declarations: [ ErrorStateMatcherComponent ],
  entryComponents: [ ErrorStateMatcherComponent ]
})
export class ErrorStateMatcherModule { }
