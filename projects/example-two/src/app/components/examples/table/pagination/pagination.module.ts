import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [ CommonModule, MatPaginatorModule, MatTableModule ],
  declarations: [ PaginationComponent ],
  entryComponents: [ PaginationComponent ]
})
export class PaginationModule { }
