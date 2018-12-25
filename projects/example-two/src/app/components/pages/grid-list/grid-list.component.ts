import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { GridListDynamicComponent } from '~examples/grid-list/components';

@Component({
  selector: 'app-page-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Dynamic grid-list', component: GridListDynamicComponent },
    ] );
  }

}
