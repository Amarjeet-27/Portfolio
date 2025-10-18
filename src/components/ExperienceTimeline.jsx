import { Clock, MapPin } from "lucide-react";

export default function ExperienceTimeline({ experience }) {
  return (
    <section id="experience" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">
            Professional Experience
          </h2>
          <p className="text-xl text-cyan-400">
            Where I've applied my skills to solve real-world problems.
          </p>
        </div>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute h-full border border-gray-700"
            style={{ left: "50%" }}
          ></div>
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "flex-row-reverse left-timeline"
                  : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12 hidden md:block"></div>
              <div className="z-10 flex items-center order-1 bg-cyan-600 shadow-xl w-10 h-10 rounded-full">
                <exp.icon className="mx-auto text-white" size={18} />
              </div>
              <div
                className={`order-1 w-full md:w-5/12 p-6 rounded-xl shadow-2xl bg-gray-900 border border-cyan-800/50 ${
                  index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}
              >
                <h3 className="mb-2 font-bold text-xl text-cyan-400">
                  {exp.title}
                </h3>
                <h4 className="mb-1 text-lg font-medium text-white">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-500 flex items-center mb-3">
                  <Clock size={14} className="mr-1" />
                  {exp.date} &bull; <MapPin size={14} className="ml-2 mr-1" />
                  {exp.location}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
