const experiences = [
  {
    title: "AstroPi Mission Space Lab",
    role: "Developer",
    description:
      "Developed and deployed a Python-based experiment that was executed on the International Space Station. The analysed results received positive praise for clarity and depth. Built skills in collaborative research, testing under extreme technical constraints, and data interpretation.",
  },
  {
    title: "CoderDojo",
    role: "Participant & Mentor",
    description:
      "Taught programming fundamentals — Python, Java, Scratch, and basic web development — to dozens of younger learners through small-group workshops. Improved learners' confidence while building strong communication and mentoring abilities.",
  },
  {
    title: "Maker Faires & Tech Events",
    role: "Participant",
    description:
      "Attended Maker Faires and tech community events to explore emerging technologies. Participated in hands-on workshops like MakerLabs, building awareness of industry trends and ability to evaluate new tools and platforms.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <h2 className="text-3xl font-semibold text-white mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-teal-500 mb-12" />
        </div>
        <div className="space-y-0 stagger-children">
          {experiences.map((exp, i) => (
            <div key={exp.title} className="flex gap-6 group">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-teal-500 border-2 border-[#0f1118] mt-1.5" />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-white/[0.08]" />
                )}
              </div>
              <div className="pb-12">
                <h3 className="text-white font-medium text-lg">{exp.title}</h3>
                <div className="text-teal-400 text-sm mb-2">{exp.role}</div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
