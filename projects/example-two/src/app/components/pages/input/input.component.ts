import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  InputOverviewComponent, InputErrorStateMatcherComponent, InputAutosizeTextareaComponent, InputClearableComponent, InputErrorsComponent,
  InputFormComponent, InputHintComponent, InputPrefixSuffixComponent
} from '~examples/input/components';

@Component({
  selector: 'app-page-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic Inputs', component: InputOverviewComponent },
      { title: 'Input with a custom ErrorStateMatcher', component: InputErrorStateMatcherComponent },
      { title: 'Auto-resizing textarea', component: InputAutosizeTextareaComponent },
      { title: 'Input with a clear button', component: InputClearableComponent },
      { title: 'Input with error messages', component: InputErrorsComponent },
      { title: 'Inputs in a form', component: InputFormComponent },
      { title: 'Input with hints', component: InputHintComponent },
      { title: 'Inputs with prefixes and suffixes', component: InputPrefixSuffixComponent },
    ] );
  }

}
