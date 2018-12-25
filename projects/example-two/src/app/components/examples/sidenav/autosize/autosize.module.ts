import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule } from '@angular/material';

import { AutosizeComponent } from './autosize.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatSidenavModule ],
  declarations: [ AutosizeComponent ],
  entryComponents: [ AutosizeComponent ]
})
export class AutosizeModule { }
