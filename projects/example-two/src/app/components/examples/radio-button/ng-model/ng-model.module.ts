import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';

import { NgModelComponent } from './ng-model.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatRadioModule ],
  declarations: [ NgModelComponent ],
  entryComponents: [ NgModelComponent ]
})
export class NgModelModule { }
