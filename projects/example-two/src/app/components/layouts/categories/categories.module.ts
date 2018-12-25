import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';

import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,

    MatSidenavModule,
  ],
  declarations: [ CategoriesComponent ],
  exports: [ CategoriesComponent ]
})
export class CategoriesModule { }
