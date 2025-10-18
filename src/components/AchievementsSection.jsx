export default function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">
            Technical Achievements
          </h2>
          <p className="text-xl text-cyan-400">
            Solved over 1500 problems on different competitive programming
            platforms
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <a
              href={a.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-xl border border-cyan-800/50"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-600 rounded-full mr-4 flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{a.title}</h3>
                  <p className="text-gray-400">{a.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
