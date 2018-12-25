import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  TreeDynamicModule, TreeFlatOverviewModule, TreeChecklistModule, TreeNestedOverviewModule, TreeLoadmoreModule
} from '~examples/tree/modules';

import { TreeComponent } from './tree.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    TreeDynamicModule, TreeFlatOverviewModule, TreeChecklistModule, TreeNestedOverviewModule, TreeLoadmoreModule
  ],
  declarations: [ TreeComponent ],
  exports: [ TreeComponent ]
})
export class TreeModule { }
