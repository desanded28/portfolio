import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="06" title="Contact" subtitle="— End matter" />

        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-8 reveal">
            <p className="font-serif text-[36px] md:text-5xl lg:text-[60px] leading-[1.1] tracking-tight text-[var(--color-ink)] max-w-[22ch] mb-10">
              Looking for a <em>placement year</em> — ideally building
              something ambitious.
            </p>

            <p className="text-[var(--color-ink-dim)] leading-[1.75] text-[15px] max-w-[56ch] mb-12">
              Open to 12-month placements at companies working on serious
              engineering — German OEMs, dev tools, production AI systems,
              anything that ships to real people. Happy to relocate to
              Germany or Austria, or stay in the UK.
            </p>

            <a
              href="mailto:sanderfloriauni@gmail.com"
              className="group inline-flex items-baseline gap-4 font-serif italic text-2xl md:text-[34px] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              <span className="font-mono not-italic text-[11px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] group-hover:text-[var(--color-accent)] transition-colors">
                →
              </span>
              <span className="border-b border-current pb-1">
                sanderfloriauni@gmail.com
              </span>
            </a>
          </div>

          <aside
            className="md:col-span-4 md:pt-3 reveal space-y-8 md:space-y-10"
            data-delay="1"
          >
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[var(--color-rule-strong)]" />
                Elsewhere
              </div>
              <a
                href="https://github.com/desanded28"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors inline-flex items-baseline gap-2"
              >
                github.com/desanded28
                <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">↗</span>
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[var(--color-rule-strong)]" />
                Based in
              </div>
              <div className="font-serif text-lg text-[var(--color-ink)]">
                Edinburgh, Scotland
              </div>
              <div className="font-serif italic text-sm text-[var(--color-ink-dim)] mt-0.5">
                Native of Tuscany
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] mb-3 flex items-center gap-3">
                <span className="w-6 h-px bg-[var(--color-rule-strong)]" />
                Response
              </div>
              <div className="font-serif text-lg text-[var(--color-ink)]">
                Within 24 hours, usually.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
