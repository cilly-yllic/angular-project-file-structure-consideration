import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  TooltipOverviewModule, TooltipPositionModule, TooltipCustomClassModule, TooltipDelayModule, TooltipDisabledModule,
  TooltipManualModule, TooltipMessageModule, TooltipModifiedDefaultsModule, TooltipAutoHideModule,
} from '~examples/tooltip/modules';

import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    TooltipOverviewModule, TooltipPositionModule, TooltipCustomClassModule, TooltipDelayModule, TooltipDisabledModule,
    TooltipManualModule, TooltipMessageModule, TooltipModifiedDefaultsModule, TooltipAutoHideModule,
  ],
  declarations: [ TooltipComponent ],
  exports: [ TooltipComponent ]
})
export class TooltipModule { }
