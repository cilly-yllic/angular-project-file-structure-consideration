import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example-autocomplete-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

}
