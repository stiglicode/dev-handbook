import { BEMClass, BEMClassElement, classesToString } from '@helpers/index';

export function componentClasses(
  rootClass: string,
  element?: Array<string> | null,
  root?: Record<string, boolean>
) {
  let rootClasses = classesToString({
    [rootClass]: true 
  });
  let elementClasses: Record<string, string> = {};

  if (root) {
    rootClasses = classesToString({
      ...Object.assign({}, ...Object
        .entries(root)
        .map(
          ([key, value]) => (
            {
              [BEMClass(rootClass, null, key)]: value 
            }
          )
        )
      ),
      [rootClass]: true
    });
  }

  if (element && element?.length) {
    elementClasses = BEMClassElement(
      rootClass,
      element
    );
  }

  return {
    rootClasses,
    elementClasses: elementClasses
  };
}