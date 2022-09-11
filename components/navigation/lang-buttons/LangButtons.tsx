// import { useRouter } from 'next/router';
// import { useStore } from '@Hooks/useStore';
// import { LangButton } from './LangButton';

import styles from './languages.module.css';

export const LangButtons = () => {
  // const { languages } = useStore();
  // const { asPath } = useRouter();

  // const langs = languages.map(lang => {
  //   return <LangButton key={lang} lang={lang} path={asPath} />;
  // });
  return <div className={styles.module}>{/* {langs} <span className="selected-lang" /> */}</div>;
};
