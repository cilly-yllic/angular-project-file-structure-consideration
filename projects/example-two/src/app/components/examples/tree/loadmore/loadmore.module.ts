import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { LoadmoreComponent } from './loadmore.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatTreeModule ],
  declarations: [ LoadmoreComponent ],
  entryComponents: [ LoadmoreComponent ]
})
export class LoadmoreModule { }
