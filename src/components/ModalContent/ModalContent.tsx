import * as React from 'react';
import { ModalContentType } from '../../types';
import cnx, { resolveClassName } from '../../utils/cnx';

const VALID_WIDTHS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'];

const ModalContent = ({
  children,
  position,
  scrollable,
  width = 'sm',
  className = '',
  ...rest
}: ModalContentType) => {
  const style = React.useMemo(() => {
    if (
      typeof width !== 'undefined' &&
      !VALID_WIDTHS.includes(width.toString())
    ) {
      return { width: width };
    }
    return {};
  }, [width]);

  return (
    <div
      className={cnx(
        'content',
        className,
        position && `position-${position}`,
        scrollable && resolveClassName('scrollable'),
        VALID_WIDTHS.includes(width?.toString?.() ?? '') &&
          resolveClassName(width as string)
      )}
      style={style}
      {...rest}>
      {children}
    </div>
  );
};

export default ModalContent;
