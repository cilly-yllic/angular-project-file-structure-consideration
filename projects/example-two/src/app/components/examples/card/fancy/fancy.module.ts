import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { FancyComponent } from './fancy.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatCardModule ],
  declarations: [ FancyComponent ],
  entryComponents: [ FancyComponent ]
})
export class FancyModule { }
