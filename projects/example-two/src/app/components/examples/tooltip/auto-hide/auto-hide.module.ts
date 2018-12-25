import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';

import { AutoHideComponent } from './auto-hide.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatTooltipModule ],
  declarations: [ AutoHideComponent ],
  entryComponents: [ AutoHideComponent ]
})
export class AutoHideModule { }
