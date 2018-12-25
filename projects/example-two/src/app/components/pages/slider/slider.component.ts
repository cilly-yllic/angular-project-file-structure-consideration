import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { SliderConfigurableComponent } from '~examples/slider/components';

@Component({
  selector: 'app-page-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Configurable slider', component: SliderConfigurableComponent },
    ] );
  }

}
