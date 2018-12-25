import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { CardFancyModule } from '~examples/card/modules';

import { CardComponent } from './card.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, CardFancyModule ],
  declarations: [ CardComponent ],
  exports: [ CardComponent ]
})
export class CardModule { }
