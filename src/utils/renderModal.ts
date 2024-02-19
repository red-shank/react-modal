import { createRoot } from 'react-dom/client';
import { prefix } from '../config/constant';

export default function renderModal(Element: JSX.Element, isOpen: boolean) {
  const elm = document.querySelector(prefix);
  const rootElement = document.createElement('DIV');
  rootElement.classList.add(prefix);

  const root = createRoot(elm || document.body.appendChild(rootElement));

  if (isOpen) {
    root.render(Element);
  }

  return null;
}
