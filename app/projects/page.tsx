import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <div className="w-full space-y-10">
      <h2 className="text-xl font-medium">My Work</h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          techstack={project.techstack}
          links={project.links}
        />
      ))}
    </div>
  );
}
