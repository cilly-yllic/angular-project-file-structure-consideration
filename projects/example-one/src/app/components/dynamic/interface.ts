import { Type } from '@angular/core';

export declare namespace DynamicInterface {
  interface Component {
    title: string;
  }
  type DynamicComponent = Type<any>;
  type DynamicComponents = Array<{ title: string, component: DynamicInterface.DynamicComponent }>;
}

