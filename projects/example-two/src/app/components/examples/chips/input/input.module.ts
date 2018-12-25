import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatIconModule, MatInputModule } from '@angular/material';

import { InputComponent } from './input.component';

@NgModule({
  imports: [ CommonModule, MatChipsModule, MatIconModule, MatInputModule ],
  declarations: [ InputComponent ],
  entryComponents: [ InputComponent ]
})
export class InputModule { }
