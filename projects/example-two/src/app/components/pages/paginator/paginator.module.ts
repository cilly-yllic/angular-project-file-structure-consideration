import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { PaginatorConfigurableModule } from '~examples/paginator/modules';

import { PaginatorComponent } from './paginator.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, PaginatorConfigurableModule ],
  declarations: [ PaginatorComponent ],
  exports: [ PaginatorComponent ]
})
export class PaginatorModule { }
