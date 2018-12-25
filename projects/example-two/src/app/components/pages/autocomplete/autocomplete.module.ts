import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';
import {
  AutocompleteOverviewModule, AutocompleteSimpleModule, AutocompleteDisplayModule, AutocompleteFilterModule,
  AutocompleteOptionGroupModule, AutocompleteHighlightModule
} from '~examples/autocomplete/modules';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicModule,
    //
    AutocompleteOverviewModule, AutocompleteSimpleModule, AutocompleteDisplayModule, AutocompleteFilterModule,
    AutocompleteOptionGroupModule, AutocompleteHighlightModule
  ],
  declarations: [ AutocompleteComponent ],
  exports: [ AutocompleteComponent ],
})
export class AutocompleteModule { }
