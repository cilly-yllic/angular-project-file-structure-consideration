import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTooltipModule } from '@angular/material';

import { ManualComponent } from './manual.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatTooltipModule ],
  declarations: [ ManualComponent ],
  entryComponents: [ ManualComponent ]
})
export class ManualModule { }
