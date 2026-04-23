/* eslint-disable @next/next/no-img-element */
import { SectionHeader } from "./SectionHeader";

const featured = [
  {
    number: "C/01",
    title: "Motor Agents",
    tagline:
      "Three Gemini tool-calling agents for used-car shopping across six brands.",
    body: [
      "Agent 01 extracts specs from a listing, queries an MSRP catalog, applies a depreciation model, and returns a 5-band verdict: STEAL · GOOD · FAIR · OVERPRICED · RIP-OFF.",
      "Agent 02 opens the matching brand's real configurator in headless Chromium and navigates to the spec via a three-tier strategy — visible text, href slugs, then Gemini vision on a grid-annotated screenshot when the DOM is opaque.",
      "Agent 03 crawls multiple sources, scores against Agent 01's math, and persists a ranked top-ten to SQLite.",
    ],
    quote:
      "I got tired of scrolling AutoScout24 every evening, so I built agents to do it for me. Also wanted to learn how agents actually work rather than wrap a chatbot.",
    stack: ["Python", "Gemini 2.5", "Playwright", "Flask · SSE", "SQLite"],
    tags: ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Volkswagen", "Mini"],
    image: "/motor-agents-preview.png",
    live: null,
    github: "https://github.com/desanded28/motor-agents",
  },
  {
    number: "C/02",
    title: "Studio Floria",
    tagline:
      "Bilingual AI receptionist for my family's Tuscan dental practice.",
    body: [
      "Handles appointment booking via both chat widget and voice, routes requests to the correct doctor's Google Calendar based on service type and day of the week, and sends email notifications to reception staff.",
      "Handles two locations and four doctors. Bilingual — Italian and English — with dialect-aware handling for Tuscan patients.",
      "Live in production on floria.it, taking real bookings every week.",
    ],
    quote:
      "My dad's dental practice needed a receptionist. I built one that actually handles two locations and four doctors, in two languages, that never sleeps.",
    stack: ["Flask", "Gemini", "Firestore", "Google Calendar", "Vapi Voice"],
    tags: ["Production", "Bilingual IT / EN", "Chat + Voice"],
    image: null,
    live: "https://floria.it",
    github: null,
  },
  {
    number: "C/03",
    title: "PROOF",
    tagline:
      "Social accountability — miss your daily task, your friends get a shame email.",
    body: [
      "Set daily tasks with time windows. Prove completion with a photo (EXIF stripped server-side with sharp). Miss the window and a cron job detects the failure, resets your streak, and emails your friends about it.",
      "Full-stack: Next.js 16 web client, React Native mobile companion, Supabase for auth + Postgres, Prisma for schema, Resend for shame emails. Custom eye-motion canvas animation for the landing page — cursors become the pupils of the social graph watching you.",
      "Cross-platform. Deployed on Vercel. Public beta at proof-rust-three.vercel.app.",
    ],
    quote:
      "Wanted to build something that actually used social pressure to make you do things. The cron-driven shame-email pipeline was the fun part.",
    stack: ["Next.js 16", "React 19", "React Native", "Supabase", "Prisma", "Resend"],
    tags: ["Full-stack", "Mobile", "Production"],
    image: "/proof-preview.png",
    live: "https://proof-rust-three.vercel.app",
    github: "https://github.com/desanded28/proof",
  },
];

const catalogue = [
  {
    number: "C/04",
    title: "Figurya",
    tagline: "Anime figurine search across 15 Japanese stores.",
    description:
      "Runs 15 async scrapers in parallel (HobbySearch, HLJ, Solaris, TOM, CDJapan, etc.). Parses natural-language vibe queries — 'gothic rem', 'pink miku girly' — to extract colors, aesthetics, and figure scales for ranking. 24h SQLite WAL cache with a background pre-crawler.",
    stack: ["FastAPI", "BeautifulSoup", "httpx", "SQLite", "Jinja2"],
    live: "https://figuryaa.onrender.com",
    github: "https://github.com/desanded28/figurya",
  },
  {
    number: "C/05",
    title: "ContractTracker",
    tagline: "Upload a contract PDF, get structured metadata.",
    description:
      "Parses dates, monetary values, party names, billing cycles. Bilingual — English and Italian documents with Italian date formats and EUR/USD handling. Contract status tracking (active / expiring / expired) with renewal reminders, per-user isolation via Supabase auth.",
    stack: ["Next.js 16", "Supabase", "pdfjs-dist", "Tailwind 4", "TypeScript"],
    live: "https://contracttracker-web.vercel.app",
    github: "https://github.com/desanded28/contracttracker-web",
  },
  {
    number: "C/06",
    title: "RAG Chatbot",
    tagline: "Local PDF question-answering with page citations.",
    description:
      "Upload PDFs, get chunked and embedded with sentence-transformers, indexed into ChromaDB. Ask questions, get answers from a local Ollama model with page-number citations back to the source. No external API calls, no data leaving the machine.",
    stack: ["FastAPI", "ChromaDB", "sentence-transformers", "Ollama", "React"],
    live: null,
    github: "https://github.com/desanded28/rag-chatbot",
  },
  {
    number: "C/07",
    title: "IoT Dashboard",
    tagline: "Real-time smart-home sensor dashboard.",
    description:
      "WebSocket streaming for live sensor data (temperature, humidity, motion, light). Device toggle controls, threshold alerts, time-series charts. One FastAPI process handles both REST for history and WebSocket for live updates.",
    stack: ["FastAPI", "WebSockets", "React", "Recharts", "SQLite"],
    live: null,
    github: "https://github.com/desanded28/iot-dashboard",
  },
  {
    number: "C/08",
    title: "Cloud Microservices",
    tagline: "Task management as 4 independent containerised services.",
    description:
      "API Gateway (rate-limited, auth-validating) fronts a User Service with JWT, a Task Service with CRUD + assignment, and a Notification Service for event-driven alerts. Each service runs in its own Docker container with its own database.",
    stack: ["FastAPI", "Docker", "JWT", "SQLite", "React"],
    live: null,
    github: "https://github.com/desanded28/cloud-microservices",
  },
  {
    number: "C/09",
    title: "Workplace Ops",
    tagline: "Internal dashboard for office operations.",
    description:
      "Desk booking with floor-plan view, meeting room reservations with conflict detection, facility request tracking. Admin panel for managing spaces and viewing usage stats. Raw SQL instead of an ORM — intentionally lightweight.",
    stack: ["FastAPI", "React", "TypeScript", "Tailwind", "raw SQL"],
    live: null,
    github: "https://github.com/desanded28/workplace-ops",
  },
  {
    number: "C/10",
    title: "BMW Swipe",
    tagline: "Tinder-style car finder with real gesture physics.",
    description:
      "Swipe gestures via Framer Motion with proper velocity, acceleration, and snap-back thresholds. Preference tracking infers engine type, body style, and price range over time to surface better matches as you swipe.",
    stack: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    live: null,
    github: "https://github.com/desanded28/bmw-swipe",
  },
  {
    number: "C/11",
    title: "Fraud Detection API",
    tagline: "Real-time transaction scoring against 7 fraud rules.",
    description:
      "Spring Boot backend scores each transaction on velocity, impossible travel, merchant risk, amount anomaly, card-not-present risk, country mismatch, and time-of-day anomaly. React dashboard with Recharts visualises flagged transactions live.",
    stack: ["Java 21", "Spring Boot 3", "H2", "React", "Recharts"],
    live: null,
    github: "https://github.com/desanded28/fraud-detection-api",
  },
];

export function Projects() {
  return (
    <>
      {/* Featured work — 3 big case studies */}
      <section
        id="work"
        className="py-24 md:py-32 px-6 md:px-10 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="02"
            title="Featured work"
            subtitle="— 03 Case studies"
          />

          <div className="mt-20 md:mt-32 space-y-28 md:space-y-40">
            {featured.map((project, i) => (
              <FeaturedCase
                key={project.title}
                project={project}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue — 8 additional projects */}
      <section
        id="catalogue"
        className="py-24 md:py-32 px-6 md:px-10 border-t border-[var(--color-rule)]"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="03"
            title="Catalogue"
            subtitle="— 08 Additional projects"
          />

          <div className="mt-20 md:mt-24 grid md:grid-cols-2 gap-x-14 gap-y-16 md:gap-y-20">
            {catalogue.map((p, i) => (
              <CatalogueCard key={p.title} project={p} delay={i % 4} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedCase({
  project,
  reversed,
}: {
  project: (typeof featured)[number];
  reversed: boolean;
}) {
  return (
    <article className="reveal">
      {/* Top meta row */}
      <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)] pb-6 border-b border-[var(--color-rule)]">
        <div className="text-[var(--color-accent)]">{project.number}</div>
        <div className="hidden sm:block text-right max-w-[70%]">
          {project.tags.join(" · ")}
        </div>
      </div>

      {/* Title + content grid */}
      <div
        className={`grid md:grid-cols-12 gap-8 md:gap-12 mt-10 md:mt-14 items-start ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        <div
          className={`md:col-span-7 md:[direction:ltr]`}
        >
          {project.image ? (
            <div className="overflow-hidden border border-[var(--color-rule)] bg-[var(--color-bg-soft)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto block"
              />
            </div>
          ) : (
            <ProjectPlaceholder
              title={project.title}
              number={project.number}
              tags={project.tags}
            />
          )}
        </div>

        <div className="md:col-span-5 md:[direction:ltr]">
          <h3 className="font-serif italic text-4xl md:text-5xl lg:text-[56px] leading-[1.02] tracking-tight mb-5 text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="font-serif text-xl md:text-[22px] leading-[1.45] text-[var(--color-ink-dim)] mb-8 max-w-[30ch]">
            {project.tagline}
          </p>

          <div className="space-y-4 text-[var(--color-ink-dim)] leading-[1.75] text-[14.5px] max-w-[54ch]">
            {project.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {project.quote && (
            <blockquote className="mt-8 pl-5 border-l-2 border-[var(--color-accent)] font-serif italic text-lg text-[var(--color-ink)] leading-[1.55] max-w-[48ch]">
              &ldquo;{project.quote}&rdquo;
            </blockquote>
          )}

          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)]">
            <span className="w-6 h-px bg-[var(--color-rule-strong)]" />
            Stack
          </div>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-[var(--color-ink)]">
            {project.stack.map((s, i) => (
              <span key={s} className="inline-flex items-center gap-3">
                {s}
                {i < project.stack.length - 1 && (
                  <span className="text-[var(--color-ink-faint)]">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.14em] uppercase">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[var(--color-accent)] hover:text-[var(--color-accent-soft)] transition-colors"
              >
                <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
                Visit live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectPlaceholder({
  title,
  number,
  tags,
}: {
  title: string;
  number: string;
  tags: string[];
}) {
  return (
    <div className="aspect-[16/11] relative bg-[var(--color-bg-soft)] border border-[var(--color-rule)] overflow-hidden">
      {/* Editorial grid pattern — subtle hairlines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "28px 100%",
        }}
      />

      {/* Top callout */}
      <div className="absolute top-6 left-8 right-8 flex items-start justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)]">
        <span>— Case file</span>
        <span className="text-[var(--color-accent)]">{number}</span>
      </div>

      {/* Centered giant title */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-12">
        <h4 className="font-serif italic text-[min(14vw,132px)] leading-[0.88] tracking-tight text-[var(--color-ink)] mb-4">
          {title}
        </h4>
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)]">
          {tags.map((tag, i) => (
            <span key={tag} className="inline-flex items-center gap-2">
              {tag}
              {i < tags.length - 1 && (
                <span className="text-[var(--color-ink-faint)]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CatalogueCard({
  project,
  delay,
}: {
  project: (typeof catalogue)[number];
  delay: number;
}) {
  return (
    <article
      className="reveal group pt-6 border-t border-[var(--color-rule-strong)]"
      data-delay={delay}
    >
      {/* Top meta row */}
      <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.22em] uppercase mb-6">
        <span className="text-[var(--color-accent)]">{project.number}</span>
        <div className="flex items-center gap-4 text-[var(--color-ink-faint)]">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Source ↗
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif italic text-[32px] md:text-[40px] leading-[1.02] tracking-tight mb-3 text-[var(--color-ink)]">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="font-serif text-lg md:text-xl text-[var(--color-ink-dim)] leading-[1.4] mb-5 max-w-[42ch]">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-[14px] leading-[1.7] text-[var(--color-ink-dim)] mb-6 max-w-[54ch]">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-[var(--color-ink)]">
        {project.stack.map((s, i) => (
          <span key={s} className="inline-flex items-center gap-3">
            {s}
            {i < project.stack.length - 1 && (
              <span className="text-[var(--color-ink-faint)]">·</span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}
