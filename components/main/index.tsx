import { LeftSide } from './left-side/LeftSide';
import { RightSide } from './right-side/RightSide';

import styles from './main.module.css';

const Main = () => {
  return (
    <section id="main" className={styles.module}>
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default Main;
