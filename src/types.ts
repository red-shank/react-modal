import { CSSProperties, PropsWithChildren } from 'react';
import { PositionType } from './utils/resolvePosition';

type CommonProps = {
  className?: string;
  style?: CSSProperties;
  id?: string;
  [key: string]: unknown;
};

export type ModalType = PropsWithChildren<{
  position?: PositionType;
  animation?: string;
  closable?: boolean;
  maskClosable?: boolean;
  isOpen: boolean;
  onClose: () => void;
}>;

export type ModalHeaderType = PropsWithChildren<
  CommonProps & {
    isFixing?: boolean;
    position?: 'start' | 'center' | 'end';
  }
>;

export type ModalContentType = PropsWithChildren<
  CommonProps & {
    isFixing?: boolean;
    position?: 'start' | 'center' | 'end';
    width?: string | number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  }
>;

export type ModalBodyType = PropsWithChildren<CommonProps & {}>;

export type ModalFooterType = PropsWithChildren<
  CommonProps & {
    isFixing?: boolean;
    position?: 'start' | 'center' | 'end';
  }
>;
