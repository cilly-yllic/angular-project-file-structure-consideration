import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

import { IconsComponent } from './icons.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatMenuModule ],
  declarations: [ IconsComponent ],
  entryComponents: [ IconsComponent ]
})
export class IconsModule { }
