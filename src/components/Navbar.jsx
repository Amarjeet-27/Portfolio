import { Linkedin, Github, Mail } from "lucide-react";
export default function Navbar({ sections, onNav, contact }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-cyan-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        {/* LEFT — Name */}
        <div className="flex-1">
          <h1
            className="text-xl font-extrabold text-cyan-400 cursor-pointer"
            onClick={() => onNav("home")}
          >
            Amarjeet
          </h1>
        </div>

        {/* CENTER — Sections */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {s.name}
            </button>
          ))}
        </nav>

        {/* RIGHT — Contacts */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline text-gray-300 hover:text-cyan-400"
          >
            <Mail />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Linkedin />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Github />
          </a>
        </div>
      </div>
    </header>
  );
}
