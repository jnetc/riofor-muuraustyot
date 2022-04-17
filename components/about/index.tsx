import { LeftSide } from './left-side/LeftSide';
import { RightSide } from './right-side/RightSide';

import styles from './about.module.css';

const About = () => {
  return (
    <section id="about" className={styles.module}>
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default About;
