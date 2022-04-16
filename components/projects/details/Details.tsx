import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

import { useModal } from '@Hooks/useModal';
import { useStore } from '@Hooks/useStore';

import styles from './details.module.css';

import { CloseButton } from '@Components/close-button/CloseButton';
import { labels } from '../project/Project';

export const Details = () => {
  const { language } = useStore();
  const {
    modal: { data, active },
    openModal,
  } = useModal();

  const close = () => openModal({ active: false, data: null });

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.removeAttribute('style');
  }, [active]);

  return active && data
    ? createPortal(
        <dialog className={`modal ${styles.module}`} open={active}>
          <CloseButton handler={close} />
          <section className={styles.details}>
            <div className={styles.poster}>
              <Image
                src={data.projectImage.url}
                alt={data.projectName}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <a
              href={data.cloudLink}
              className={`button fill ${!data.cloudLink ?? 'disable'}`}
              target="_blank"
              rel="noreferrer"
            >
              Kuvat pilvissa
            </a>
            <a
              href={data.googleMap}
              className={`button fill ${!data.googleMap ?? 'disable'}`}
              target="_blank"
              rel="noreferrer"
            >
              Osoite kartalla
            </a>
            <article className={styles.information}>
              <div className={`${styles.info_block} ${styles.left}`}>
                <h3 className={styles.info_title}>
                  {titles.project[language]}
                </h3>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.number[language]}
                >
                  {data.projectNumber}
                </p>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.name[language]}
                >
                  {data.projectName}
                </p>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.date[language]}
                >
                  {data.releaseDate}
                </p>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.contractor[language]}
                >
                  {data.contractor}
                </p>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.address[language]}
                >
                  {data.address}
                </p>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.jobtype[language]}
                >
                  {data.jobType}
                </p>
                <p
                  className={`paragraph ${styles.line}`}
                  data-label={labels.area[language]}
                >
                  {data.area} m<sup>2</sup>
                </p>
              </div>
              <div className={`${styles.info_block} ${styles.right}`}>
                <h3 className={styles.info_title}>{titles.desc[language]}</h3>
                <p className={`${styles.description} paragraph`}>
                  {data.projectDescription}
                </p>
              </div>
            </article>
          </section>
        </dialog>,
        document.getElementById('portal-project') as HTMLElement
      )
    : null;
};

const titles = {
  project: {
    fi: 'Projektin tiedot',
    ru: 'Информация проекта',
  },
  desc: {
    fi: 'Lisää tiedot',
    ru: 'Дополнительно',
  },
};
