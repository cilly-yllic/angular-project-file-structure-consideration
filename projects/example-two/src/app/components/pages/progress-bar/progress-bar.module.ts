import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ProgressBarConfigurableModule } from '~examples/progress-bar/modules';

import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ProgressBarConfigurableModule ],
  declarations: [ ProgressBarComponent ],
  exports: [ ProgressBarComponent ]
})
export class ProgressBarModule { }
