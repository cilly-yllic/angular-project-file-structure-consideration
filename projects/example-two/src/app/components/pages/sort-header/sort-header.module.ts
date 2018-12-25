import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { SortOverviewModule } from '~examples/sort/modules';

import { SortHeaderComponent } from './sort-header.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, SortOverviewModule ],
  declarations: [ SortHeaderComponent ],
  exports: [ SortHeaderComponent ]
})
export class SortHeaderModule { }
