interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ index, title, subtitle }: Props) {
  return (
    <div className="reveal">
      <div className="flex items-start gap-6 md:gap-10">
        <div className="font-mono text-[10px] md:text-xs tracking-[0.22em] uppercase text-[var(--color-accent)] mt-4 md:mt-5 shrink-0 select-none">
          ({index})
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between flex-wrap gap-x-6 gap-y-2">
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)]">
                {subtitle}
              </div>
            )}
          </div>
          <div className="mt-7 h-px bg-[var(--color-rule-strong)]" />
        </div>
      </div>
    </div>
  );
}
