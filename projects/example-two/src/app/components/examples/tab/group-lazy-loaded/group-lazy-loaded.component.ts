import { Component } from '@angular/core';

@Component({
  selector: 'app-example-tab-group-lazy-loaded',
  templateUrl: './group-lazy-loaded.component.html',
  styleUrls: ['./group-lazy-loaded.component.scss']
})
export class GroupLazyLoadedComponent {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
