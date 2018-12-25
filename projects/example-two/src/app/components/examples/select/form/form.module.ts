import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { FormComponent } from './form.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatInputModule, MatSelectModule ],
  declarations: [ FormComponent ],
  entryComponents: [ FormComponent ]
})
export class FormModule { }
