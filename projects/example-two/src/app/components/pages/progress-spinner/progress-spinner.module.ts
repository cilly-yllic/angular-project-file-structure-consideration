import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ProgressSpinnerConfigurableModule } from '~examples/progress-spinner/modules';

import { ProgressSpinnerComponent } from './progress-spinner.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ProgressSpinnerConfigurableModule ],
  declarations: [ ProgressSpinnerComponent ],
  exports: [ ProgressSpinnerComponent ]
})
export class ProgressSpinnerModule { }
