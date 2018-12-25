import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';

import { PositionComponent } from './position.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatTooltipModule ],
  declarations: [ PositionComponent ],
  entryComponents: [ PositionComponent ]
})
export class PositionModule { }
