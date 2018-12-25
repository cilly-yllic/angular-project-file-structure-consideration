import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { MultipleComponent } from './multiple.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule ],
  declarations: [ MultipleComponent ],
  entryComponents: [ MultipleComponent ]
})
export class MultipleModule { }
