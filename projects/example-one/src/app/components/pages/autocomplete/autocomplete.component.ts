import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  AutocompleteOverviewComponent, AutocompleteSimpleComponent, AutocompleteDisplayComponent, AutocompleteFilterComponent,
  AutocompleteOptionGroupComponent, AutocompleteHighlightComponent,
} from '~examples/autocomplete';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Autocomplete overview', component: AutocompleteOverviewComponent },
      { title: 'Simple autocomplete', component: AutocompleteSimpleComponent },
      { title: 'Display value autocomplete', component: AutocompleteDisplayComponent },
      { title: 'Filter autocomplete', component: AutocompleteFilterComponent },
      { title: 'Option groups autocomplete', component: AutocompleteOptionGroupComponent },
      { title: 'Highlight the first autocomplete option', component: AutocompleteHighlightComponent },
    ] );
  }

}
