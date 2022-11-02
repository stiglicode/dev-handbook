import { classesToString } from '@helpers/index';
import { ICON_TYPE } from '@enums/icon';
import { useLayoutEffect } from 'react';

interface Props {
    type?: ICON_TYPE,
    name: string,
    size?: number | string,
}

export const Icon: React.FC<Props> = ({
  type = ICON_TYPE.REGULAR, 
  name, 
  size = 16
}) => {
  const DEFAULT_CLASS = 'icon';
  const ICON_CLASS_PREFIX = 'fa-icon';

  const iconSize = typeof size === 'number'
    ? `${size}px`
    : size;

  const iconStyle: React.CSSProperties = {
    fontSize: iconSize 
  };

  const rootClasses = classesToString({
    [`${ICON_CLASS_PREFIX}-${type}-${name}`]: true,
    [DEFAULT_CLASS]: true
  });

  useLayoutEffect(() => {
    import(`@assets/fonts/icons/${type}/style.scss`);
  }, []);

  return (
    <span 
      // eslint-disable-next-line
      // @ts-ignore
      {...props.args}
      style={iconStyle}
      className={rootClasses}
    ></span>
  );
};