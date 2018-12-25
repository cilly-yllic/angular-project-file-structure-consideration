import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModule } from '~dynamic';

import { BottomSheetOverviewModule } from '~examples/bottom-sheet/modules';

import { BottomSheetComponent } from './bottom-sheet.component';

@NgModule({
  imports: [ CommonModule, DynamicModule, BottomSheetOverviewModule ],
  declarations: [ BottomSheetComponent ],
  exports: [ BottomSheetComponent ]
})
export class BottomSheetModule { }
