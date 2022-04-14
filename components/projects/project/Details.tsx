import { FC } from 'react';
import Image from 'next/image';
// Types
import { ProjectType } from '@Types';
// Component
import Modal from '@Components/modal/Modal';

// import { useModal } from '@Hooks/useModal';
import styles from './details.module.css';

export const Details: FC<{ data: ProjectType<string> }> = ({ data }) => {
  return (
    <Modal>
      <section className={styles.module}>
        <div className={styles.poster}>
          <Image
            src={data.projectImage.url}
            alt={data.projectName}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <a
          href={data.cloudLink}
          className={`btn fill ${!data.cloudLink ?? 'disable'}`}
          target="_blank"
          rel="noreferrer"
        >
          Kuvat pilvissa
        </a>
        <a
          href={data.googleMap}
          className={`btn fill ${!data.googleMap ?? 'disable'}`}
          target="_blank"
          rel="noreferrer"
        >
          Osoite kartalla
        </a>
        <article id="modal-data">
          <div className="modal-block left">
            <h3>Projektin tiedot</h3>
            <p className="strong">Projektin numero</p>
            <p>{data.projectNumber}</p>
            <p className="strong">Projektin nimi</p>
            <p>{data.projectName}</p>
            <p className="strong">Valmistumisvuosi</p>
            <p>{data.releaseDate}</p>
            <p className="strong">Urakoitsija</p>
            <p>{data.contractor}</p>
            <p className="strong">Osoite</p>
            <p>{data.address}</p>
            <p className="strong">Työn tyyppi</p>
            <p>{data.jobType}</p>
            <p className="strong">Pinta-ala</p>
            <p>
              {data.area} m<sup>2</sup>
            </p>
          </div>
          <div className="modal-block right">
            <h3>Lisää tiedot</h3>
            <p id="modal-block_desc" className="rich-txt">
              {data.projectDescription}
            </p>
          </div>
        </article>
      </section>
    </Modal>
  );
};
