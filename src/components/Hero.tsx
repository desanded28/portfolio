"use client";

const NAME_CHARS = "Sander Floria".split("");
const DESC_WORDS = "Second-year CS student building full-stack applications and shipping real products. From experiments on the ISS to a social accountability app used by real people — I like solving hard problems.".split(" ");

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl text-center">
        <div
          className="w-16 h-px bg-teal-500 mx-auto mb-8 origin-center animate-[scale-x_0.8s_0.3s_both]"
          style={{ animationName: "scale-x" }}
        />
        <div className="mb-4 text-teal-400 text-sm font-medium tracking-widest uppercase animate-[fade-up_0.6s_0.5s_both]">
          Computer Science &middot; Edinburgh Napier
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
          {NAME_CHARS.map((char, i) => (
            <span
              key={i}
              className="inline-block animate-[fade-up-char_0.5s_both]"
              style={{ animationDelay: `${0.7 + i * 0.03}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
          {DESC_WORDS.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.3em] animate-[fade-up-word_0.4s_both]"
              style={{ animationDelay: `${1.1 + i * 0.02}s` }}
            >
              {word}
            </span>
          ))}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg animate-[fade-up-btn_0.5s_1.8s_both]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-white/[0.12] hover:border-white/[0.24] text-gray-300 hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors animate-[fade-up-btn_0.5s_1.9s_both]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/[0.1] relative overflow-hidden">
          <div className="w-full h-3 bg-teal-500/40 absolute animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
