import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  TreeDynamicComponent, TreeFlatOverviewComponent, TreeChecklistComponent, TreeNestedOverviewComponent, TreeLoadmoreComponent
} from '~examples/tree';

@Component({
  selector: 'app-page-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Tree with dynamic data', component: TreeDynamicComponent },
      { title: 'Tree with flat nodes', component: TreeFlatOverviewComponent },
      { title: 'Tree with checkboxes', component: TreeChecklistComponent },
      { title: 'Tree with nested nodes', component: TreeNestedOverviewComponent },
      { title: 'Tree with partially loaded data', component: TreeLoadmoreComponent },
    ] );
  }

}
