import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { MinMaxComponent } from './min-max.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ MinMaxComponent ],
  entryComponents: [ MinMaxComponent ]
})
export class MinMaxModule { }
