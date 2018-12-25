import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { LocaleComponent } from './locale.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ LocaleComponent ],
  entryComponents: [ LocaleComponent ]
})
export class LocaleModule { }
