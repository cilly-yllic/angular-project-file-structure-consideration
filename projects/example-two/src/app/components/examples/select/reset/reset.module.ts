import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { ResetComponent } from './reset.component';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatSelectModule ],
  declarations: [ ResetComponent ],
  entryComponents: [ ResetComponent ]
})
export class ResetModule { }
