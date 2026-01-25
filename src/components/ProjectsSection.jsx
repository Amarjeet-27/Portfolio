import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Key Projects</h2>
          <p className="text-xl text-cyan-400">
            Showcasing Full-Stack and Automation capabilities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
