export default function Experience() {
  const experiences = [
    {
      period: "2025 — 2026",
      role: "Youth Innovation Champion & Research Assistant",
      company: "PSI Ethiopia",
      location: "Ethiopia",
      description:
        "Contributed to youth-centered innovation, research methodologies, and digital engagement. Co-designed participatory initiatives, gathered field data, and translated research findings into practical community solutions.",
      achievements: [
        "Led youth innovation sessions and field research gathering community needs.",
        "Synthesized research data into actionable frameworks and digital reporting insights.",
      ],
      skills: ["Research & Analysis", "Youth Innovation", "Data Insights", "Community Engagement"],
    },
    {
      period: "2024",
      role: "Frontend Developer Intern",
      company: "MEMI Trading PLC",
      location: "Ethiopia",
      description:
        "Built responsive web interfaces, implemented modern component structures, and integrated client-side applications with backend endpoints.",
      achievements: [
        "Developed responsive UI components utilizing modern JavaScript and CSS practices.",
        "Collaborated on feature enhancements and improved user interaction flows.",
      ],
      skills: ["Frontend Development", "HTML/CSS", "JavaScript", "UI Implementation"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="max-w-4xl mx-auto w-full group"
            >
              {/* Content Card */}
              <div className="w-full">
                <div className="bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-900/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-bold rounded-xl bg-purple-50 dark:bg-purple-950/60 text-brand-purple dark:text-purple-300 border border-purple-100 dark:border-purple-800/60">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-brand-purple mb-4">
                    {exp.company}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements without bullet dots */}
                  <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
