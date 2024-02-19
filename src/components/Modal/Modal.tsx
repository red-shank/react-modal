import * as React from 'react';
import { ModalType } from '../../global';
import { Wrapper } from './Wrapper';

export const Modal: React.FC<ModalType> = ({
  isOpen,
  onClose,
  children,
  maskClosable,
  position = 'center'
  // animation
}) => {
  if (!isOpen) return null;
  return (
    <Wrapper
      isOpen={isOpen}
      position={position}
      onClose={maskClosable ? onClose : undefined}
    >
      {children}
    </Wrapper>
  );
};
