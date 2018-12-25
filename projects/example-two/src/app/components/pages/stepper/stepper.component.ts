import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { StepperOverviewComponent } from '~examples/stepper/components';

@Component({
  selector: 'app-page-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Stepper overview', component: StepperOverviewComponent },
    ] );
  }

}
