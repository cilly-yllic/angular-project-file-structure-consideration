import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { GroupLazyLoadedComponent } from './group-lazy-loaded.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule ],
  declarations: [ GroupLazyLoadedComponent ],
  entryComponents: [ GroupLazyLoadedComponent ]
})
export class GroupLazyLoadedModule { }
