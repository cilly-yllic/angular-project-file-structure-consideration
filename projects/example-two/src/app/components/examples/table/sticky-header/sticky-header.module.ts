import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { StickyHeaderComponent } from './sticky-header.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ StickyHeaderComponent ],
  entryComponents: [ StickyHeaderComponent ]
})
export class StickyHeaderModule { }
