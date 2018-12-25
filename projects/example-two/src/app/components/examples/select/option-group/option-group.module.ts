import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { OptionGroupComponent } from './option-group.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule ],
  declarations: [ OptionGroupComponent ],
  entryComponents: [ OptionGroupComponent ]
})
export class OptionGroupModule { }
