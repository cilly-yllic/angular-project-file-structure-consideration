import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { SnackBarComponentModule } from '~examples/snack-bar/modules';

import { SnackBarComponent } from './snack-bar.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, SnackBarComponentModule ],
  declarations: [ SnackBarComponent ],
  exports: [ SnackBarComponent ]
})
export class SnackBarModule { }
