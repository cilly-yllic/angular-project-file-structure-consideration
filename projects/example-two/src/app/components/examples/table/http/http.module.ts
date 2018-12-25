import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';

import { HttpComponent } from './http.component';

@NgModule({
  imports: [ CommonModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule ],
  declarations: [ HttpComponent ],
  entryComponents: [ HttpComponent ]
})
export class HttpModule { }
