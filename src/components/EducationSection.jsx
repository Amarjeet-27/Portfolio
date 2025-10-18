import { GraduationCap } from "lucide-react";

export default function EducationSection({ education }) {
  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Education</h2>
          <p className="text-xl text-cyan-400">
            Foundation of my technical background.
          </p>
        </div>
        <div className="space-y-8">
          {education.map((e, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-xl border border-cyan-800/50 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex items-center">
                <GraduationCap className="w-10 h-10 text-cyan-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{e.school}</h3>
                  <p className="text-lg text-gray-300">{e.degree}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <p className="text-lg text-cyan-400 font-semibold">{e.cgpa}</p>
                <p className="text-gray-500">
                  {e.date} ({e.location})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
