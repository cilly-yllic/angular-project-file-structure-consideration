import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { DisabledComponent } from './disabled.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ DisabledComponent ],
  entryComponents: [ DisabledComponent ]
})
export class DisabledModule { }
