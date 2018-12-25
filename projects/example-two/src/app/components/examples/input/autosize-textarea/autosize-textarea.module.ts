import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { AutosizeTextareaComponent } from './autosize-textarea.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatSelectModule ],
  declarations: [ AutosizeTextareaComponent ],
  entryComponents: [ AutosizeTextareaComponent ]
})
export class AutosizeTextareaModule { }
