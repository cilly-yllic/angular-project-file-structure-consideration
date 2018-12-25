import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule } from '@angular/material';

import { MultirowComponent } from './multirow.component';

@NgModule({
  imports: [ CommonModule, MatIconModule, MatToolbarModule ],
  declarations: [ MultirowComponent ],
  entryComponents: [ MultirowComponent ]
})
export class MultirowModule { }
