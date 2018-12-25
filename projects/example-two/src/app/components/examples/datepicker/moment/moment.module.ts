import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { MomentComponent } from './moment.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule ],
  declarations: [ MomentComponent ],
  entryComponents: [ MomentComponent ]
})
export class MomentModule { }
