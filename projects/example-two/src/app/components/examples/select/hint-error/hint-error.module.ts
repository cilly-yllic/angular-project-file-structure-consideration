import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { HintErrorComponent } from './hint-error.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule ],
  declarations: [ HintErrorComponent ],
  entryComponents: [ HintErrorComponent ]
})
export class HintErrorModule { }
