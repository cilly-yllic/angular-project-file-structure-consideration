import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule } from '@angular/material';

import { GroupDynamicComponent } from './group-dynamic.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule ],
  declarations: [ GroupDynamicComponent ],
  entryComponents: [ GroupDynamicComponent ]
})
export class GroupDynamicModule { }
