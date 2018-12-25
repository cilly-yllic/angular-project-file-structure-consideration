import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example-datepicker-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

}
