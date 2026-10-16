type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "ElectroShop: Admin panel",
    description:
      "Elektron do'kon uchun admin panel. Brands, Categories, Banners va Customers bo'limlarida to'liq CRUD, jadvallar va modal oynalar. REST API bilan ishlaydi.",
    tech: ["React", "TanStack Query", "axios", "Ant Design", "Tailwind CSS"],
    github: "https://github.com/lola66999?tab=projects",
    live: "",
  },
  {
    title: "MyShop: Online do'kon",
    description:
      "Next.js App Router asosida yaratilgan online magazin interfeysi: Navbar, root layout va Home sahifa. Responsive dizayn.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/lola66999?tab=projects",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="text-3xl font-bold text-white">
        Loyihalar<span className="text-pink-400">.</span>
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-slate-400">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {(project.github || project.live) && (
              <div className="mt-5 flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition hover:text-white"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 transition hover:text-pink-300"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}