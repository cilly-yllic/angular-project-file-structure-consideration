import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ButtonTypesModule } from '~examples/button/modules';

import { ButtonComponent } from './button.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ButtonTypesModule ],
  declarations: [ ButtonComponent ],
  exports: [ ButtonComponent ]
})
export class ButtonModule { }
