import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { ValueBindingComponent } from './value-binding.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatSelectModule ],
  declarations: [ ValueBindingComponent ],
  entryComponents: [ ValueBindingComponent ]
})
export class ValueBindingModule { }
