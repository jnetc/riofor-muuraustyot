import { useEffect } from 'react';

export const useHideScrollbar = (active: boolean) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.removeAttribute('style');
  }, [active]);
};
