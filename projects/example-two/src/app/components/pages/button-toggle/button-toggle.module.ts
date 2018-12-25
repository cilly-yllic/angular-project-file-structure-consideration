import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ButtonToggleExclusiveModule } from '~examples/button-toggle/modules';

import { ButtonToggleComponent } from './button-toggle.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ButtonToggleExclusiveModule ],
  declarations: [ ButtonToggleComponent ],
  exports: [ ButtonToggleComponent ]
})
export class ButtonToggleModule { }
