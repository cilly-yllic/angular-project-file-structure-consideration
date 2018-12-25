import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatTreeModule } from '@angular/material';

import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTreeModule ],
  declarations: [ DynamicComponent ],
  entryComponents: [ DynamicComponent ]
})
export class DynamicModule { }
