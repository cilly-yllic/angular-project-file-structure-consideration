import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { ApiComponent } from './api.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ ApiComponent ],
  entryComponents: [ ApiComponent ]
})
export class ApiModule { }
