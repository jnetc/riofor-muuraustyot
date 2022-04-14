import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
// Hook
import { useStore } from '@Hooks/useStore';
// Components
import { NavMobButton } from './NavMobButton';
import { NavMobLinks } from './NavMobLinks';

import styles from './links.module.css';

export const NavLinks = () => {
  const { language } = useStore();
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const links = urls.map(link => {
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
          <div className={styles.mob_navigation}>{links}</div>
        </NavMobLinks>
      ) : null}
    </>
  );
};

const urls = [
  {
    fi: 'Etusivu',
    ru: 'Начальная',
    anchor: '/',
  },
  {
    fi: 'Projektit',
    ru: 'Проекты',
    anchor: '#projects',
  },
  {
    fi: 'Palvelut',
    ru: 'Услуги',
    anchor: '#services',
  },
  {
    fi: 'Meista',
    ru: 'О нас',
    anchor: '#about',
  },
];
