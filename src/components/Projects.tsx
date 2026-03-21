/* eslint-disable @next/next/no-img-element */

const featured = [
  {
    title: "PROOF",
    tagline: "Social habit accountability — web & mobile",
    description:
      "Upload daily photo proof of completing habits, share with friends, get called out when you skip. Full-stack app with a Next.js web client and React Native mobile app, backed by Supabase with push notifications and cron-driven shame alerts.",
    stack: ["Next.js", "React Native", "Expo", "Supabase", "Prisma", "GSAP", "Resend"],
    highlights: ["Photo verification", "Push notifications", "Cross-platform", "Deployed on Vercel"],
    image: "/proof-preview.png",
    url: "https://proof-rust-three.vercel.app",
  },
  {
    title: "Media Pipeline Monitor",
    tagline: "Real-time media workflow dashboard",
    description:
      "Simulates a media processing pipeline with live asset ingestion, transcoding, tagging, and publishing stages. Features real-time SSE streaming, chaos mode for failure testing, and auto-generated thumbnails. Built for a Red Bull Media House interview.",
    stack: ["FastAPI", "SQLite", "SSE", "Pillow", "Jinja2"],
    highlights: ["Live pipeline", "Chaos mode", "Auto-thumbnails", "SSE streaming"],
    image: null,
    url: "http://localhost:8000",
  },
  {
    title: "Figurya",
    tagline: "Anime figurine search engine across 15 stores",
    description:
      "Search figurines by character, aesthetic, or vibe. Aggregates results from 15 Japanese stores with smart ranking by relevance, price, and seller reliability. Free and open source.",
    stack: ["FastAPI", "BeautifulSoup", "SQLite", "Pydantic", "Jinja2"],
    highlights: ["Vibe-based search", "Price comparison", "15 stores integrated"],
    image: "/figurya-preview.png",
    url: "https://figuryaa.onrender.com",
  },
];

const projects = [
  {
    title: "RAG Chatbot",
    tagline: "PDF question-answering with local LLM",
    description:
      "Upload PDFs, the system chunks and indexes them with semantic embeddings, then answers questions using a local LLM with page-number citations.",
    stack: ["FastAPI", "ChromaDB", "Sentence Transformers", "Ollama", "React"],
    highlights: ["Semantic search", "Source citations", "Fully local"],
    url: null,
  },
  {
    title: "IoT Dashboard",
    tagline: "Real-time industrial sensor monitoring",
    description:
      "WebSocket-streaming dashboard monitoring 8 simulated industrial sensors. Live sparkline cards, alert system with acknowledgement, and anomaly injection.",
    stack: ["FastAPI", "WebSocket", "React", "Recharts", "TypeScript"],
    highlights: ["Live streaming", "Alert system", "8 sensor types"],
    url: null,
  },
  {
    title: "Cloud Microservices",
    tagline: "Production-style microservices architecture",
    description:
      "4-service task management system: API Gateway with rate limiting, User Service with JWT auth, Task Service, and Notification Service. Fully containerized.",
    stack: ["FastAPI", "Docker", "JWT", "SQLite", "React"],
    highlights: ["API Gateway", "JWT auth", "Docker Compose"],
    url: null,
  },
  {
    title: "ContractTracker",
    tagline: "Contract management & PDF analysis",
    description:
      "Upload, parse, and extract metadata from contract PDFs. Organize and track contract status with i18n support.",
    stack: ["Next.js", "Supabase", "pdfjs-dist", "Tailwind CSS"],
    highlights: ["PDF parsing", "Metadata extraction", "i18n"],
    url: "https://contracttracker-web.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <h2 className="text-3xl font-semibold text-white mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-teal-500 mb-4" />
          <p className="text-gray-400 mb-12 max-w-2xl">
            A selection of things I&apos;ve built — from full-stack apps to
            backend systems and applied ML.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-6 mb-8">
          {featured.map((project) => (
            <div
              key={project.title}
              className="fade-up bg-white/[0.04] border border-white/[0.08] rounded-xl overflow-hidden"
            >
              <div className={`grid ${project.image ? "md:grid-cols-2" : "md:grid-cols-1"} gap-0`}>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{project.tagline}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-300 bg-white/[0.06] border border-white/[0.06] px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-teal-400 bg-teal-500/[0.1] px-3 py-1 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-600 hover:bg-teal-500 text-white text-sm px-5 py-2.5 rounded-lg transition-colors w-fit"
                    >
                      View live &rarr;
                    </a>
                  )}
                </div>
                {project.image && (
                  <div className="bg-white/[0.02] border-t md:border-t-0 md:border-l border-white/[0.06] flex items-center justify-center p-6 md:p-8 min-h-[240px]">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="rounded-lg max-h-[320px] w-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-4 stagger-children">
          {projects.map((project) => {
            const Card = (
              <div
                className={`bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 flex flex-col group hover:border-white/[0.14] transition-colors ${project.url ? "cursor-pointer" : ""}`}
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium text-lg">
                      {project.title}
                    </h3>
                    {project.url && (
                      <span className="text-teal-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Visit &rarr;
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{project.tagline}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-400 bg-white/[0.06] px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-teal-400 bg-teal-500/[0.08] px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return project.url ? (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                {Card}
              </a>
            ) : (
              <div key={project.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
