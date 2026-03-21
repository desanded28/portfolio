"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate the horizontal line expanding from center
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power3.inOut" }
      );

      // Tag line
      tl.fromTo(
        tagRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      // Name — split into characters for stagger
      if (nameRef.current) {
        const text = nameRef.current.innerText;
        nameRef.current.innerHTML = text
          .split("")
          .map((char) =>
            char === " "
              ? '<span class="inline-block">&nbsp;</span>'
              : `<span class="inline-block">${char}</span>`
          )
          .join("");
        const chars = nameRef.current.querySelectorAll("span");
        tl.fromTo(
          chars,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      // Description words
      if (descRef.current) {
        const text = descRef.current.innerText;
        descRef.current.innerHTML = text
          .split(" ")
          .map((word) => `<span class="inline-block mr-[0.3em] opacity-0">${word}</span>`)
          .join("");
        const words = descRef.current.querySelectorAll("span");
        tl.fromTo(
          words,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      // CTA buttons
      tl.fromTo(
        ctaRef.current?.children ?? [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl text-center">
        <div
          ref={lineRef}
          className="w-16 h-px bg-teal-500 mx-auto mb-8 origin-center"
        />
        <div
          ref={tagRef}
          className="mb-4 text-teal-400 text-sm font-medium tracking-widest uppercase opacity-0"
        >
          Computer Science &middot; Edinburgh Napier
        </div>
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6"
        >
          Sander Floria
        </h1>
        <p
          ref={descRef}
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Second-year CS student building full-stack applications and shipping real products. From experiments on the ISS to a social accountability app used by real people — I like solving hard problems.
        </p>
        <div ref={ctaRef} className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-white/[0.12] hover:border-white/[0.24] text-gray-300 hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/[0.1] relative overflow-hidden">
          <div className="w-full h-3 bg-teal-500/40 absolute animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
