import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';
import { BottomSheetOverviewComponent } from '~examples/bottom-sheet/components';

@Component({
  selector: 'app-page-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Bottom Sheet Overview', component: BottomSheetOverviewComponent },
    ] );
  }

}
