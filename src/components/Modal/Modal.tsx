import * as React from 'react';
import { useEffect, useState } from 'react';
import { ModalType } from '../../types';
import renderModal from './renderModal';

export const Modal = ({ children, ...props }: ModalType) => {
  const [key] = useState<string>(() => crypto.randomUUID());

  useEffect(() => {
    renderModal(key, <>{children}</>, props);
  }, [key, children, props]);

  return null;
};
