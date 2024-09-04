// src/pages/projects.tsx
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

interface Project {
  name: string;
  tech: string[];
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const [filters, setFilters] = useState<string[]>(['all']);
  const techs: string[] = ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter'];
  const [showFilters, setShowFilters] = useState<boolean>(true);

  const config = {
    public: {
      dev: {
        projects: {
          1: { name: 'Project 1', tech: ['React', 'HTML'], description: 'Project 1 Description', image: 'project1.png' },
          2: { name: 'Project 2', tech: ['Vue', 'CSS'], description: 'Project 2 Description', image: 'project2.png' },
          // More projects...
        } as Record<number, Project>,
      },
    },
  };

  const projects = filters.includes('all')
    ? Object.values(config.public.dev.projects)
    : Object.values(config.public.dev.projects).filter((project) =>
        filters.some((filter) => project.tech.includes(filter))
      );

  const toggleFilter = (tech: string) => {
    setFilters((prev) => {
      if (prev.includes(tech)) {
        return prev.filter((filter) => filter !== tech).length === 0 ? ['all'] : prev.filter((filter) => filter !== tech);
      } else {
        return prev.filter((filter) => filter !== 'all').concat(tech);
      }
    });
  };

  return (
    <main className="flex flex-col lg:flex-row overflow-hidden">
      <div id="mobile-page-title">
        <h2>_projects</h2>
      </div>
      <div id="filter-menu" className="w-full flex-col border-right font-fira_regular text-menu-text">
        <div id="section-content-title" className="hidden lg:flex items-center min-w-full">
          <img id="section-arrow-menu" src="/icons/arrow.svg" alt="toggle" className="section-arrow mx-3" />
          <p className="font-fira_regular text-white text-sm">projects</p>
        </div>
        <nav id="filters" className="w-full flex-col">
          {techs.map((tech) => (
            <div key={tech} className="flex items-center py-2">
              <input type="checkbox" id={tech} onClick={() => toggleFilter(tech)} />
              <img id={`icon-tech-${tech}`} src={`/icons/techs/${tech}.svg`} alt={tech} className="tech-icon w-5 h-5 mx-4" />
              <span id={`title-tech-${tech}`}>{tech}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <div id="projects-case" className="grid grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-scroll lg:self-center">
          {projects.length > 0 ? (
            projects.map((project, index) => <ProjectCard key={index} project={project} />)
          ) : (
            <div id="not-found" className="hidden flex flex-col font-fira_retina text-menu-text my-5 h-full justify-center items-center">
              <span className="flex justify-center text-4xl pb-3">X__X</span>
              <span className="text-white flex justify-center text-xl">No matching projects</span>
              <span className="flex justify-center">for these technologies</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Projects;
