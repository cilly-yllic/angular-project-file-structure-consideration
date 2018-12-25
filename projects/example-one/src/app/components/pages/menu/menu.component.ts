import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { MenuOverviewComponent, MenuIconsComponent, MenuNestedComponent } from '~examples/menu';

@Component({
  selector: 'app-page-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic menu', component: MenuOverviewComponent },
      { title: 'Menu with icons', component: MenuIconsComponent },
      { title: 'Nested menu', component: MenuNestedComponent },
    ] );
  }

}
