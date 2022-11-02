import type React from 'react';

export function kebabToCamelCase(string: string): string {
  return string.replace(/-./g, x => x[1].toUpperCase());
}

export function countFromOne(index: number): number {
  return index + 1;
}

export function getClassName(...rest: Array<string>): string {
  return rest.join(' ');
}

export function ifRender(
  condition: boolean, 
  ifResult: React.ReactNode,
  elseResult?: React.ReactNode): React.ReactNode {
  if (condition) {
    return ifResult;
  }

  if (elseResult) {
    return elseResult;
  }
}
