import React, { ReactElement, Fragment } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { prefix } from '../../config/constant';
import { Wrapper } from './Wrapper';
import { ModalType } from '../../types';

type InternalModalProps = Partial<
  Pick<ModalType, 'position' | 'onClose' | 'maskClosable' | 'animation'>
>;

type ElementType = InternalModalProps & {
  key: string | number;
  Element: ReactElement;
  zIndex: number;
  isOpen: boolean;
};

let elements: ElementType[] = [];
let _root: Root | null = null;

const getRoot = () => {
  if (!_root) {
    const elm = document.querySelector(`#${prefix}`);
    const rootElement = document.createElement('DIV');
    rootElement.id = prefix;

    _root = createRoot(elm || document.body.appendChild(rootElement));
  }
  return _root;
};

const renderItems = (root: Root, _elements: ElementType[]) => {
  root.render(
    <Fragment>
      {_elements.map((item) => (
        <Wrapper
          id={item.key.toString()}
          key={item.key}
          isOpen={item?.isOpen}
          position={item?.position}
          onClose={item?.onClose}
          maskClosable={item?.maskClosable}
          style={{
            zIndex: item?.zIndex
          }}
        >
          {item.Element}
        </Wrapper>
      ))}
    </Fragment>
  );
};

export default function renderModal(
  _key: string | number,
  Element: ReactElement,
  props: InternalModalProps & { isOpen: boolean }
) {
  const root = getRoot();
  const key = _key ?? crypto.randomUUID();

  const existIndex = elements.findIndex((item) => item.key === key);

  if (props.isOpen) {
    if (existIndex !== -1) {
      elements[existIndex] = {
        key: key,
        Element,
        ...props,
        zIndex: elements[existIndex].zIndex
      };
    } else {
      elements.push({
        key: key,
        Element,
        zIndex: elements.length + 1,
        ...props
      });
    }
  } else {
    elements = elements.filter((item) => item.key !== key);
  }

  renderItems(root, [...elements]);
}

function pushModal(Element: ReactElement, opts?: InternalModalProps) {
  const { maskClosable = true, ...options } =
    opts ||
    ({} as Pick<
      ModalType,
      'onClose' | 'position' | 'maskClosable' | 'animation'
    >);

  const root = getRoot();

  const key = Element?.key ?? crypto.randomUUID();

  const onClose = () => {
    elements = elements.filter((item) => item.key !== key);
    options?.onClose?.();
    renderItems(root, [...elements]);
  };

  renderModal(key, Element, {
    ...options,
    onClose,
    maskClosable,
    isOpen: true
  });
}

export const ACTIONS = {
  push: pushModal,
  // TODO: create remove method
  remove: () => {
    console.log(this);
  }
};
