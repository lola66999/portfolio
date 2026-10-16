const groups = [
  { title: "Asosiy", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { title: "Frameworklar", items: ["React", "Next.js"] },
  { title: "Stil", items: ["Tailwind CSS", "SASS", "Ant Design"] },
  { title: "Ma'lumotlar bilan ishlash", items: ["TanStack Query", "axios", "REST API"] },
  { title: "Asboblar", items: ["Git", "GitHub", "AI vositalari"] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-900/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-white">
          Ko'nikmalar<span className="text-pink-400">.</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/50 hover:bg-white/10"
            >
              <h3 className="font-semibold text-violet-300">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-200"
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