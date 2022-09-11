import { createPortal } from 'react-dom';
import Image from 'next/image';
// Hook
import { useDetails } from '@Hooks/useDetails';
import { useHideScrollbar } from '@Hooks/useHideScrollbar';
// style
import styles from './details.module.css';
// Component
import { CloseButton } from '@Components/close-button/CloseButton';

export const Details = () => {
  const {
    details: { data, active },
    openDetails,
  } = useDetails();

  // const converAddress = data?.address.split(' ').join('+');
  // const url = `https://www.google.fi/maps/place/${converAddress}`;

  const close = () => openDetails({ active: false, data: null });

  useHideScrollbar(active);

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
                blurDataURL={data.projectImage.blurUpThumb}
                placeholder="blur"
              />
            </div>
            <a
              href={data.geolocation}
              className={`button fill ${data.geolocation ? '' : 'disable'}`}
              target="_blank"
              rel="noreferrer"
            >
              Osoite kartalla
            </a>
            <a
              href={data.cloudLink}
              className={`button fill ${data.cloudLink ? '' : 'disable'}`}
              target="_blank"
              rel="noreferrer"
            >
              Kuvat pilvissa
            </a>
            <article className={styles.information}>
              <div className={`${styles.info_block} ${styles.left}`}>
                <h3 className={styles.info_title}>Projektin tiedot</h3>
                <p className={`paragraph ${styles.line}`} data-label="Numero">
                  {data.projectNumber}
                </p>
                <p className={`paragraph ${styles.line}`} data-label="Projektin nimi">
                  {data.projectName}
                </p>
                <p className={`paragraph ${styles.line}`} data-label="Valmistuminen">
                  {data.releaseDate}
                </p>
                <p className={`paragraph ${styles.line}`} data-label="Urakoitsija">
                  {data.contractor}
                </p>
                <p className={`paragraph ${styles.line}`} data-label="Osoite">
                  {data.address}
                </p>
                <p className={`paragraph ${styles.line}`} data-label="Työn tyyppi">
                  {data.jobType}
                </p>
                <p className={`paragraph ${styles.line}`} data-label="Pinta-ala">
                  {data.area} m<sup>2</sup>
                </p>
              </div>
              <div className={`${styles.info_block} ${styles.right}`}>
                <h3 className={styles.info_title}>Lisä tiedot</h3>
                <p className={`${styles.description} paragraph`}>{data.projectDescription}</p>
              </div>
            </article>
          </section>
        </dialog>,
        document.getElementById('portal-details') as HTMLDivElement
      )
    : null;
};
