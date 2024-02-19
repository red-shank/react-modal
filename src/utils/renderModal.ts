import { createRoot } from 'react-dom/client';
import { prefix } from '../config/constant';

let elements = {};

export default function renderModal(Element: JSX.Element, isOpen: boolean) {
  const elm = document.querySelector(prefix);
  const rootElement = document.createElement('DIV');
  rootElement.classList.add(prefix);

  const root = createRoot(elm || document.body.appendChild(rootElement));

  if (isOpen) {
    const cacheElement = elements[(Element as any)?.key];
    if (!cacheElement) {
      console.log(Element);
      Element.key = crypto.randomUUID();
      elements[Element.key] = Element;
    }
    root.render(Element);
  }

  return null;
}
