import { PropsWithChildren } from 'react';
import { PositionType } from './utils/resolvePosition';

export type ModalType = PropsWithChildren<{
  position?: PositionType;
  animation?: string;
  closable?: boolean;
  maskClosable?: boolean;
  isOpen: boolean;
  onClose: () => void;
}>;

export type ModalHeaderType = PropsWithChildren<{
  isFixing: boolean;
}>;

export type ModalContentType = PropsWithChildren<{}>;

export type ModalFooterType = PropsWithChildren<{
  isFixing: boolean;
}>;
