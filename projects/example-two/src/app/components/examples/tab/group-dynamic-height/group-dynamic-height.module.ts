import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { GroupDynamicHeightComponent } from './group-dynamic-height.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ GroupDynamicHeightComponent ],
  entryComponents: [ GroupDynamicHeightComponent ]
})
export class GroupDynamicHeightModule { }
