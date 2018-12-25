import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { SvgComponent } from './svg.component';

@NgModule({
  imports: [ CommonModule, MatIconModule ],
  declarations: [ SvgComponent ],
  entryComponents: [ SvgComponent ]
})
export class SvgModule { }
