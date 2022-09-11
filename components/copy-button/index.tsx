import { useState } from 'react';
import styles from './copy-button.module.css';

export const CopyButton = (text: { value: string }) => {
  const [isCopy, setIsCopy] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(text.value);
    setIsCopy(true);
    const clean = setTimeout(() => {
      setIsCopy(false);
      clearTimeout(clean);
    }, 1000);
  };

  return (
    <button
      className={isCopy ? `${styles.module} ${styles.is_copy}` : `${styles.module}`}
      onMouseDown={copyPhoneNumber}
      title="kopioi"
      aria-label="kopioi"
      data-copy="kopioitu"
    >
      <span className={`${styles.copied_icon}`} />
      <span className={`${styles.copy_icon}`} />
    </button>
  );
};
