import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  TooltipOverviewComponent, TooltipPositionComponent, TooltipCustomClassComponent, TooltipDelayComponent, TooltipDisabledComponent,
  TooltipManualComponent, TooltipMessageComponent, TooltipModifiedDefaultsComponent, TooltipAutoHideComponent
} from '~examples/tooltip/components';

@Component({
  selector: 'app-page-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic tooltip', component: TooltipOverviewComponent },
      { title: 'Tooltip with a custom position', component: TooltipPositionComponent },
      { title: 'Tooltip that can have a custom class applied.', component: TooltipCustomClassComponent },
      { title: 'Tooltip with a show and hide delay', component: TooltipDelayComponent },
      { title: 'Tooltip that can be disabled', component: TooltipDisabledComponent },
      { title: 'Tooltip that can be manually shown/hidden.', component: TooltipManualComponent },
      { title: 'Tooltip with a changing message', component: TooltipMessageComponent },
      { title: 'Tooltip with a show and hide delay', component: TooltipModifiedDefaultsComponent },
      { title: 'Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.', component: TooltipAutoHideComponent },
    ] );
  }

}
