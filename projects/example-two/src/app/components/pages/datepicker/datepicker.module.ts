import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import {
  DatepickerOverviewModule, DatepickerStartViewModule, DatepickerValueModule, DatepickerMinMaxModule, DatepickerFilterModule,
  DatepickerEventsModule, DatepickerDisabledModule, DatepickerTouchModule, DatepickerApiModule, DatepickerLocaleModule,
  DatepickerMomentModule, DatepickerFormatsModule
} from '~examples/datepicker/modules';

import { DatepickerComponent } from './datepicker.component';

@NgModule({
  imports: [
    CommonModule, DynamicModule,
    DatepickerOverviewModule, DatepickerStartViewModule, DatepickerValueModule, DatepickerMinMaxModule, DatepickerFilterModule,
    DatepickerEventsModule, DatepickerDisabledModule, DatepickerTouchModule, DatepickerApiModule, DatepickerLocaleModule,
    DatepickerMomentModule, DatepickerFormatsModule
  ],
  declarations: [ DatepickerComponent ],
  exports: [ DatepickerComponent ]
})
export class DatepickerModule { }
