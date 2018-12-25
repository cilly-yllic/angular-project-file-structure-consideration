import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  TableBasicModule, TableBasicFlexModule, TableDynamicColumnsModule, TableExpandableRowsModule, TableFilteringModule,
  TableFooterRowModule, TableHttpModule, TableMultipleHeaderFooterModule, TableOverviewModule, TablePaginationModule,
  TableRowContextModule, TableSelectionModule, TableSortingModule, TableStickyColumnsModule, TableStickyFooterModule,
  TableStickyHeaderModule,
} from '~examples/table/modules';

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    TableBasicModule, TableBasicFlexModule, TableDynamicColumnsModule, TableExpandableRowsModule, TableFilteringModule,
    TableFooterRowModule, TableHttpModule, TableMultipleHeaderFooterModule, TableOverviewModule, TablePaginationModule,
    TableRowContextModule, TableSelectionModule, TableSortingModule, TableStickyColumnsModule, TableStickyFooterModule,
    TableStickyHeaderModule,
  ],
  declarations: [ TableComponent ],
  exports: [ TableComponent ]
})
export class TableModule { }
