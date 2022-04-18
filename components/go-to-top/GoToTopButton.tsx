import { useEffect, useRef } from 'react';
import Link from 'next/link';
// Style
import styles from './go-to-top.module.css';

const GoToTop = () => {
  const refToTop = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!refToTop.current) return;
    document.addEventListener('scroll', () => {
      const position = window.scrollY;
      const fromTop = window.innerHeight / 5;

      if (position < fromTop) {
        refToTop.current?.classList.remove(`${styles.view}`);
        return;
      }
      refToTop.current?.classList.add(`${styles.view}`);
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Link href="/">
      <a
        className={`${styles.module}`}
        ref={refToTop}
        role="button"
        tabIndex={0}
        aria-label="go to top button"
        title="go to top button"
      />
    </Link>
  );
};

export default GoToTop;
