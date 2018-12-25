import { Component } from '@angular/core';

@Component({
  selector: 'app-example-progress-spinner-configurable',
  templateUrl: './configurable.component.html',
  styleUrls: ['./configurable.component.scss']
})
export class ConfigurableComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;
}
