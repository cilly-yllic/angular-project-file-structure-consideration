import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { ButtonToggleExclusiveComponent } from '~examples/button-toggle';

@Component({
  selector: 'app-page-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Exclusive selection', component: ButtonToggleExclusiveComponent },
    ] );
  }

}
