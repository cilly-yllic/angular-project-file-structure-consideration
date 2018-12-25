import { Component, OnInit } from '@angular/core';

import { getComponents, DynamicClass } from '~dynamic';

import {
  DatepickerOverviewComponent, DatepickerStartViewComponent, DatepickerValueComponent, DatepickerMinMaxComponent, DatepickerFilterComponent,
  DatepickerEventsComponent, DatepickerDisabledComponent, DatepickerTouchComponent, DatepickerApiComponent, DatepickerLocaleComponent,
  DatepickerMomentComponent, DatepickerFormatsComponent
} from '~examples/datepicker/components';

@Component({
  selector: 'app-page-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  components: DynamicClass[];

  constructor() { }

  ngOnInit() {
    this.components = getComponents( [
      { title: 'Basic datepicker', component: DatepickerOverviewComponent },
      { title: 'Datepicker start date', component: DatepickerStartViewComponent },
      { title: 'Datepicker selected value', component: DatepickerValueComponent },
      { title: 'Datepicker with min & max validation', component: DatepickerMinMaxComponent },
      { title: 'Datepicker with filter validation', component: DatepickerFilterComponent },
      { title: 'Datepicker input and change events', component: DatepickerEventsComponent },
      { title: 'Disabled datepicker', component: DatepickerDisabledComponent },
      { title: 'Datepicker touch UI', component: DatepickerTouchComponent },
      { title: 'Datepicker open method', component: DatepickerApiComponent },
      { title: 'Datepicker with different locale', component: DatepickerLocaleComponent },
      { title: 'Datepicker that uses Moment.js date', component: DatepickerMomentComponent },
      { title: 'Datepicker with custom formats', component: DatepickerFormatsComponent },
    ] );
  }

}
