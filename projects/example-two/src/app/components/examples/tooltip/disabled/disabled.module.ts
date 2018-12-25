import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

import { DisabledComponent } from './disabled.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatTooltipModule ],
  declarations: [ DisabledComponent ],
  entryComponents: [ DisabledComponent ]
})
export class DisabledModule { }
