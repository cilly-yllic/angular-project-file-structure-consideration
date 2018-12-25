import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { BadgeOverviewModule } from '~examples/badge/modules';

import { BadgeComponent } from './badge.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, BadgeOverviewModule ],
  declarations: [ BadgeComponent ],
  exports: [ BadgeComponent ]
})
export class BadgeModule { }
