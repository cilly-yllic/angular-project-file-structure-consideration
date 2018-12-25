import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { CardFancyComponent } from '~examples/card';

@Component({
  selector: 'app-page-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Card with multiple sections', component: CardFancyComponent },
    ] );
  }

}
