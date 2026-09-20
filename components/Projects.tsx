export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Class Album",
      category: "Digital Yearbook & Community Platform",
      description:
        "A collaborative digital yearbook and social community platform allowing graduating classes and student cohorts to preserve memories, share profiles, celebrate milestones, and stay connected.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/Nahom93-Mulualem/class_album",
      gradient: "from-purple-700 via-indigo-700 to-brand-purple",
    },
    {
      id: "02",
      title: "Snabb",
      category: "Food Delivery Platform",
      description:
        "An end-to-end food delivery web application featuring localized restaurant discovery, interactive dynamic menus, cart management, ordering workflows, and real-time status updates.",
      tags: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/Nahom93-Mulualem/snabb-delivery",
      gradient: "from-amber-600 via-orange-600 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F4F4F8]/60 dark:bg-[#0E131F]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Projects
            </h2>
          </div>
          <div>
            <a
              href="https://github.com/Nahom93-Mulualem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple dark:text-purple-400 hover:text-brand-purple-dark transition-colors group"
            >
              <span>View all on GitHub</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Header Banner Preview with project number */}
                <div
                  className={`h-48 w-full bg-gradient-to-br ${project.gradient} p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-black/20 backdrop-blur-md text-white/90">
                      {project.id}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                      Full-Stack
                    </span>
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold font-display drop-shadow-sm">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links (View Code only, Live Preview removed) */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-purple-400 flex items-center gap-2 transition-colors px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200/60 dark:border-slate-700/60"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
