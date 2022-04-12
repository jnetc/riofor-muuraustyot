import Link from 'next/link';
// Hook
import { useStore } from '@Hooks/useStore';

import styles from './leftside.module.css';

export const LeftSide = () => {
  const { data, language } = useStore();
  return (
    <div className={styles.module}>
      <h1 className="main-title">{data?.home.title}</h1>
      <p className="description-main">{data?.home.description}</p>
      <Link href="email:apxdemon@gmail.com">
        <a className="button fill fit">{buttons.offer[language]}</a>
      </Link>
      <Link href="#projects">
        <a className="button line fit">{buttons.projects[language]}</a>
      </Link>
    </div>
  );
};

const buttons = {
  offer: {
    fi: 'Pyydä tarjous',
    ru: 'Спросить скидку',
  },
  projects: {
    fi: 'Projektit',
    ru: 'Проекты',
  },
};
