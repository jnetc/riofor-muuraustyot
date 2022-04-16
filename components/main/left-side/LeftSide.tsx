import { useStore } from '@Hooks/useStore';
// Icon
import { Icons } from '@Components/icons/Icons';
// Styles
import styles from './leftside.module.css';

export const LeftSide = () => {
  const { data, language } = useStore();
  return (
    <div className={styles.module}>
      <h1 className="main-title">{data?.home.title}</h1>
      <p className="description-main">{data?.home.description}</p>

      <button className="button fill fit">
        {buttons.offer[language]}
        <Icons icon="paperplain" />
      </button>

      <a href="#projects" className="button line fit">
        {buttons.projects[language]}
        <Icons icon="projects" />
      </a>
    </div>
  );
};

const buttons = {
  offer: {
    fi: 'Ota yhteyttä',
    ru: 'Связаться',
  },
  projects: {
    fi: 'Projektit',
    ru: 'Проекты',
  },
};
