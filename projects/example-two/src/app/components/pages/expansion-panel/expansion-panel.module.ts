import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ExpansionPanelOverviewModule, ExpansionPanelStepsModule } from '~examples/expansion-panel/modules';

import { ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ExpansionPanelOverviewModule, ExpansionPanelStepsModule ],
  declarations: [ ExpansionPanelComponent ],
  exports: [ ExpansionPanelComponent ]
})
export class ExpansionPanelModule { }
