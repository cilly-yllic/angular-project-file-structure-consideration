import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { ChipsOverviewComponent, ChipsAutocompleteComponent, ChipsInputComponent, ChipsStackedComponent } from '~examples/chips/components';

@Component({
  selector: 'app-page-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic chips', component: ChipsOverviewComponent },
      { title: 'Chips Autocomplete', component: ChipsAutocompleteComponent },
      { title: 'Chips with input', component: ChipsInputComponent },
      { title: 'Stacked chips', component: ChipsStackedComponent },
    ] );
  }

}
