import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { TypesComponent } from './types.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule ],
  declarations: [ TypesComponent ],
  entryComponents: [ TypesComponent ]
})
export class TypesModule { }
