import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ListSectionsModule } from '~examples/list/modules';

import { ListComponent } from './list.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ListSectionsModule ],
  declarations: [ ListComponent ],
  exports: [ ListComponent ]
})
export class ListModule { }
