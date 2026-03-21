/* eslint-disable @next/next/no-img-element */

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <h2 className="text-3xl font-semibold text-white mb-2">About me</h2>
          <div className="w-12 h-0.5 bg-teal-500 mb-8" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-left">
            <img
              src="/profile.jpg"
              alt="Sander Floria"
              className="w-36 h-36 rounded-xl object-cover border border-teal-500/20 mb-6"
            />
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a second-year Computer Science student at Edinburgh
                Napier University, originally from Italy. I speak English, Italian,
                some Turkish, and I&apos;m currently picking up German.
              </p>
              <p>
                My work spans full-stack web development, mobile apps, and
                backend systems. I&apos;ve built a social accountability app with
                a React Native mobile client, a figurine search engine that
                aggregates 15 stores, and an experiment that ran on the
                International Space Station.
              </p>
              <p>
                I learn best by building. Most of my projects go well beyond course
                requirements — I build them because I want to understand how things
                actually work under the hood.
              </p>
            </div>
          </div>
          <div className="space-y-6 slide-right">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <h3 className="text-white font-medium mb-3">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-teal-400">2024 — 2028</div>
                  <div className="text-white">BSc (Hons) Computer Science</div>
                  <div className="text-gray-400 text-sm">Edinburgh Napier University</div>
                </div>
                <div className="border-t border-white/[0.06] pt-3">
                  <div className="text-sm text-teal-400">2022 — 2024</div>
                  <div className="text-white">International Baccalaureate Diploma</div>
                  <div className="text-gray-400 text-sm">ISF &middot; HL Maths, Physics, Italian</div>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <h3 className="text-white font-medium mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: "English", level: "Fluent" },
                  { lang: "Italian", level: "Fluent" },
                  { lang: "Turkish", level: "Basic" },
                  { lang: "German", level: "Learning" },
                ].map(({ lang, level }) => (
                  <div
                    key={lang}
                    className="text-sm bg-white/[0.06] px-3 py-1.5 rounded-md"
                  >
                    <span className="text-gray-200">{lang}</span>
                    <span className="text-gray-500 ml-1.5">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
