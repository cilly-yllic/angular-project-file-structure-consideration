import { Component } from '@angular/core';

@Component({
  selector: 'app-example-slide-toggle-configurable',
  templateUrl: './configurable.component.html',
  styleUrls: ['./configurable.component.scss']
})
export class ConfigurableComponent {
  color = 'accent';
  checked = false;
  disabled = false;
}
