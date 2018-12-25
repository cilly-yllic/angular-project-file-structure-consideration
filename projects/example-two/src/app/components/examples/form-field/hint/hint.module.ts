import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { HintComponent } from './hint.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatSelectModule ],
  declarations: [ HintComponent ],
  entryComponents: [ HintComponent ]
})
export class HintModule { }
