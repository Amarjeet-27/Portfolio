export default function Hero({ config, onPrimary }) {
  return (
    <section
      id="home"
      className="pt-24 pb-16 min-h-screen flex items-center bg-gray-900 bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <p className="text-lg text-gray-400 mb-2">Hello, I'm</p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          {config.name}
        </h2>
        <h3 className="text-2xl md:text-3xl font-light text-cyan-400 mb-8">
          {config.tagline}
        </h3>

        <p className="text-lg text-gray-300 mb-8">
          I build scalable and high-performance full-stack applications using
          Java, Spring Boot, and the MERN stack. I focus on writing clean,
          efficient code, implementing reliable backend services, and creating
          responsive, user-friendly frontend experiences.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onPrimary("projects")}
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => onPrimary("contact")}
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
