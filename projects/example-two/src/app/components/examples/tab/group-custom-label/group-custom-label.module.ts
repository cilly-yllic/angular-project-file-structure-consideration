import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTabsModule } from '@angular/material';

import { GroupCustomLabelComponent } from './group-custom-label.component';

@NgModule({
  imports: [ CommonModule, MatIconModule, MatTabsModule ],
  declarations: [ GroupCustomLabelComponent ],
  entryComponents: [ GroupCustomLabelComponent ]
})
export class GroupCustomLabelModule { }
