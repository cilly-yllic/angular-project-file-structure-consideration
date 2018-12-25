import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTableModule } from '@angular/material';

import { StickyColumnsComponent } from './sticky-columns.component';

@NgModule({
  imports: [ CommonModule, MatIconModule, MatTableModule ],
  declarations: [ StickyColumnsComponent ],
  entryComponents: [ StickyColumnsComponent ]
})
export class StickyColumnsModule { }
