import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { GroupBasicComponent } from './group-basic.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ GroupBasicComponent ],
  entryComponents: [ GroupBasicComponent ]
})
export class GroupBasicModule { }
