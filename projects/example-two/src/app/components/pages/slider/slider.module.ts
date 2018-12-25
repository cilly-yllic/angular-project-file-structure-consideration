import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { SliderConfigurableModule } from '~examples/slider/modules';

import { SliderComponent } from './slider.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, SliderConfigurableModule ],
  declarations: [ SliderComponent ],
  exports: [ SliderComponent ]
})
export class SliderModule { }
