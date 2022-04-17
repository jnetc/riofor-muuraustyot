import { Icons } from './icons/Icons';
// Type
import { ServicesType } from '@Types';
// Style
import styles from './service.module.css';

export const Service = ({ data }: { data: ServicesType<string> }) => {
  return (
    <article className={styles.service}>
      <Icons icon={data.icon} />
      <h1 className="h2-title">{data.cardTitle}</h1>
      <p className="paragraph">{data.cardDescription}</p>
    </article>
  );
};
