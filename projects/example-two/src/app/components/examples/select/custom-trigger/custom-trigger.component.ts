import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example-select-custom-trigger',
  templateUrl: './custom-trigger.component.html',
  styleUrls: ['./custom-trigger.component.scss']
})
export class CustomTriggerComponent {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
