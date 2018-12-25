import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatListModule } from '@angular/material';

import { CategoriesRoutingModule } from '../../roots/categories/categories.routing.module';
import { SideNaviComponent } from './side-navi.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,

    MatExpansionModule,
    MatListModule,
  ],
  declarations: [ SideNaviComponent ],
  exports: [ SideNaviComponent ]
})
export class SideNaviModule { }
