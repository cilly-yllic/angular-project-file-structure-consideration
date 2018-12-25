import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { FormatsComponent } from './formats.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule ],
  declarations: [ FormatsComponent ],
  entryComponents: [ FormatsComponent ]
})
export class FormatsModule { }
