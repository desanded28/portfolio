export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-28 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Publication-style metadata row */}
        <div className="flex items-start justify-between mb-14 md:mb-20 font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)]">
          <div className="space-y-1">
            <div className="text-[var(--color-ink)]">Portfolio</div>
            <div>Edition · 04 / 2026</div>
          </div>
          <div className="text-right space-y-1">
            <div className="text-[var(--color-ink)]">Edinburgh</div>
            <div>56.4620° N · 3.1870° W</div>
          </div>
        </div>

        {/* Main name — offset editorial layout */}
        <h1 className="font-serif leading-[0.9] tracking-[-0.02em] text-[var(--color-ink)]">
          <span className="hero-mask">
            <span
              className="hero-letter block text-[20vw] sm:text-[17vw] lg:text-[14vw] xl:text-[12rem]"
              style={{ animationDelay: "0.15s" }}
            >
              Sander
            </span>
          </span>
          <span className="hero-mask pl-[10vw] md:pl-[22vw] lg:pl-[28vw]">
            <span
              className="hero-letter block italic text-[20vw] sm:text-[17vw] lg:text-[14vw] xl:text-[12rem]"
              style={{ animationDelay: "0.32s" }}
            >
              Floria<span className="text-[var(--color-accent)] not-italic">.</span>
            </span>
          </span>
        </h1>

        {/* Animated drawn-in rule */}
        <div className="mt-14 md:mt-20">
          <div className="h-px bg-[var(--color-rule-strong)] rule-draw" />
        </div>

        {/* Pullquote + status grid */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 lg:gap-24 items-start">
          <p className="font-serif text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-[1.35] max-w-[32ch] text-[var(--color-ink)] reveal">
            Computer Science student in Edinburgh making software that{" "}
            <em className="text-[var(--color-accent)]">handles real work</em> —
            from experiments on the International Space Station to AI agents
            that shop used cars across six brands.
          </p>

          <aside className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink-dim)] space-y-5 reveal" data-delay="1">
            <div className="flex flex-col border-l border-[var(--color-accent)] pl-4">
              <span className="text-[var(--color-ink)]">Status</span>
              <span className="mt-1">Placement year 2026 / 27</span>
            </div>
            <div className="flex flex-col border-l border-[var(--color-rule-strong)] pl-4">
              <span className="text-[var(--color-ink)]">Open to</span>
              <span className="mt-1">Germany</span>
              <span>Austria</span>
              <span>United Kingdom</span>
            </div>
          </aside>
        </div>

        {/* CTAs */}
        <div className="mt-16 md:mt-24 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] tracking-[0.14em] uppercase reveal" data-delay="2">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
            <span>See the work</span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors"
          >
            <span>Get in touch</span>
            <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
