import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';

import { ClearableComponent } from './clearable.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule ],
  declarations: [ ClearableComponent ],
  entryComponents: [ ClearableComponent ]
})
export class ClearableModule { }
