import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { RadioButtonNgModelModule } from '~examples/radio-button/modules';

import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, RadioButtonNgModelModule ],
  declarations: [ RadioButtonComponent ],
  exports: [ RadioButtonComponent ]
})
export class RadioButtonModule { }
