import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  FormFieldOverviewComponent, FormFieldLabelComponent, FormFieldHintComponent, FormFieldErrorComponent, FormFieldPrefixSuffixComponent,
  FormFieldThemingComponent, FormFieldCustomControlComponent
} from '~examples/form-field';

@Component({
  selector: 'app-page-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Simple form field', component: FormFieldOverviewComponent },
      { title: 'Form field with label', component: FormFieldLabelComponent },
      { title: 'Form field with hints', component: FormFieldHintComponent },
      { title: 'Form field with error messages', component: FormFieldErrorComponent },
      { title: 'Form field with prefix & suffix', component: FormFieldPrefixSuffixComponent },
      { title: 'Form field theming', component: FormFieldThemingComponent },
      { title: 'Form field with custom telephone number input control.', component: FormFieldCustomControlComponent },
    ] );
  }

}
