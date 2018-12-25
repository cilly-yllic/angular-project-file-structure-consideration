import { Component } from '@angular/core';

@Component({
  selector: 'app-example-table-row-context',
  templateUrl: './row-context.component.html',
  styleUrls: ['./row-context.component.scss']
})
export class RowContextComponent {
  displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];
}
