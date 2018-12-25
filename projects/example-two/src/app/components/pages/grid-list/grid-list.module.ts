import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { GridListDynamicModule } from '~examples/grid-list/modules';

import { GridListComponent } from './grid-list.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, GridListDynamicModule ],
  declarations: [ GridListComponent ],
  exports: [ GridListComponent ]
})
export class GridListModule { }
