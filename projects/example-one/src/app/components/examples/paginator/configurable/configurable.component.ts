import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-example-paginator-configurable',
  templateUrl: './configurable.component.html',
  styleUrls: ['./configurable.component.scss']
})
export class ConfigurableComponent {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
