import * as React from 'react';

export default function useCloseWithKeys(onClose?: () => void) {
  React.useEffect(() => {
    // @ts-ignore
    if (typeof window === 'undefined') return;

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    // @ts-ignore
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // @ts-ignore
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // El array vacío asegura que el efecto se ejecute una sola vez
}
