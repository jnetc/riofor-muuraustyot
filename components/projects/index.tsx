import { useState, MouseEvent } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
import { useModal } from '@Hooks/useModal';
// Components
import { Project } from './project/Project';
// Helpers
import { compare } from '@Helpers/functions';
// Styles
import styles from './projects.module.css';
import { Icons } from '@Components/icons/Icons';

const Projects = () => {
  const { data, language } = useStore();
  const { openModal } = useModal();
  const [toggle, setToggle] = useState(false);

  // If we don't have projects
  if (!data?.project) {
    return (
      <section id="projects">
        <h2 className="section-title">{context.error[language]}</h2>
      </section>
    );
  }

  // Slice array to active & finished projects
  const active = data.project.projects.filter(el => !el.completed && el);
  const finished = data.project.projects.filter(el => el.completed && el);

  // Active project
  const inprocess = active
    .sort((a, b) => compare(a, b))
    .map(data => {
      return !data.completed && <Project key={data.id} data={data} />;
    });

  // Finished project
  const outprocess = finished
    // Sort first by months then years
    .sort((a, b) => compare(a, b))
    .map((data, i) => {
      // Cut 3 project from array
      if (!toggle && i <= 2) {
        return data.completed && <Project key={data.id} data={data} />;
      }
      // Show full array
      if (toggle) {
        return data.completed && <Project key={data.id} data={data} />;
      }
    });

  const toggleHandler = () => setToggle(!toggle);

  const openDetails = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement;
    const id = el.closest('section')?.id || '';
    const findProject = data.project.projects.find(
      project => project.id === id
    );

    openModal({ active: true, data: findProject });
  };

  return (
    <section id="projects">
      <h2 className="section-title">{context.title[language]}</h2>
      <h3 className={styles.title}>
        {context.active[language]} {active.length}
      </h3>
      <div className={styles.blocks} onClick={openDetails}>
        {inprocess}
      </div>
      <h3 className={styles.title} id="finished">
        {context.finished[language]} {finished.length}
      </h3>
      <div className={styles.blocks} onClick={openDetails}>
        {outprocess}
      </div>
      {outprocess.length > 3 && (
        <a
          href="#finished"
          className="button fill extend"
          onClick={toggleHandler}
        >
          {toggle ? context.hide[language] : context.show[language]}
          {toggle ? <Icons icon="up" /> : <Icons icon="down" />}
        </a>
      )}
    </section>
  );
};

export default Projects;

const context = {
  title: {
    fi: 'projektit',
    ru: 'проекты',
  },
  active: {
    fi: 'Käynnissä olevat projektit',
    ru: 'Текущие проекты',
  },
  finished: {
    fi: 'Valmistuneet projektit',
    ru: 'Завершенные проекты',
  },
  show: {
    fi: 'Näytä kaikki',
    ru: 'Показать все',
  },
  hide: {
    fi: 'Piilottaa',
    ru: 'Свернуть',
  },
  error: {
    fi: 'Ei ole projektia',
    ru: 'Нет проектов',
  },
};
