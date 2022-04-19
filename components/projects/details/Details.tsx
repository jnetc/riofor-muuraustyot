import { createPortal } from 'react-dom';
import Image from 'next/image';
// Hook
import { useDetails } from '@Hooks/useDetails';
import { useStore } from '@Hooks/useStore';
import { useHideScrollbar } from '@Hooks/useHideScrollbar';
// style
import styles from './details.module.css';
// Component
import { CloseButton } from '@Components/close-button/CloseButton';
// Lang
import { labels, project_titles } from '@Lang';

export const Details = () => {
  const { language } = useStore();
  const {
    details: { data, active },
    openDetails,
  } = useDetails();

  const converAddress = data?.address.split(' ').join('+');
  const url = `https://www.google.fi/maps/place/${converAddress}`;

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
              />
            </div>
            <a
              href={url}
              className={`button fill`}
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
                <h3 className={styles.info_title}>
                  {project_titles.project[language]}
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
                <h3 className={styles.info_title}>
                  {project_titles.desc[language]}
                </h3>
                <p className={`${styles.description} paragraph`}>
                  {data.projectDescription}
                </p>
              </div>
            </article>
          </section>
        </dialog>,
        document.getElementById('portal-details') as HTMLDivElement
      )
    : null;
};
