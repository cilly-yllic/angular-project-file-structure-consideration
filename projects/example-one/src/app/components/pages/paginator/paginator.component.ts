import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { PaginatorConfigurableComponent } from '~examples/paginator';

@Component({
  selector: 'app-page-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Configurable paginator', component: PaginatorConfigurableComponent },
    ] );
  }

}
