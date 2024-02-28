import React from 'react';
import { ModalFooterType } from '../../types';

const ModalFooter = ({
  children,
  position,
  className = '',
  ...rest
}: ModalFooterType) => {
  return (
    <div
      className={`modal-footer position-${position || ''} ${className}`}
      {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
