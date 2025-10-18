import { Github, Zap } from "lucide-react";

export default function ProjectCard({ project }) {
  const Icon = project.icon || null;
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-2xl border border-cyan-800/50 transition transform hover:-translate-y-1">
      {Icon && <Icon className="w-10 h-10 text-cyan-400 mb-4" />}
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="px-3 py-1 text-sm bg-cyan-900/50 text-cyan-200 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 px-3 py-2 bg-gray-700 rounded-lg flex items-center justify-center"
        >
          {" "}
          <Github size={16} className="mr-2" />
          View Code
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex-1 px-3 py-2 bg-cyan-600 rounded-lg flex items-center justify-center"
        >
          {" "}
          <Zap size={16} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  );
}
