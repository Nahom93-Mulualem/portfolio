export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "RESTful APIs"],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma"],
    },
    {
      name: "State & Data",
      skills: ["Zustand", "TanStack Query"],
    },
    {
      name: "Mobile",
      skills: ["React Native", "Expo", "Flutter"],
    },
    {
      name: "Auth & Deployment",
      skills: ["NextAuth.js", "Vercel", "Netlify"],
    },
    {
      name: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section id="skills" data-purpose="skills-overview" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Skills
          </h2>
        </div>

        {/* Organized Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-purple-200 dark:hover:border-purple-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
