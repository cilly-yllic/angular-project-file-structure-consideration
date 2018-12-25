import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatTooltipModule } from '@angular/material';

import { DelayComponent } from './delay.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatTooltipModule ],
  declarations: [ DelayComponent ],
  entryComponents: [ DelayComponent ]
})
export class DelayModule { }
