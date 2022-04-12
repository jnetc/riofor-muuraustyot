import Image from 'next/image';

import styles from './rightside.module.css';

export const RightSide = () => {
  return (
    <div className={styles.module}>
      <Image
        src="/images/riofor.svg"
        alt="riofor illustration"
        layout="fill"
        priority
      />
    </div>
  );
};
