import { Award } from "lucide-react";

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-cyan-800/50"
            >
              <div className="flex justify-between items-start mb-3">
                <Award className="w-8 h-8 text-cyan-400 mr-4" />
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold text-white"
                >
                  {c.title}
                </a>
              </div>
              <p className="text-gray-400 text-sm">{c.issuer}</p>
              <p className="text-gray-500 text-xs">{c.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
