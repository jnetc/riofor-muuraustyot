import { useStore } from '@Hooks/useStore';
import { useModal } from '@Hooks/useModal';
// Icon
import { Icons } from '@Components/icons/Icons';
// Styles
import styles from './leftside.module.css';
// Lang
import { buttons_main } from '@Lang';

export const LeftSide = () => {
  const { data, language } = useStore();
  const { openModal } = useModal();
  return (
    <div className={styles.module}>
      <h1 className="main-title">{data?.home.title}</h1>
      <p className="description-main">{data?.home.description}</p>

      <button
        className="button-with-icon fill fit"
        onClick={() => openModal({ active: true })}
      >
        {buttons_main.offer[language]}
        <Icons icon="paperplain" />
      </button>

      <a href="#projects" className="button-with-icon line fit">
        {buttons_main.projects[language]}
        <Icons icon="projects" />
      </a>
    </div>
  );
};
