import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { ErrorsComponent } from './errors.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatInputModule ],
  declarations: [ ErrorsComponent ],
  entryComponents: [ ErrorsComponent ]
})
export class ErrorsModule { }
