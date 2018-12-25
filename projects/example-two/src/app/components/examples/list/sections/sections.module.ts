import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatIconModule, MatListModule } from '@angular/material';

import { SectionsComponent } from './sections.component';

@NgModule({
  imports: [ CommonModule, MatDividerModule, MatIconModule, MatListModule ],
  declarations: [ SectionsComponent ],
  entryComponents: [ SectionsComponent ]
})
export class SectionsModule { }
