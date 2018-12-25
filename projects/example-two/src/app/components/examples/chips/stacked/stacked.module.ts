import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material';

import { StackedComponent } from './stacked.component';

@NgModule({
  imports: [ CommonModule, MatChipsModule ],
  declarations: [ StackedComponent ],
  entryComponents: [ StackedComponent ]
})
export class StackedModule { }
