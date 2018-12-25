import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { SnackBarComponentComponent } from '~examples/snack-bar';

@Component({
  selector: 'app-page-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Snack-bar with a custom component', component: SnackBarComponentComponent },
    ] );
  }

}
