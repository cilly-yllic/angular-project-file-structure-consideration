import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatStepperModule } from '@angular/material';

import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatStepperModule ],
  declarations: [ OverviewComponent ],
  entryComponents: [ OverviewComponent ]
})
export class OverviewModule { }
