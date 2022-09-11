import { FC } from 'react';
// Components
import { CompleteIcons } from './CompleteIcon';
// styles
import styles from './project.module.css';
// Types
import { ProjectType } from '@Types';
// Hook
import { useDetails } from '@Hooks/useDetails';

export const Project: FC<{ data: ProjectType<string> }> = ({ data }) => {
  const { openDetails } = useDetails();
  const modalHandler = () => openDetails({ active: true, data });

  return (
    <>
      <section
        className={`${styles.module} ${data.completed ? styles.finished : styles.active}`}
        onClick={modalHandler}
        id={data.id}
      >
        <span className={data.completed ? `${styles.status}` : `${styles.status} ${styles.active}`}>
          {data.completed && <CompleteIcons />}
        </span>

        <div className={styles.date} data-label="Valmistuminen">
          {data.releaseDate}
        </div>
        <div className={styles.contractor} data-label="Urakoitsija">
          {data.contractor}
        </div>
        <div className={styles.name} data-label="Projektin nimi">
          {data.projectName}
        </div>
        <address className={styles.address} data-label="Osoite">
          {data.address}
        </address>
        {data.completed ? (
          <span className="expand-icon dark" />
        ) : (
          <span className="expand-icon dark" />
        )}
      </section>
    </>
  );
};
