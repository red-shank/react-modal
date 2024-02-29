import * as React from 'react';
import { resolvePosition } from '../../utils/resolvePosition';
import { ModalType } from '../../types';
import { CSSProperties } from 'react';
import { CloseOutline } from '../Icons/icon';
import cnx from '../../utils/cnx';
import useCloseWithKeys from '../hooks/useCloseWithKeys';

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
  useCloseWithKeys(onClose);

  if (!isOpen) return null;

  const positionClass = resolvePosition(position);
  return (
    <div
      id={id}
      style={style}
      className={cnx('wrapper', className)}
      onClick={() => {
        if (maskClosable) onClose?.();
      }}>
      <div className={cnx(`container`, positionClass)}>
        <div className={cnx(`relative`)} onClick={e => e.stopPropagation()}>
          {closable && (
            <button onClick={onClose} className={cnx('btn-closable')}>
              <CloseOutline />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
