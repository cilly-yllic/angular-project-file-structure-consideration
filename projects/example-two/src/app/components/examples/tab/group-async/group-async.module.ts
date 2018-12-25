import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { GroupAsyncComponent } from './group-async.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ GroupAsyncComponent ],
  entryComponents: [ GroupAsyncComponent ]
})
export class GroupAsyncModule { }
