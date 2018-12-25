import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';

import { ConfigurableComponent } from './configurable.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule ],
  declarations: [ ConfigurableComponent ],
  entryComponents: [ ConfigurableComponent ]
})
export class ConfigurableModule { }
