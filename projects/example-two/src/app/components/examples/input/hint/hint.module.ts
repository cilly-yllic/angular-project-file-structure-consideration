import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { HintComponent } from './hint.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatInputModule ],
  declarations: [ HintComponent ],
  entryComponents: [ HintComponent ]
})
export class HintModule { }
