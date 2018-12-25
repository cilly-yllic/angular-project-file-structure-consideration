import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { FlatOverviewComponent } from './flat-overview.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatTreeModule ],
  declarations: [ FlatOverviewComponent ],
  entryComponents: [ FlatOverviewComponent ]
})
export class FlatOverviewModule { }
