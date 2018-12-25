import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { ValueComponent } from './value.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule ],
  declarations: [ ValueComponent ],
  entryComponents: [ ValueComponent ]
})
export class ValueModule { }
