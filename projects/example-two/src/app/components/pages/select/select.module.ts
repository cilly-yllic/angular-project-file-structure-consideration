import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  SelectOverviewModule, SelectValueBindingModule, SelectFormModule, SelectHintErrorModule, SelectDisabledModule, SelectResetModule,
  SelectOptionGroupModule, SelectMultipleModule, SelectCustomTriggerModule, SelectNoRippleModule, SelectPanelClassModule,
  SelectErrorStateMatcherModule
} from '~examples/select/modules';

import { SelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    SelectOverviewModule, SelectValueBindingModule, SelectFormModule, SelectHintErrorModule, SelectDisabledModule, SelectResetModule,
    SelectOptionGroupModule, SelectMultipleModule, SelectCustomTriggerModule, SelectNoRippleModule, SelectPanelClassModule,
    SelectErrorStateMatcherModule
  ],
  declarations: [ SelectComponent ],
  exports: [ SelectComponent ]
})
export class SelectModule { }
