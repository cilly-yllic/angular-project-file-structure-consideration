import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-example-form-field-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss']
})
export class CustomControlComponent {}

export class TelInput {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}


@Component({
  selector: 'app-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.scss'],
  providers: [ { provide: MatFormFieldControl, useExisting: TelInputComponent } ],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class TelInputComponent implements MatFormFieldControl<TelInput>, OnDestroy {
  static nextId = 0;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'example-tel-input';
  id = `example-tel-input-${TelInputComponent.nextId++}`;
  describedBy = '';

  get empty() {
    const {value: {area, exchange, subscriber}} = this.parts;

    return !area && !exchange && !subscriber;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): TelInput | null {
    const {value: {area, exchange, subscriber}} = this.parts;
    if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
      return new TelInput(area, exchange, subscriber);
    }
    return null;
  }
  set value(tel: TelInput | null) {
    const {area, exchange, subscriber} = tel || new TelInput('', '', '');
    this.parts.setValue({area, exchange, subscriber});
    this.stateChanges.next();
  }

  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    this.parts = fb.group({
      area: '',
      exchange: '',
      subscriber: '',
    });

    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      const el = <HTMLInputElement>this.elRef.nativeElement.querySelector('input');
      if ( !!el ) {
        el.focus();
      }
    }
  }
}
