import { NavLink } from './NavLink';
import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
import { useModal } from '@Hooks/useModal';

import Modal from '@Components/modal/Modal';

export const NavLinks = () => {
  const { language } = useStore();
  const { modal, openModal } = useModal();
  // const [openMenu, setOpenMenu] = useState(modal);

  const openMobileMenu = () => openModal({ active: true });

  const links = urls.map(link => {
    return (
      <NavLink key={link.anchor} url={link.anchor}>
        {link[language]}
      </NavLink>
    );
  });
  return (
    <>
      <nav className="navigation">{links}</nav>
      <button
        type="button"
        className="nav-mob-btn"
        aria-label="menu button"
        onClick={openMobileMenu}
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
      <Modal>
        <div className="mob-navigation">{links}</div>
      </Modal>
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
