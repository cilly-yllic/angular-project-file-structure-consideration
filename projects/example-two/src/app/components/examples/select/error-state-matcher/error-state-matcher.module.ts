import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';

import { ErrorStateMatcherComponent } from './error-state-matcher.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule, MatSelectModule ],
  declarations: [ ErrorStateMatcherComponent ],
  entryComponents: [ ErrorStateMatcherComponent ]
})
export class ErrorStateMatcherModule { }
