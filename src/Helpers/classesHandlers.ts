import { kebabToCamelCase } from './global';
import type { TClasses } from '@type/global';

export function BEMClass(
  rootClass: string, 
  element: string | null, 
  modifier?: string): string {

  let className = rootClass;

  if (element) {
    className = `${className}__${element}`;
  }

  if (modifier) {
    className = `${className}--${modifier}`;
  }

  return className;
}

export function classesToString(classesObj: TClasses): string {
  const result: Array<string> = [];

  Object.entries(classesObj).forEach(([className, condition]) => {
    if (condition) {
      result.push(className);
    }
  });

  return result.join(' '); 
}

export function BEMClassElement(
  rootClass: string, 
  elementsArray: Array<string>
): Record<string, string> {
  const result: Record<string, string> = {};

  elementsArray.forEach((element) => {
    result[kebabToCamelCase(element)] = BEMClass(rootClass, element);
  });

  return result;
}