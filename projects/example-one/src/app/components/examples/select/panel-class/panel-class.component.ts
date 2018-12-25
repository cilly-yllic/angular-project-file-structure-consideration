import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example-select-panel-class',
  templateUrl: './panel-class.component.html',
  styleUrls: ['./panel-class.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PanelClassComponent {
  panelColor = new FormControl('red');
}
