import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { SlideToggleConfigurableComponent } from '~examples/slide-toggle';

@Component({
  selector: 'app-page-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Configurable slide-toggle', component: SlideToggleConfigurableComponent },
    ] );
  }

}
