import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponent, DynamicListComponent } from './component';
import { DynamicDirective } from './directive';

import { ExampleModule as LayoutExampleModule } from '~layouts/example/example.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutExampleModule,
  ],
  declarations: [
    DynamicComponent, DynamicListComponent, DynamicDirective
  ],
  exports: [ DynamicComponent, DynamicListComponent ]
})
export class DynamicModule { }
