import { useStore } from '@Hooks/useStore';
// Styles
import styles from './rightside.module.css';

export const RightSide = () => {
  const { data } = useStore();
  return (
    <article className={styles.module}>
      <h1 className="section-title" style={{ textAlign: 'left' }}>
        {data?.about.title}
      </h1>
      <p className="description-section">{data?.about.description}</p>
    </article>
  );
};
