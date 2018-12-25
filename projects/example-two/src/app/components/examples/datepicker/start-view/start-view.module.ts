import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { StartViewComponent } from './start-view.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ StartViewComponent ],
  entryComponents: [ StartViewComponent ]
})
export class StartViewModule { }
