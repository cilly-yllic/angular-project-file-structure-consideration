import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  TabGroupBasicModule, TabGroupCustomLabelModule, TabGroupDynamicHeightModule, TabGroupDynamicModule,
  TabGroupHeaderBelowModule, TabGroupLazyLoadedModule, TabGroupStretchedModule, TabGroupThemeModule, TabGroupAsyncModule,
  TabNavBarBasicModule,
} from '~examples/tab/modules';

import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    TabGroupBasicModule, TabGroupCustomLabelModule, TabGroupDynamicHeightModule, TabGroupDynamicModule,
    TabGroupHeaderBelowModule, TabGroupLazyLoadedModule, TabGroupStretchedModule, TabGroupThemeModule, TabGroupAsyncModule,
    TabNavBarBasicModule,
  ],
  declarations: [ TabsComponent ],
  exports: [ TabsComponent ]
})
export class TabsModule { }
