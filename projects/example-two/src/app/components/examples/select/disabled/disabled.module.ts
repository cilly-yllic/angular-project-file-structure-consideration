import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';

import { DisabledComponent } from './disabled.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule, MatSelectModule ],
  declarations: [ DisabledComponent ],
  entryComponents: [ DisabledComponent ]
})
export class DisabledModule { }
