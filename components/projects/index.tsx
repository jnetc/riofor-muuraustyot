import { useState } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
// Components
import { Project } from './project/Project';
// Helpers
import { compare } from '@Helpers/functions';
// Styles
import styles from './projects.module.css';

const Projects = () => {
  const { data, language } = useStore();
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

  return (
    <section id="projects">
      <h2 className="section-title">{context.title[language]}</h2>
      <h3 className={styles.title}>
        {context.active[language]} {active.length}
      </h3>
      <div className={styles.blocks}>{inprocess}</div>
      <h3 className={styles.title}>
        {context.finished[language]} {finished.length}
      </h3>
      <div className={styles.blocks}>{outprocess}</div>
      {outprocess.length > 3 && (
        <button className="button fill extend" onClick={toggleHandler}>
          {context.button[language]}
        </button>
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
  button: {
    fi: 'Näytä kaikki',
    ru: 'Показать все',
  },
  error: {
    fi: 'Ei ole projektia',
    ru: 'Нет проектов',
  },
};
