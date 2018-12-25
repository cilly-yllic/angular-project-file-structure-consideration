import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { StickyFooterComponent } from './sticky-footer.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ StickyFooterComponent ],
  entryComponents: [ StickyFooterComponent ]
})
export class StickyFooterModule { }
