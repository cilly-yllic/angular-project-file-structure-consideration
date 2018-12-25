import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { PanelClassComponent } from './panel-class.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatSelectModule ],
  declarations: [ PanelClassComponent ],
  entryComponents: [ PanelClassComponent ]
})
export class PanelClassModule { }
