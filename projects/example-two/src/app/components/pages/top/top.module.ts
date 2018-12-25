import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatGridListModule } from '@angular/material';

import { TopGuard } from './top.guard';
import { TopComponent } from './top.component';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule, MatGridListModule
  ],
  exports: [TopComponent],
  providers: [ TopGuard ],
})
export class TopModule { }
