import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { CustomTriggerComponent } from './custom-trigger.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule ],
  declarations: [ CustomTriggerComponent ],
  entryComponents: [ CustomTriggerComponent ]
})
export class CustomTriggerModule { }
