import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatTooltipModule } from '@angular/material';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatTooltipModule ],
  declarations: [ MessageComponent ],
  entryComponents: [ MessageComponent ]
})
export class MessageModule { }
