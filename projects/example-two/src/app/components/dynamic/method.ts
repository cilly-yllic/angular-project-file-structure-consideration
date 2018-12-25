import { DynamicInterface } from './interface';
import { DynamicClass } from './class';

export const getComponents = ( components: DynamicInterface.DynamicComponents ) => !!components.length
  ? components.map( component => new DynamicClass( component.component, component.title ) )
  : [];
