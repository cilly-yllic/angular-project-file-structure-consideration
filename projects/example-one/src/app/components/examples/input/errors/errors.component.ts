import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-input-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
