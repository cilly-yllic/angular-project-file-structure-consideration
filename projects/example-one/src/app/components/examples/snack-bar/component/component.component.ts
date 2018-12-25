import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-example-snack-bar-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(ComponentSnackComponent, {
      duration: 500,
    });
  }
}


@Component({
  selector: 'app-example-snack-bar-component-snack',
  templateUrl: './component-snack.component.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class ComponentSnackComponent {}
