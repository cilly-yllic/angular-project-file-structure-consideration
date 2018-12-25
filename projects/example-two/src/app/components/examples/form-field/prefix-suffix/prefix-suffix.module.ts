import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatInputModule } from '@angular/material';

import { PrefixSuffixComponent } from './prefix-suffix.component';

@NgModule({
  imports: [ CommonModule, MatIconModule, MatInputModule ],
  declarations: [ PrefixSuffixComponent ],
  entryComponents: [ PrefixSuffixComponent ]
})
export class PrefixSuffixModule { }
