import * as React from 'react';
import { ModalHeaderType } from '../../types';
import cnx, { resolveClassName } from '../../utils/cnx';

const ModalHeader: React.FC<ModalHeaderType> = ({
  children,
  className,
  position,
  isFixing
}) => {
  return (
    <div
      className={cnx(
        'header',
        position && `position-${position}`,
        isFixing && resolveClassName('sticky'),
        className
      )}>
      {children}
    </div>
  );
};

export default ModalHeader;
