import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { TouchComponent } from './touch.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ TouchComponent ],
  entryComponents: [ TouchComponent ]
})
export class TouchModule { }
