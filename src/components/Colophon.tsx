export function Colophon() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-rule-strong)] px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">
          <div className="md:col-span-3 space-y-2">
            <div className="text-[var(--color-accent)]">— Colophon</div>
            <div className="text-[var(--color-ink-dim)]">Set in Instrument Serif</div>
            <div className="text-[var(--color-ink-dim)]">& IBM Plex Sans / Mono</div>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="text-[var(--color-accent)]">— Built with</div>
            <div className="text-[var(--color-ink-dim)]">Next.js 16 · React 19</div>
            <div className="text-[var(--color-ink-dim)]">Tailwind 4 · Lenis</div>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="text-[var(--color-accent)]">— Contents</div>
            <div className="text-[var(--color-ink-dim)]">03 Featured works</div>
            <div className="text-[var(--color-ink-dim)]">08 Additional projects</div>
          </div>
          <div className="md:col-span-3 space-y-2 md:text-right">
            <div className="text-[var(--color-accent)]">— Edition</div>
            <div className="text-[var(--color-ink-dim)]">© Sander Floria · {year}</div>
            <div className="text-[var(--color-ink-dim)] normal-case tracking-normal italic font-serif text-[13px]">
              Handwritten in Edinburgh.
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-rule)] flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">
          <span>End of portfolio</span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-[var(--color-ink-dim)] hover:text-[var(--color-accent)] transition-colors"
          >
            Return to top
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
