import React, { useMemo } from 'react';
import { ModalContentType } from '../../types';

const ModalContent = ({
  children,
  position,
  width,
  className = '',
  ...rest
}: ModalContentType) => {
  const style = useMemo(() => {
    if (typeof width === 'undefined') return {};
    if (width === 'full')
      return {
        width: `var(--redshank-width-full)`,
        height: `var(--redshank-height-full)`
      };
    if (['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(width.toString())) {
      return { width: `var(--redshank-width-${width})` };
    }
    return { width };
  }, [width]);

  return (
    <div
      className={`modal-content position-${position || ''}`}
      style={style}
      {...rest}>
      {children}
    </div>
  );
};

export default ModalContent;
