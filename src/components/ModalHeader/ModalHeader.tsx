import React from 'react';
import { ModalHeaderType } from '../../types';

const ModalHeader = ({ children }: ModalHeaderType) => {
  return <div className="modal-header">{children}</div>;
};

export default ModalHeader;
