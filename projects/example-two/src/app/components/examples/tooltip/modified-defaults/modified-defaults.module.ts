import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTooltipModule } from '@angular/material';

import { ModifiedDefaultsComponent } from './modified-defaults.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatTooltipModule ],
  declarations: [ ModifiedDefaultsComponent ],
  entryComponents: [ ModifiedDefaultsComponent ]
})
export class ModifiedDefaultsModule { }
