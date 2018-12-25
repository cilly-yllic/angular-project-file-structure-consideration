import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { NoRippleComponent } from './no-ripple.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatSelectModule ],
  declarations: [ NoRippleComponent ],
  entryComponents: [ NoRippleComponent ]
})
export class NoRippleModule { }
