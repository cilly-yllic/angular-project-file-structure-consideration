import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { IconSvgModule } from '~examples/icon/modules';

import { IconComponent } from './icon.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, IconSvgModule ],
  declarations: [ IconComponent ],
  exports: [ IconComponent ]
})
export class IconModule { }
