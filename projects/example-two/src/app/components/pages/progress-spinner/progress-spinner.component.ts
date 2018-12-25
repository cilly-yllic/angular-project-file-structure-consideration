import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { ProgressSpinnerConfigurableComponent } from '~examples/progress-spinner/components';

@Component({
  selector: 'app-page-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Configurable progress spinner', component: ProgressSpinnerConfigurableComponent },
    ] );
  }

}
