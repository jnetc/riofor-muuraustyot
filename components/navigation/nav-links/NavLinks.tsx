import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
// Hook
import { useStore } from '@Hooks/useStore';
// Components
import { NavMobButton } from './NavMobButton';
import { NavMobLinks } from './NavMobLinks';
// Style
import styles from './links.module.css';
// Lang
import { nav_urls } from '@Lang';

export const NavLinks = () => {
  const { language } = useStore();
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const links = nav_urls.map(link => {
    return (
      <NavLink key={link.anchor} url={link.anchor}>
        {link[language]}
      </NavLink>
    );
  });

  useEffect(() => {
    if (openNavMenu) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.removeAttribute('style');
  }, [openNavMenu]);

  return (
    <>
      <nav
        aria-labelledby="desktop navigation"
        className={styles.desktop_navigation}
      >
        {links}
      </nav>
      <NavMobButton handler={setOpenNavMenu} />

      {openNavMenu ? (
        <NavMobLinks handler={setOpenNavMenu} open={openNavMenu}>
          <nav
            aria-labelledby="smartphone navigation"
            className={styles.mob_navigation}
          >
            {links}
          </nav>
        </NavMobLinks>
      ) : null}
    </>
  );
};
