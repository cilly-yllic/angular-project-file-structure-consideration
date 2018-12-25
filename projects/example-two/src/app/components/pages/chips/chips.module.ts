import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { ChipsOverviewModule, ChipsAutocompleteModule, ChipsInputModule, ChipsStackedModule } from '~examples/chips/modules';

import { ChipsComponent } from './chips.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, ChipsOverviewModule, ChipsAutocompleteModule, ChipsInputModule, ChipsStackedModule ],
  declarations: [ ChipsComponent ],
  exports: [ ChipsComponent ]
})
export class ChipsModule { }
