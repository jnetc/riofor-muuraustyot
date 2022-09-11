import { useStore } from '@Hooks/useStore';
import { useContacts } from '@Hooks/useContacts';
// Icon
import { PaperPlain } from '@Components/icons/PaperPlain';
import { Projects } from '@Components/icons/Projects';
// Styles
import styles from './leftside.module.css';

export const LeftSide = () => {
  const { data } = useStore();
  const { openContacts } = useContacts();

  const open = () => openContacts({ active: true });

  return (
    <div className={styles.module}>
      <h1 className="main-title">{data?.home.title}</h1>
      <p className="description-main">{data?.home.description}</p>

      <button className="button-with-icon fill fit" onClick={open}>
        Ota yhteyttä
        <div className="btn-icon normal">
          <PaperPlain />
        </div>
      </button>

      <a href="#projects" className="button-with-icon line fit">
        Projektit
        <div className="btn-icon normal">
          <Projects />
        </div>
      </a>
    </div>
  );
};
