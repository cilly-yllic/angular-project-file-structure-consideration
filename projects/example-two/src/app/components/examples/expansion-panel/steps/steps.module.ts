import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatDatepickerModule, MatExpansionModule, MatIconModule, MatInputModule, MatNativeDateModule
} from '@angular/material';

import { StepsComponent } from './steps.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatDatepickerModule, MatExpansionModule, MatIconModule, MatInputModule, MatNativeDateModule ],
  declarations: [ StepsComponent ],
  entryComponents: [ StepsComponent ]
})
export class StepsModule { }
