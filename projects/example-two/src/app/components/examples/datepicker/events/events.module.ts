import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatInputModule } from '@angular/material';

import { EventsComponent } from './events.component';

@NgModule({
  imports: [ CommonModule, MatDatepickerModule, MatInputModule ],
  declarations: [ EventsComponent ],
  entryComponents: [ EventsComponent ]
})
export class EventsModule { }
