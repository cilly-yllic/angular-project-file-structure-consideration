import { Component } from '@angular/core';

@Component({
  selector: 'app-example-checkbox-configurable',
  templateUrl: './configurable.component.html',
  styleUrls: ['./configurable.component.scss']
})
export class ConfigurableComponent {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

}
