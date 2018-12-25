import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { DialogOverviewModule } from '~examples/dialog/modules';

import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, DialogOverviewModule ],
  declarations: [ DialogComponent ],
  exports: [ DialogComponent ]
})
export class DialogModule { }
