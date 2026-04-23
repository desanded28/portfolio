/* eslint-disable @next/next/no-img-element */
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="01" title="About" subtitle="— Bio" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mt-20 md:mt-24">
          {/* Photo column */}
          <figure className="md:col-span-4 reveal">
            <div className="aspect-[3/4] overflow-hidden bg-[var(--color-bg-soft)] border border-[var(--color-rule)]">
              <img
                src="/profile.jpg"
                alt="Sander Floria"
                className="w-full h-full object-cover grayscale contrast-[1.05]"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-dim)] flex justify-between">
              <span>Edinburgh</span>
              <span>04 / 2026</span>
            </figcaption>
          </figure>

          {/* Bio column */}
          <div className="md:col-span-8 md:pt-4">
            <div className="reveal max-w-[62ch]">
              <p className="font-serif text-2xl md:text-[30px] leading-[1.4] mb-8 text-[var(--color-ink)]">
                <em className="text-[var(--color-accent)]">I&apos;m Sander.</em>{" "}
                Born in Tuscany, finished high school at the International
                School of Florence, and now reading Computer Science at
                Edinburgh Napier.
              </p>

              <div className="space-y-5 text-[var(--color-ink-dim)] leading-[1.75] text-[15px]">
                <p>
                  My work covers full-stack web and mobile, backend systems,
                  and applied ML — often blurring between them. The pattern
                  I&apos;ve noticed about myself: I learn best by building
                  things that have to handle real inputs, not toy problems.
                </p>
                <p>
                  I&apos;ve shipped a Python experiment that ran on the
                  International Space Station, a bilingual AI receptionist
                  that books appointments in my dad&apos;s dental practice
                  back in Tuscany, and an anime figurine search engine that
                  crawls fifteen Japanese stores in parallel.
                </p>
                <p className="text-[var(--color-ink)]">
                  Most of my code lives outside the curriculum — on GitHub,
                  in production for real people, or running in low Earth orbit.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 md:gap-14 mt-14 md:mt-16">
              {/* Languages */}
              <div className="reveal" data-delay="1">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] mb-5 flex items-center gap-3">
                  <span className="w-6 h-px bg-[var(--color-rule-strong)]" />
                  Languages
                </div>
                <ul className="space-y-3 font-serif text-lg">
                  {[
                    { lang: "English", level: "fluent" },
                    { lang: "Italian", level: "mother tongue" },
                    { lang: "Turkish", level: "basic" },
                    { lang: "German", level: "learning" },
                  ].map(({ lang, level }) => (
                    <li key={lang} className="flex items-baseline justify-between gap-3 border-b border-[var(--color-rule)] pb-3">
                      <span className="text-[var(--color-ink)]">{lang}</span>
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--color-ink-faint)]">
                        {level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="reveal" data-delay="2">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] mb-5 flex items-center gap-3">
                  <span className="w-6 h-px bg-[var(--color-rule-strong)]" />
                  Education
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="font-serif text-lg text-[var(--color-ink)]">
                      BSc (Hons) Computer Science
                    </div>
                    <div className="font-serif italic text-[var(--color-ink-dim)] text-sm mt-0.5">
                      Edinburgh Napier University
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--color-ink-faint)] mt-1">
                      2024 — 2028
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-rule)]">
                    <div className="font-serif text-lg text-[var(--color-ink)]">
                      International Baccalaureate
                    </div>
                    <div className="font-serif italic text-[var(--color-ink-dim)] text-sm mt-0.5">
                      International School of Florence
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--color-ink-faint)] mt-1">
                      2022 — 2024 · HL Maths · Physics · Italian
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
