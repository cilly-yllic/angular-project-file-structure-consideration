import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';

import { OverviewComponent, OverviewDialogComponent } from './overview.component';

@NgModule({
  imports: [ CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatInputModule ],
  declarations: [ OverviewComponent, OverviewDialogComponent ],
  entryComponents: [ OverviewComponent, OverviewDialogComponent ]
})
export class OverviewModule { }
