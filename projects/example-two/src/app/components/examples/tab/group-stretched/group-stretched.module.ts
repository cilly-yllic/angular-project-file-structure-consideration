import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { GroupStretchedComponent } from './group-stretched.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ GroupStretchedComponent ],
  entryComponents: [ GroupStretchedComponent ]
})
export class GroupStretchedModule { }
