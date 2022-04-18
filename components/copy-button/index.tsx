import { useState } from 'react';
import styles from './copy-button.module.css';
// Hook
import { useStore } from '@Hooks/useStore';

export const CopyButton = (text: { value: string }) => {
  const { language } = useStore();
  const [isCopy, setIsCopy] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(text.value);
    setIsCopy(true);
    const clean = setTimeout(() => {
      setIsCopy(false);
      clearTimeout(clean);
    }, 3000);
  };

  return (
    <button
      className={
        isCopy ? `${styles.module} ${styles.is_copy}` : `${styles.module}`
      }
      onMouseDown={copyPhoneNumber}
      title={title[language]}
      aria-label={title[language]}
      data-copy={dataCopy[language]}
    >
      <span className={`${styles.copied_icon}`} />
      <span className={`${styles.copy_icon}`} />
    </button>
  );
};

const dataCopy = {
  fi: 'kopioitu',
  ru: 'скопирован',
};
const title = {
  fi: 'kopioi ',
  ru: 'скопировать',
};
