import { useEffect, useRef } from 'react';
// Style
import style from './go-to-top.module.css';

const GoToTop = () => {
  const refToTop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refToTop.current) return;
    document.addEventListener('scroll', () => {
      const position = window.scrollY;
      const fromTop = window.innerHeight / 5;

      if (position < fromTop) {
        refToTop.current?.classList.remove(`${style.view}`);
        return;
      }
      refToTop.current?.classList.add(`${style.view}`);
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  const goToTop = () => window.scrollTo({ top: 0 });

  return (
    <span
      className={`${style.module} grid-12`}
      ref={refToTop}
      role="button"
      tabIndex={0}
      aria-label="go to top button"
      title="go to top button"
      onClick={goToTop}
    />
  );
};

export default GoToTop;
