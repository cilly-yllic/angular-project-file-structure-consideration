import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { BasicComponent } from './basic.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ BasicComponent ],
  entryComponents: [ BasicComponent ]
})
export class BasicModule { }
