import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { LangButtons } from './LangButtons';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.module}>
      <Logo />
      <NavLinks />
      <LangButtons />
    </header>
  );
};

export default Navigation;
