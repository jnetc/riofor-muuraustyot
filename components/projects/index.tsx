import { useState, MouseEvent } from 'react';
// Hook
import { useStore } from '@Hooks/useStore';
import { useDetails } from '@Hooks/useDetails';
// Components
import { Project } from './project/Project';
// Helpers
import { compare } from '@Helpers/functions';
// Styles
import styles from './projects.module.css';
// Lang
import { projects } from '@Lang';

const Projects = () => {
  const { data, language } = useStore();
  const { openDetails } = useDetails();
  const [toggle, setToggle] = useState(false);

  // If we don't have projects
  if (!data?.project) {
    return (
      <section id="projects">
        <h2 className="section-title">{projects.error[language]}</h2>
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

  const open = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.target as HTMLDivElement;
    const id = el.closest('section')?.id || '';
    const findProject = data.project.projects.find(
      project => project.id === id
    );

    openDetails({ active: true, data: findProject });
  };

  return (
    <section id="projects">
      <h2 className={styles.title}>
        {projects.active[language]} {active.length}
      </h2>
      <div className={styles.blocks} onClick={open}>
        {inprocess}
      </div>
      <h2 className={styles.title} id="finished">
        {projects.finished[language]} {finished.length}
      </h2>
      <div className={styles.blocks} onClick={open}>
        {outprocess}
      </div>
      {outprocess.length > 3 && (
        <a
          href="#finished"
          className="button fill extend"
          onClick={toggleHandler}
        >
          {toggle ? projects.hide[language] : projects.show[language]}
        </a>
      )}
    </section>
  );
};

export default Projects;
