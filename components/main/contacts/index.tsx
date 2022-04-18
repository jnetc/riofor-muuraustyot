import Image from 'next/image';
import { createPortal } from 'react-dom';
// Hook
import { useStore } from '@Hooks/useStore';
import { useContacts } from '@Hooks/useContacts';
import { useHideScrollbar } from '@Hooks/useHideScrollbar';
// Style
import styles from './contacts.module.css';
// Component
import { CloseButton } from '@Components/close-button/CloseButton';
import { CopyButton } from '@Components/copy-button';
import { Phone } from '@Components/icons/Phone';
import { Location } from '@Components/icons/Location';
import { Email } from '@Components/icons/Email';
// Lang
import { labels } from '@Lang';

export type Keys = 'email' | 'address' | 'phone';

export const Contacts = () => {
  const { data, language } = useStore();
  const {
    contacts: { active },
    openContacts,
  } = useContacts();
  useHideScrollbar(active);

  if (!data) return null;

  const converAddress = data.home.address.split(' ').join('+');
  const url = `https://www.google.fi/maps/place/${converAddress}`;

  const close = () => openContacts({ active: false });

  return active
    ? createPortal(
        <dialog className={`modal ${styles.module}`} open={active}>
          <CloseButton handler={close} />
          <a
            href="https://zeckit.com/selvitys/FI/1905493-0?lang=fi"
            target="_blank"
            rel="noreferrer"
            className={styles.image}
          >
            <Image
              src="/images/LK.svg"
              alt="Luotettava Kumppani"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <div className={styles.buttons}>
            <a
              href={`tel:${data.home.phone}`}
              className={`${styles.button} ${styles.phone}`}
            >
              <Phone />
            </a>
            <a
              href={`mailto:${data.home.email}`}
              className={`${styles.button} ${styles.email}`}
            >
              <Email />
            </a>
            <a
              href={url}
              className={`${styles.button} ${styles.location}`}
              target="_blank"
              rel="noreferrer"
            >
              <Location />
            </a>
          </div>
          <div className={styles.info}>
            <CopyButton value={data.home.person} />
            <p
              className={`paragraph ${styles.line}`}
              data-label={labels.person[language]}
            >
              {data.home.person}
            </p>
            <CopyButton value={data.home.address} />
            <p
              className={`paragraph ${styles.line}`}
              data-label={labels.address[language]}
            >
              {data.home.address}
            </p>
            <CopyButton value={data.home.address} />
            <p
              className={`paragraph ${styles.line}`}
              data-label={labels.phone[language]}
            >
              {data.home.phone}
            </p>
            <CopyButton value={data.home.phone} />
            <p
              className={`paragraph ${styles.line}`}
              data-label={labels.email[language]}
            >
              {data.home.email}
            </p>
          </div>
        </dialog>,
        document.getElementById('portal-contacts') as HTMLDivElement
      )
    : null;
};
