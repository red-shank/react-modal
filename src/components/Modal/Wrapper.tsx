import * as React from 'react';
import { resolvePosition } from '../../utils/resolvePosition';
import { ModalType } from '../../types';
import { wrapperClass } from '../../config/constant';
import { CSSProperties } from 'react';
import { CloseOutline } from '../Icons/icon';

type WrapperType = Pick<
  ModalType,
  'children' | 'position' | 'maskClosable' | 'isOpen' | 'closable'
> &
  Partial<Pick<ModalType, 'onClose'>> & {
    style?: CSSProperties;
    className?: string;
    id?: string;
  };

export const Wrapper: React.FC<WrapperType> = ({
  onClose,
  children,
  isOpen,
  style,
  id,
  className = '',
  closable = true,
  maskClosable = true,
  position = 'center'
}) => {
  if (!isOpen) return null;
  const positionClass = resolvePosition(position);
  return (
    <div
      id={id}
      style={style}
      className={`${wrapperClass} ${className}`}
      onClick={() => {
        if (maskClosable) onClose?.();
      }}
    >
      <div className={`container ${positionClass}`}>
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          {closable && (
            <button onClick={onClose} className="btn-closable">
              <CloseOutline />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
