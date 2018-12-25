import { Component, Input } from '@angular/core';

import { DynamicInterface } from '~dynamic';

@Component({
  selector: 'app-layout-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements DynamicInterface.Component {
  @Input() title: string;
}
