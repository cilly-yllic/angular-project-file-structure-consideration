import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { FooterRowComponent } from './footer-row.component';

@NgModule({
  imports: [ CommonModule, MatTableModule ],
  declarations: [ FooterRowComponent ],
  entryComponents: [ FooterRowComponent ]
})
export class FooterRowModule { }
