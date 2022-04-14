import { FC } from 'react';
// Components
import { CompleteIcons } from './CompleteIcon';
import { Details } from './Details';
// styles
import styles from './project.module.css';
// Types
import { ProjectType } from '@Types';
// Hook
import { useStore } from '@Hooks/useStore';
import { useModal } from '@Hooks/useModal';

export const Project: FC<{ data: ProjectType<string> }> = ({ data }) => {
  const { language } = useStore();
  const { openModal } = useModal();
  const modalHandler = () => openModal({ active: true, data });

  // console.log(data.id, data.projectNumber);

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

        <div className={styles.date} data-label={labels.date[language]}>
          {data.releaseDate}
        </div>
        <div
          className={styles.contractor}
          data-label={labels.contractor[language]}
        >
          {data.contractor}
        </div>
        <div className={styles.name} data-label={labels.name[language]}>
          {data.projectName}
        </div>
        <address
          className={styles.address}
          data-label={labels.address[language]}
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
      {/* <Details data={data} /> */}
    </>
  );
};

const labels = {
  date: {
    fi: 'Valmistumisvuosi',
    ru: 'Сдача проекта',
  },
  contractor: {
    fi: 'Urakoitsija',
    ru: 'Подрядчик',
  },
  name: {
    fi: 'Projektin nimi',
    ru: 'название проекта',
  },
  address: {
    fi: 'Osoite',
    ru: 'Адрес',
  },
};