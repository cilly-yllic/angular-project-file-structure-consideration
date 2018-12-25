import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { ExpansionPanelOverviewComponent, ExpansionPanelStepsComponent } from '~examples/expansion-panel';

@Component({
  selector: 'app-page-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic expansion panel', component: ExpansionPanelOverviewComponent },
      { title: 'Expansion panel as accordion', component: ExpansionPanelStepsComponent },
    ] );
  }

}
