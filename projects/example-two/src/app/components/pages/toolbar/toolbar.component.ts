import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { ToolbarMultirowComponent } from '~examples/toolbar/components';

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Multi-row toolbar', component: ToolbarMultirowComponent },
    ] );
  }

}
