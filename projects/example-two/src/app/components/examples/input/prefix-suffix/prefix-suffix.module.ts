import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule } from '@angular/material';

import { PrefixSuffixComponent } from './prefix-suffix.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatIconModule, MatInputModule ],
  declarations: [ PrefixSuffixComponent ],
  entryComponents: [ PrefixSuffixComponent ]
})
export class PrefixSuffixModule { }
