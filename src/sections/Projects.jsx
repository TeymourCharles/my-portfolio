import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <div className="min-h-[60vh] px-4 lg:py-7 py-5 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent web development work and creative projects
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
              <ProjectCard 
                key={index} 
                img={item.img}
                name={item.name} 
                description={item.description} 
                techStack={item.techStack}
                link={item.link}
                githubLink={item.githubLink}
              />
          ))}
          

        </div>
      </div>
    </div>
  );
}

export default Projects;
