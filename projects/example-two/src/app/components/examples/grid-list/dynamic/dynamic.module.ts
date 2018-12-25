import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';

import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [ CommonModule, MatGridListModule ],
  declarations: [ DynamicComponent ],
  entryComponents: [ DynamicComponent ]
})
export class DynamicModule { }
