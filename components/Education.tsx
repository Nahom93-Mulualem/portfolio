export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Software Architecture & Design",
    "Database Management Systems",
    "Web Engineering & Systems",
    "Object-Oriented Programming",
    "Operating Systems & Networks",
    "Software Testing & Quality Assurance",
    "AI & Data Fundamentals",
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-[#F4F4F8]/60 dark:bg-[#0E131F]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Visual Academic Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/70 dark:border-slate-800 shadow-sm relative overflow-hidden">
          {/* Subtle decorative accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: University & Degree Info */}
            <div className="lg:col-span-6">
              <h3 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                Mekelle University
              </h3>
              <p className="text-lg font-semibold text-brand-purple mt-1 mb-4">
                Bachelor of Science in Software Engineering (BSc)
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Comprehensive 5-year curriculum integrating rigorous software engineering methodologies, distributed systems, human-computer interaction, and full-stack software development.
              </p>

              {/* Badges: Graduation & National Exit Exam */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="block text-xs uppercase font-bold text-slate-400">
                    Graduation
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    2026
                  </span>
                  <span className="block text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                    Completed with High Standing
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="block text-xs uppercase font-bold text-slate-400">
                    National Exit Exam
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    Passed with Distinction
                  </span>
                  <span className="block text-xs text-brand-purple dark:text-purple-300 font-medium mt-0.5">
                    Certified Competency
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Relevant Coursework */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Relevant Core Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 text-center sm:text-left"
                  >
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
