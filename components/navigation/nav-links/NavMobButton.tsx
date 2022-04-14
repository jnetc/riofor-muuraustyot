import { FC, Dispatch, SetStateAction } from 'react';
import styles from './links.module.css';

export const NavMobButton: FC<{
  handler: Dispatch<SetStateAction<boolean>>;
}> = ({ handler }) => {
  return (
    <button
      type="button"
      className={styles.nav_mob_btn}
      aria-label="menu button"
      onClick={() => handler(true)}
    >
      <svg viewBox="0 0 17 13">
        <path
          d="M15.8323 6.59219H1.83228M10.8323 11.5765H1.83228M15.8323 1.57574H1.83228"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
