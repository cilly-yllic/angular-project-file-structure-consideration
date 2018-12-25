import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule } from '@angular/material';

import { NestedComponent } from './nested.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatMenuModule ],
  declarations: [ NestedComponent ],
  entryComponents: [ NestedComponent ]
})
export class NestedModule { }
