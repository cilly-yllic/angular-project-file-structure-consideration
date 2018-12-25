import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  InputOverviewModule, InputErrorStateMatcherModule, InputAutosizeTextareaModule, InputClearableModule, InputErrorsModule,
  InputFormModule, InputHintModule, InputPrefixSuffixModule
} from '~examples/input/modules';

import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    InputOverviewModule, InputErrorStateMatcherModule, InputAutosizeTextareaModule, InputClearableModule, InputErrorsModule,
    InputFormModule, InputHintModule, InputPrefixSuffixModule
  ],
  declarations: [ InputComponent ],
  exports: [ InputComponent ]
})
export class InputModule { }
