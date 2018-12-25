import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  TabGroupBasicComponent, TabGroupCustomLabelComponent, TabGroupDynamicHeightComponent, TabGroupDynamicComponent,
  TabGroupHeaderBelowComponent, TabGroupLazyLoadedComponent, TabGroupStretchedComponent, TabGroupThemeComponent, TabGroupAsyncComponent,
  TabNavBarBasicComponent
} from '~examples/tab';

@Component({
  selector: 'app-page-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic use of the tab group', component: TabGroupBasicComponent },
      { title: 'Using tabs with a custom label template', component: TabGroupCustomLabelComponent },
      { title: 'Tag group with dynamic height based on tab contents', component: TabGroupDynamicHeightComponent },
      { title: 'Tab group with dynamically changing tabs', component: TabGroupDynamicComponent },
      { title: 'Tab group with the headers on the bottom', component: TabGroupHeaderBelowComponent },
      { title: 'Tab group where the tab content is loaded lazily (when activated)', component: TabGroupLazyLoadedComponent },
      { title: 'Tab group with stretched labels', component: TabGroupStretchedComponent },
      { title: 'Customizing the theme options on the tab group', component: TabGroupThemeComponent },
      { title: 'Tab group with asynchronously loading tab contents', component: TabGroupAsyncComponent },
      { title: 'Basic use of the tab nav bar', component: TabNavBarBasicComponent },
    ] );
  }

}
