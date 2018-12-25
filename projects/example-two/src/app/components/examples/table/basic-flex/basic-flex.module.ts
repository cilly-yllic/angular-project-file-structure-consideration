import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { BasicFlexComponent } from './basic-flex.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ BasicFlexComponent ],
  entryComponents: [ BasicFlexComponent ]
})
export class BasicFlexModule { }
