import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { RippleOverviewModule } from '~examples/ripple/modules';

import { RipplesComponent } from './ripples.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, RippleOverviewModule ],
  declarations: [ RipplesComponent ],
  exports: [ RipplesComponent ]
})
export class RipplesModule { }
