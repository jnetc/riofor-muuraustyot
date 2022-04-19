import styles from './footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.module}>
      Copyright © {year} Riofor-Muuraustyöt Oy
    </footer>
  );
};

export default Footer;
