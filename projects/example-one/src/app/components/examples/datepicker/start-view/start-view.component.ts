import { Component } from '@angular/core';

@Component({
  selector: 'app-example-datepicker-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss']
})
export class StartViewComponent {

  startDate = new Date(1990, 0, 1);

}
