import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';

import { LabelComponent } from './label.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatCheckboxModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule ],
  declarations: [ LabelComponent ],
  entryComponents: [ LabelComponent ]
})
export class LabelModule { }
