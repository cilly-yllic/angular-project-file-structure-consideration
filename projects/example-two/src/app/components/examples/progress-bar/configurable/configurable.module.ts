import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatRadioModule, MatSliderModule, MatProgressBarModule } from '@angular/material';

import { ConfigurableComponent } from './configurable.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatCardModule, MatRadioModule, MatSliderModule, MatProgressBarModule ],
  declarations: [ ConfigurableComponent ],
  entryComponents: [ ConfigurableComponent ]
})
export class ConfigurableModule { }
