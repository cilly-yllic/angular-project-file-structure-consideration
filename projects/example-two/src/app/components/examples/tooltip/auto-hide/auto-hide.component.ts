import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material';

@Component({
  selector: 'app-example-tooltip-auto-hide',
  templateUrl: './auto-hide.component.html',
  styleUrls: ['./auto-hide.component.scss']
})
export class AutoHideComponent {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
