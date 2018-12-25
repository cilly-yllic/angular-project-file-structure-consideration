import { Component } from '@angular/core';

@Component({
  selector: 'app-example-ripple-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}
