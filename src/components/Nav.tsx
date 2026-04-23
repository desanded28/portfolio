"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about", index: "01" },
  { label: "Work", href: "#work", index: "02" },
  { label: "Skills", href: "#skills", index: "04" },
  { label: "Contact", href: "#contact", index: "06" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-14">
        {/* Wordmark */}
        <a
          href="#top"
          className="group flex items-baseline gap-2 select-none"
          aria-label="Home"
        >
          <span className="font-serif italic text-xl text-[var(--color-ink)]">
            Sander Floria
          </span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-ink-dim)] group-hover:text-[var(--color-accent)] transition-colors">
            — portfolio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group inline-flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors"
              >
                <span className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-accent)] transition-colors">
                  {link.index}
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:sanderfloriauni@gmail.com"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="w-6 h-px bg-current" />
            Say hello
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[var(--color-ink)] p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M4 9h16" />
                  <path d="M4 15h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-rule)]">
          <ul className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-3 font-mono text-sm tracking-[0.12em] uppercase text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                >
                  <span className="text-[var(--color-accent)]">{link.index}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-[var(--color-rule)]">
              <a
                href="mailto:sanderfloriauni@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="font-serif italic text-xl text-[var(--color-ink)]"
              >
                sanderfloriauni@gmail.com
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
