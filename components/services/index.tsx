import { useStore } from '@Hooks/useStore';
// Component
import { Service } from './Service';
// Style
import styles from './service.module.css';

const Services = () => {
  const { data } = useStore();

  const cards = data?.service.serviceCard.map(card => {
    return <Service key={card.id} data={card} />;
  });

  return (
    <section id="services">
      <h2 className="section-title">{data?.service.title}</h2>
      <p className="description-section">{data?.service.description}</p>
      <div className={styles.module}>{cards}</div>
    </section>
  );
};

export default Services;
