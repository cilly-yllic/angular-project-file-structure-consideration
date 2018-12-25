import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { StepperOverviewModule } from '~examples/stepper/modules';

import { StepperComponent } from './stepper.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, StepperOverviewModule ],
  declarations: [ StepperComponent ],
  exports: [ StepperComponent ]
})
export class StepperModule { }
