import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { SlideToggleConfigurableModule } from '~examples/slide-toggle/modules';

import { SlideToggleComponent } from './slide-toggle.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, SlideToggleConfigurableModule ],
  declarations: [ SlideToggleComponent ],
  exports: [ SlideToggleComponent ]
})
export class SlideToggleModule { }
