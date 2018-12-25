import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { DialogOverviewComponent } from '~examples/dialog/components';

@Component({
  selector: 'app-page-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Dialog Overview', component: DialogOverviewComponent },
    ] );
  }

}
