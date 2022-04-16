import { FC } from 'react';
// Components
import { CompleteIcons } from './CompleteIcon';
// styles
import styles from './project.module.css';
// Types
import { ProjectType } from '@Types';
// Hook
import { useStore } from '@Hooks/useStore';
import { useModal } from '@Hooks/useModal';
// Lang
import { project_labels } from '@Lang';

export const Project: FC<{ data: ProjectType<string> }> = ({ data }) => {
  const { language } = useStore();
  const { openModal } = useModal();
  const modalHandler = () => openModal({ active: true, data });

  return (
    <>
      <section
        className={`${styles.module} ${
          data.completed ? styles.finished : styles.active
        }`}
        onClick={modalHandler}
        id={data.id}
      >
        <span
          className={
            data.completed
              ? `${styles.status}`
              : `${styles.status} ${styles.active}`
          }
        >
          {data.completed && <CompleteIcons />}
        </span>

        <div className={styles.date} data-label={project_labels.date[language]}>
          {data.releaseDate}
        </div>
        <div
          className={styles.contractor}
          data-label={project_labels.contractor[language]}
        >
          {data.contractor}
        </div>
        <div className={styles.name} data-label={project_labels.name[language]}>
          {data.projectName}
        </div>
        <address
          className={styles.address}
          data-label={project_labels.address[language]}
        >
          {data.address}
        </address>
        {data.completed ? (
          <span className="expand-icon dark" />
        ) : (
          <span className="expand-icon dark" />
        )}
        {/* <Image image={data?.image} alt={data?.name} modal={false} /> */}
      </section>
    </>
  );
};
