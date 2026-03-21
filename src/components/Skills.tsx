const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C", "C++", "C#", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "GSAP", "Framer Motion", "Recharts"],
  },
  {
    title: "Backend & Data",
    items: ["FastAPI", "Spring Boot", "Node.js", "Prisma", "PostgreSQL", "SQLite", "ChromaDB", "Supabase"],
  },
  {
    title: "Tools & Infra",
    items: ["Git", "Docker", "Linux", "WebSocket", "JWT", "REST APIs", "Expo"],
  },
  {
    title: "Concepts",
    items: ["Data Structures", "Algorithms", "OOP", "Microservices", "ECS Architecture", "RAG / Embeddings", "Memory Management"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <h2 className="text-3xl font-semibold text-white mb-2">Skills</h2>
          <div className="w-12 h-0.5 bg-teal-500 mb-12" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6"
            >
              <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-gray-300 bg-white/[0.06] px-3 py-1.5 rounded-lg"
                  >
                    {item}
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
