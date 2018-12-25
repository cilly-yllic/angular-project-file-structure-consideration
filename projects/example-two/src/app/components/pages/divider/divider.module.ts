import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { DividerOverviewModule } from '~examples/divider/modules';

import { DividerComponent } from './divider.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, DividerOverviewModule ],
  declarations: [ DividerComponent ],
  exports: [ DividerComponent ]
})
export class DividerModule { }
