import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { CheckboxConfigurableComponent } from '~examples/checkbox/components';

@Component({
  selector: 'app-page-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [ { title: 'Configurable checkbox', component: CheckboxConfigurableComponent } ] );
  }

}
