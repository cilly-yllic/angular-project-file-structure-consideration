import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule, MatIconModule } from '@angular/material';

import { ExclusiveComponent } from './exclusive.component';

@NgModule({
  imports: [ CommonModule, MatButtonToggleModule, MatIconModule ],
  declarations: [ ExclusiveComponent ],
  entryComponents: [ ExclusiveComponent ]
})
export class ExclusiveModule { }
