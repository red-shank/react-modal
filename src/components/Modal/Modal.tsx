import * as React from 'react';
import { useEffect } from 'react';
import { ModalType } from '../../types';
import { Wrapper } from './Wrapper';
import renderModal from '../../utils/renderModal';

export const Modal = ({
  isOpen,
  onClose,
  children,
  maskClosable = true,
  position = 'center'
}: ModalType) => {
  useEffect(() => {
    renderModal(
      <Wrapper position={position} onClose={maskClosable ? onClose : undefined}>
        {children}
      </Wrapper>,
      isOpen
    );
  }, [isOpen]);

  return null;
};
