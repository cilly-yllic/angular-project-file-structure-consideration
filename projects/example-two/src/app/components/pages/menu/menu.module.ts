import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { MenuOverviewModule, MenuIconsModule, MenuNestedModule } from '~examples/menu/modules';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, MenuOverviewModule, MenuIconsModule, MenuNestedModule ],
  declarations: [ MenuComponent ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
