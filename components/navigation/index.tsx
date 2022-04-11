import { Logo } from './Logo';
import { NavLinks } from './nav-links/NavLinks';
import { LangButtons } from './lang-buttons/LangButtons';
import { ThemeButton } from './theme-button/ThemeButton';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.module}>
      <Logo />
      <NavLinks />
      <LangButtons />
      <ThemeButton />
    </header>
  );
};

export default Navigation;
