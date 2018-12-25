import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule } from '@angular/material';

import { CustomControlComponent, TelInputComponent } from './custom-control.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatIconModule, MatInputModule ],
  declarations: [ CustomControlComponent, TelInputComponent ],
  entryComponents: [ CustomControlComponent, TelInputComponent ]
})
export class CustomControlModule { }
