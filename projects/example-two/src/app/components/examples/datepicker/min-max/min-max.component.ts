import { Component } from '@angular/core';

@Component({
  selector: 'app-example-datepicker-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss']
})
export class MinMaxComponent {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

}
