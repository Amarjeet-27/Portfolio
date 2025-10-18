import { Star } from "lucide-react";

// minimal icon map to keep file small; can be extended
const IconFallback = ({ size = 16 }) => <Star size={size} />;

export default function SkillsSection({ skills, softSkills }) {
  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">
            Technical Stack
          </h2>
          <p className="text-xl text-cyan-400">
            My proficiency across diverse engineering domains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([cat, list]) => (
            <div
              key={cat}
              className="bg-gray-900 p-6 rounded-xl shadow-2xl border border-cyan-800/50"
            >
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-cyan-400">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-3">
                {list.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center bg-gray-700/70 text-cyan-200 px-4 py-2 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 p-6 rounded-xl mx-auto max-w-4xl border border-cyan-800/50">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-cyan-400">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center bg-gray-700/70 text-cyan-400 px-4 py-2 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
