import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import { SidenavDrawerOverviewComponent, SidenavAutosizeComponent } from '~examples/sidenav/components';

@Component({
  selector: 'app-page-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic drawer', component: SidenavDrawerOverviewComponent },
      { title: 'Autosize sidenav', component: SidenavAutosizeComponent },
    ] );
  }

}
