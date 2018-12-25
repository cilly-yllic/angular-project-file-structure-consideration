import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatTreeModule } from '@angular/material';

import { ChecklistComponent } from './checklist.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatTreeModule ],
  declarations: [ ChecklistComponent ],
  entryComponents: [ ChecklistComponent ]
})
export class ChecklistModule { }
