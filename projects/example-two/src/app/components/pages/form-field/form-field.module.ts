import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  FormFieldOverviewModule, FormFieldLabelModule, FormFieldHintModule, FormFieldErrorModule, FormFieldPrefixSuffixModule,
  FormFieldThemingModule, FormFieldCustomControlModule
} from '~examples/form-field/modules';

import { FormFieldComponent } from './form-field.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    FormFieldOverviewModule, FormFieldLabelModule, FormFieldHintModule, FormFieldErrorModule, FormFieldPrefixSuffixModule,
    FormFieldThemingModule, FormFieldCustomControlModule,
  ],
  declarations: [ FormFieldComponent ],
  exports: [ FormFieldComponent ]
})
export class FormFieldModule { }
