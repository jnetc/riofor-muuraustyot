import Image from 'next/image';
// Hook
import { useStore } from '@Hooks/useStore';
// Styles
import styles from './footer.module.css';
// Lang
import { labels } from '@Lang';

const Footer = () => {
  const { data, language } = useStore();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.module}>
      <address>
        <p>
          <strong>{labels.address[language]}:</strong>
          {data?.home.address}
        </p>
        <p>
          <strong>{labels.phone[language]}:</strong>
          {data?.home.phone}
        </p>
        <p>
          <strong>{labels.email[language]}:</strong>
          {data?.home.email}
        </p>
      </address>
      {/* <a
        href="https://zeckit.com/selvitys/FI/1905493-0?lang=fi"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/LK_valkoinen.jpg"
          alt="Luotettava Kumppani"
          layout="fill"
          objectFit="contain"
        />
      </a>
      <a href="https://zeckit.com/selvitys/FI/1905493-0?lang=fi">
        <Image
          src={`https://zpckit.s3.amazonaws.com/uploads/${year}/01/AAA-logo-${year}-FI.jpg`}
          alt="Luotettava Kumppani"
          layout="fill"
          objectFit="contain"
        />
      </a> */}
      <span className={styles.year}>
        Copyright © {year} Riofor-Muuraustyöt Oy
      </span>
    </footer>
  );
};

export default Footer;
