import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-example-chips-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.scss']
})
export class StackedComponent {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
}
