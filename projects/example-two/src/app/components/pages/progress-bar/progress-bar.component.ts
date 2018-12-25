import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { ProgressBarConfigurableComponent } from '~examples/progress-bar/components';

@Component({
  selector: 'app-page-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Configurable progress-bar', component: ProgressBarConfigurableComponent },
    ] );
  }

}
