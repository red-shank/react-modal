import * as React from 'react';
import { resolvePosition } from '../../utils/resolvePosition';
import { ModalType } from '../../types';
import { wrapperClass } from '../../config/constant';

type WrapperType = Pick<ModalType, 'children' | 'position'> &
  Partial<Pick<ModalType, 'onClose'>>;

export const Wrapper: React.FC<WrapperType> = ({
  onClose,
  children,
  position = 'center'
}) => {
  const positionClass = resolvePosition(position);
  return (
    <div className={`${wrapperClass} ${positionClass}`} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
