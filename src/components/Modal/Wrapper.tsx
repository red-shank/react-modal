import * as React from 'react';
import { resolvePosition } from '../../utils/resolvePosition';
import { ModalType } from '../../global';

type WrapperType = Pick<ModalType, 'children' | 'position' | 'isOpen'> &
  Partial<Pick<ModalType, 'onClose'>>;

export const Wrapper: React.FC<WrapperType> = ({
  isOpen,
  onClose,
  children,
  position = 'center'
}) => {
  const positionClass = resolvePosition(position);
  const prefix = 'redshank-modal';
  const _class = `${prefix}-wrapper `;

  if (!isOpen) return null;
  return (
    <div className={_class + positionClass} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
