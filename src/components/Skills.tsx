import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Languages",
    items: [
      "Java",
      "C",
      "C++",
      "C#",
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Recharts",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "FastAPI",
      "Spring Boot",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "SQLite",
      "ChromaDB",
      "Supabase",
    ],
  },
  {
    title: "Tools & Infra",
    items: [
      "Git",
      "Docker",
      "Linux",
      "WebSocket",
      "JWT",
      "REST APIs",
      "Expo",
      "Playwright",
    ],
  },
  {
    title: "Concepts",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Microservices",
      "RAG / Embeddings",
      "Agent Tool-Calling",
      "Memory Management",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="04" title="Skills" subtitle="— Index" />

        <div className="mt-20 md:mt-24 grid gap-y-10">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="reveal grid md:grid-cols-12 gap-x-6 gap-y-4 items-start border-t border-[var(--color-rule-strong)] pt-7 md:pt-8"
              data-delay={i % 4}
            >
              <div className="md:col-span-3 flex items-baseline gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-dim)]">
                <span className="text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{g.title}</span>
              </div>
              <div className="md:col-span-9 font-serif text-xl md:text-[26px] leading-[1.45] text-[var(--color-ink)]">
                {g.items.map((item, j) => (
                  <span key={item}>
                    {item}
                    {j < g.items.length - 1 && (
                      <span className="text-[var(--color-ink-faint)]"> · </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
