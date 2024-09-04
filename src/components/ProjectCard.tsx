// src/components/ProjectCard.tsx
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    name: string;
    tech: string[];
    description: string;
    image: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card p-4 border border-gray-dark rounded-lg">
      <Image
        src={`/images/projects/${project.image}`}
        alt={project.name}
        width={300}
        height={200}
        className="rounded"
      />
      <h3 className="text-xl font-bold mt-4">{project.name}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="tech-stack mt-4">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag inline-block bg-blue-500 text-white px-3 py-1 rounded mr-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
