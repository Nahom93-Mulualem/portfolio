"use client";

export default function Hero() {
  return (
    <section
      id="home"
      data-purpose="hero-section"
      className="py-16 md:py-24 lg:py-32 overflow-hidden relative"
    >
      {/* Background subtle ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Bold Hero Title: in one line and aligned to center */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight mb-6 sm:whitespace-nowrap">
            <span className="text-brand-purple">Full-stack</span> and mobile developer
          </h1>

          {/* New Focused Description */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
            Building modern, scalable web applications with TypeScript, React, Next.js, and NestJS. Creating seamless digital experiences across frontend and backend, with a growing focus on AI-powered solutions, automation, and intelligent applications.
          </p>

          {/* Call to Actions (Centered) */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              id="hero-contact-btn"
              className="btn-hover px-7 py-3.5 bg-slate-900 dark:bg-brand-purple text-white text-sm font-semibold rounded-xl shadow-lg shadow-slate-900/10 dark:shadow-purple-900/30 hover:bg-brand-purple dark:hover:bg-brand-purple-dark transition-all duration-300 flex items-center gap-2"
            >
              <span>Get In Touch</span>
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#projects"
              id="hero-projects-btn"
              className="btn-hover px-7 py-3.5 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm font-semibold rounded-xl border border-slate-200/60 dark:border-slate-700 transition-all duration-300"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
