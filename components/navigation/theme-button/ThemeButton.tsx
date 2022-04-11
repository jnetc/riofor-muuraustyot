import { useEffect, useState } from 'react';

import styles from './theme-button.module.css';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';

export const ThemeButton = () => {
  const [themeState, setThemeState] = useState(LIGHT_SCHEME);
  const toggleTheme = () => {
    const hasSameValue =
      themeState === DARK_SCHEME ? LIGHT_SCHEME : DARK_SCHEME;
    setThemeState(hasSameValue);
  };

  useEffect(() => {
    const lS = localStorage.getItem('theme') as string;

    if (lS !== LIGHT_SCHEME) {
      document.documentElement.dataset.theme = lS;
      setThemeState(lS);
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', themeState);
    document.documentElement.dataset.theme = themeState;
  }, [themeState]);

  return (
    <div className={styles.module} onClick={toggleTheme}>
      <span className={styles.theme_switcher} />
    </div>
  );
};
