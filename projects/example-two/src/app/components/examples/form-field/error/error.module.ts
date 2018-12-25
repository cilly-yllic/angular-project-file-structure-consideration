import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { ErrorComponent } from './error.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule ],
  declarations: [ ErrorComponent ],
  entryComponents: [ ErrorComponent ]
})
export class ErrorModule { }
