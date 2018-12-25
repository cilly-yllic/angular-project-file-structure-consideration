import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  TableBasicComponent, TableBasicFlexComponent, TableDynamicColumnsComponent, TableExpandableRowsComponent, TableFilteringComponent,
  TableFooterRowComponent, TableHttpComponent, TableMultipleHeaderFooterComponent, TableOverviewComponent, TablePaginationComponent,
  TableRowContextComponent, TableSelectionComponent, TableSortingComponent, TableStickyColumnsComponent, TableStickyFooterComponent,
  TableStickyHeaderComponent,
} from '~examples/table';

@Component({
  selector: 'app-page-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic use of `<table mat-table>`', component: TableBasicComponent },
      { title: 'Basic use of `<mat-table>` (uses display flex)', component: TableBasicFlexComponent },
      { title: 'Table dynamically changing the columns displayed', component: TableDynamicColumnsComponent },
      { title: 'Table with expandable rows', component: TableExpandableRowsComponent },
      { title: 'Table with filtering', component: TableFilteringComponent },
      { title: 'Footer row table', component: TableFooterRowComponent },
      { title: 'Table retrieving data through HTTP', component: TableHttpComponent },
      { title: 'Table with multiple header and footer rows', component: TableMultipleHeaderFooterComponent },
      { title: 'Data table with sorting, pagination, and filtering.', component: TableOverviewComponent },
      { title: 'Table with pagination', component: TablePaginationComponent },
      { title: 'Table showing each row context properties.', component: TableRowContextComponent },
      { title: 'Table with selection', component: TableSelectionComponent },
      { title: 'Table with sorting', component: TableSortingComponent },
      { title: 'Table with a sticky columns', component: TableStickyColumnsComponent },
      { title: 'Table with a sticky footer', component: TableStickyFooterComponent },
      { title: 'Table with sticky header', component: TableStickyHeaderComponent },
    ] );
  }

}
