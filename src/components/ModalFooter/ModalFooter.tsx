import * as React from 'react';
import { ModalFooterType } from '../../types';
import cnx, { resolveClassName } from '../../utils/cnx';

const ModalFooter: React.FC<ModalFooterType> = ({
  children,
  isFixing,
  position = 'end',
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cnx(
        'footer',
        position && `position-${position}`,
        isFixing && resolveClassName('sticky'),
        className
      )}
      {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
