import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { BadgeOverviewComponent } from '~examples/badge';

@Component({
  selector: 'app-page-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Badge overview', component: BadgeOverviewComponent },
    ] );
  }

}
