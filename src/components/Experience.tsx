import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    title: "AstroPi Mission Space Lab",
    role: "Developer",
    description:
      "Designed and deployed a Python experiment that was executed on the International Space Station. The analysis received positive praise for its clarity and depth from the AstroPi reviewers. Built skills in collaborative research, testing under extreme technical constraints (no network, capped memory, fixed runtime), and data interpretation.",
    context: "European Space Agency & Raspberry Pi Foundation",
  },
  {
    title: "CoderDojo",
    role: "Participant → Mentor",
    description:
      "Taught programming fundamentals — Python, Java, Scratch, and basic web development — to dozens of younger learners through small-group workshops. Progressed from participant to mentor over several years. Sharpened communication skills explaining systems thinking to kids who'd never seen code before.",
    context: "Volunteer, ongoing",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="05" title="Experience" subtitle="— Timeline" />

        <div className="mt-20 md:mt-28 space-y-20 md:space-y-28">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className="reveal grid md:grid-cols-12 gap-6 md:gap-8"
              data-delay={i + 1}
            >
              <div className="md:col-span-3 font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] space-y-1">
                <div className="text-[var(--color-accent)]">
                  E / {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[var(--color-ink-faint)] hidden md:block">
                  {exp.context}
                </div>
              </div>
              <div className="md:col-span-9 max-w-[62ch]">
                <h3 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3 text-[var(--color-ink)]">
                  {exp.title}
                </h3>
                <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-accent)] mb-7">
                  {exp.role}
                </div>
                <p className="text-[var(--color-ink-dim)] leading-[1.75] text-[15px]">
                  {exp.description}
                </p>
                <div className="md:hidden mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-faint)]">
                  {exp.context}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
