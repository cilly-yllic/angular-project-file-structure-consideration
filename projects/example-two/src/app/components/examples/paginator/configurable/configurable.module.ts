import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule } from '@angular/material';

import { ConfigurableComponent } from './configurable.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatInputModule, MatPaginatorModule ],
  declarations: [ ConfigurableComponent ],
  entryComponents: [ ConfigurableComponent ]
})
export class ConfigurableModule { }
