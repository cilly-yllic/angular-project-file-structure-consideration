import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-example-bottom-sheet-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(OverviewSheetComponent);
  }
}

@Component({
  selector: 'app-example-bottom-sheet-overview-sheet',
  templateUrl: './overview-sheet.component.html',
})
export class OverviewSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<OverviewSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
