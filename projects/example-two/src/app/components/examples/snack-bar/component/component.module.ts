import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';

import { ComponentComponent, ComponentSnackComponent } from './component.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatSnackBarModule ],
  declarations: [ ComponentComponent, ComponentSnackComponent ],
  entryComponents: [ ComponentComponent, ComponentSnackComponent ]
})
export class ComponentModule { }
