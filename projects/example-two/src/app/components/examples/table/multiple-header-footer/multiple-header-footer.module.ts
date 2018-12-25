import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { MultipleHeaderFooterComponent } from './multiple-header-footer.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ MultipleHeaderFooterComponent ],
  entryComponents: [ MultipleHeaderFooterComponent ]
})
export class MultipleHeaderFooterModule { }
