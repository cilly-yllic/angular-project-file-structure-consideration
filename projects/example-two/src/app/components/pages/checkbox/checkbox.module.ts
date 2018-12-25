import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { CheckboxConfigurableModule } from '~examples/checkbox/modules';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, CheckboxConfigurableModule ],
  declarations: [ CheckboxComponent ],
  exports: [ CheckboxComponent ]
})
export class CheckboxModule { }
