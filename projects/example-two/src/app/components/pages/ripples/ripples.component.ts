import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { RippleOverviewComponent } from '~examples/ripple/components';

@Component({
  selector: 'app-page-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'MatRipple basic usage', component: RippleOverviewComponent },
    ] );
  }

}
