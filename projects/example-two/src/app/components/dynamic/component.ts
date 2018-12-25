import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DynamicDirective } from './directive';
import { DynamicInterface } from './interface';
import { DynamicClass } from './class';

@Component({
  selector: 'app-dynamic-component',
  template: `<app-layout-example [title]="title">
  <ng-container><ng-template appDynamic></ng-template></ng-container>
</app-layout-example>`,
})
export class DynamicComponent implements OnInit {
  @Input() component: DynamicInterface.DynamicComponent;
  @Input() title: string;
  @ViewChild( DynamicDirective ) directive: DynamicDirective;

  constructor( private componentFactoryResolver: ComponentFactoryResolver ) { }

  ngOnInit() {
    const viewContainerRef = this.directive.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent( this.componentFactoryResolver.resolveComponentFactory( this.component ) );
  }

}


@Component({
  selector: 'app-dynamic-component-list',
  template: `<ng-container *ngFor="let component of components">
  <app-dynamic-component [component]="component.component" [title]="component.title"></app-dynamic-component>
</ng-container>`,
})
export class DynamicListComponent {
  @Input() components: DynamicClass[];
}
