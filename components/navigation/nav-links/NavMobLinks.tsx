import { FC, ReactChild, Dispatch, SetStateAction, MouseEvent } from 'react';

import styles from './links.module.css';

interface Props {
  children: ReactChild;
  open: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
}

export const NavMobLinks: FC<Props> = ({ children, open, handler }) => {
  const clickOnLink = (event: MouseEvent<HTMLElement>) => {
    const el = event.target as HTMLElement;
    if (el.tagName !== 'A') return;
    handler(false);
  };

  return (
    <nav
      aria-labelledby="smartphone navigation"
      className={`${styles.mobile_navigation} ${open && styles.open}`}
      onClick={clickOnLink}
    >
      <button
        type="button"
        className="close-btn"
        aria-label="close menu button"
        onClick={() => handler(false)}
      >
        <svg viewBox="0 0 13 13">
          <path
            d="M11.2437 11.5905L1.24365 1.59048M11.2437 1.59045L1.24371 11.5905"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {children}
    </nav>
  );
};
