import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  SelectOverviewComponent, SelectValueBindingComponent, SelectFormComponent, SelectHintErrorComponent, SelectDisabledComponent,
  SelectResetComponent, SelectOptionGroupComponent, SelectMultipleComponent, SelectCustomTriggerComponent, SelectNoRippleComponent,
  SelectPanelClassComponent, SelectErrorStateMatcherComponent
} from '~examples/select/components';

@Component({
  selector: 'app-page-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic select', component: SelectOverviewComponent },
      { title: 'Select with 2-way value binding', component: SelectValueBindingComponent },
      { title: 'Select in a form', component: SelectFormComponent },
      { title: 'Select with form field features', component: SelectHintErrorComponent },
      { title: 'Disabled select', component: SelectDisabledComponent },
      { title: 'Select with reset option', component: SelectResetComponent },
      { title: 'Select with option groups', component: SelectOptionGroupComponent },
      { title: 'Select with multiple selection', component: SelectMultipleComponent },
      { title: 'Select with custom trigger text', component: SelectCustomTriggerComponent },
      { title: 'Select with no option ripple', component: SelectNoRippleComponent },
      { title: 'Select with custom panel styling', component: SelectPanelClassComponent },
      { title: 'Select with a custom ErrorStateMatcher', component: SelectErrorStateMatcherComponent },
    ] );
  }

}
