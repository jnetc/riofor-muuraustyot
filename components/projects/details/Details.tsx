import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

import { useModal } from '@Hooks/useModal';
import styles from './details.module.css';

export const Details = () => {
  const {
    modal: { data, active },
    openModal,
  } = useModal();

  const closeDetails = () => openModal({ active: false, data: null });

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
          <button
            type="button"
            className="close-btn"
            aria-label="close menu button"
            onClick={closeDetails}
          >
            <svg viewBox="0 0 13 13">
              <path
                d="M11.2437 11.5905L1.24365 1.59048M11.2437 1.59045L1.24371 11.5905"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
                <h3 className={styles.info_title}>Projektin tiedot</h3>
                <p className="strong">Projektin numero</p>
                <p className="paragraph">{data.projectNumber}</p>
                <p className="strong">Projektin nimi</p>
                <p className="paragraph">{data.projectName}</p>
                <p className="strong">Valmistumisvuosi</p>
                <p className="paragraph">{data.releaseDate}</p>
                <p className="strong">Urakoitsija</p>
                <p className="paragraph">{data.contractor}</p>
                <p className="strong">Osoite</p>
                <p className="paragraph">{data.address}</p>
                <p className="strong">Työn tyyppi</p>
                <p className="paragraph">{data.jobType}</p>
                <p className="strong">Pinta-ala</p>
                <p className="paragraph">
                  {data.area} m<sup>2</sup>
                </p>
              </div>
              <div className={`${styles.info_block} ${styles.right}`}>
                <h3 className={styles.info_title}>Lisää tiedot</h3>
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
