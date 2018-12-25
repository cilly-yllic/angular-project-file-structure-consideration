import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { RadioButtonNgModelComponent } from '~examples/radio-button/components';

@Component({
  selector: 'app-page-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Radios with ngModel', component: RadioButtonNgModelComponent },
    ] );
  }

}
