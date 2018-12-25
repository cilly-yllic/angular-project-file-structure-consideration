import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ToolbarMultirowModule } from '~examples/toolbar/modules';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ToolbarMultirowModule ],
  declarations: [ ToolbarComponent ],
  exports: [ ToolbarComponent ]
})
export class ToolbarModule { }
