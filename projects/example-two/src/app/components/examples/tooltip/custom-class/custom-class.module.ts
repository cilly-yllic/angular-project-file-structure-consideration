import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTooltipModule } from '@angular/material';

import { CustomClassComponent } from './custom-class.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatTooltipModule ],
  declarations: [ CustomClassComponent ],
  entryComponents: [ CustomClassComponent ]
})
export class CustomClassModule { }
