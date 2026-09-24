export default function Contact() {
  const contactApps = [
    {
      name: "Email",
      href: "mailto:jurasmulualem@gmail.com",
      hoverBg: "hover:border-red-400 hover:shadow-red-500/20 hover:text-red-500",
      hoverIconColor: "group-hover:text-red-500",
      icon: (
        <svg className="w-5 h-5 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nahom-mulualem-24a566386/",
      hoverBg: "hover:border-[#0A66C2] hover:shadow-blue-500/20 hover:text-[#0A66C2]",
      hoverIconColor: "group-hover:text-[#0A66C2]",
      icon: (
        <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Nahom93-Mulualem",
      hoverBg: "hover:border-slate-800 dark:hover:border-slate-300 hover:shadow-purple-500/20 hover:text-slate-900 dark:hover:text-white",
      hoverIconColor: "group-hover:text-slate-900 dark:group-hover:text-white",
      icon: (
        <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/Niyatey_02",
      hoverBg: "hover:border-[#229ED9] hover:shadow-sky-500/20 hover:text-[#229ED9]",
      hoverIconColor: "group-hover:text-[#229ED9]",
      icon: (
        <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.874-1.028 4.793-1.455 6.837-.18.864-.528 1.153-.865 1.182-.733.064-1.289-.488-2.001-.954-1.115-.731-1.745-1.186-2.829-1.9-1.252-.825-.44-1.279.273-2.021.187-.194 3.432-3.146 3.495-3.415.008-.034.015-.162-.061-.23-.076-.068-.188-.045-.27-.026-.115.026-1.95 1.24-5.503 3.639-.521.358-.992.533-1.414.524-.466-.01-1.362-.264-2.029-.481-.818-.266-1.47-.407-1.413-.859.03-.235.353-.476.969-.723 3.799-1.654 6.334-2.744 7.607-3.272 3.621-1.503 4.373-1.764 4.864-1.773.108-.002.35.025.507.153.132.108.169.255.183.359.014.103.029.324.017.5z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/?text=Hi%20Nahom,%20I'd%20like%20to%20discuss%20an%20opportunity!",
      hoverBg: "hover:border-[#25D366] hover:shadow-emerald-500/20 hover:text-[#25D366]",
      hoverIconColor: "group-hover:text-[#25D366]",
      icon: (
        <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.134.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.928-2.238-.244-.59-.492-.51-.676-.519-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.301-1.054 1.03-1.054 2.513s1.079 2.913 1.23 3.114c.15.2 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.721.23 1.378.198 1.9.12.58-.088 1.78-.727 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.125-.276-.2-.577-.35zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.408A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.32-1.232l-.31-.184-2.956.837.842-2.88-.202-.32A8.165 8.165 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.521 0 8.2 3.678 8.2 8.2 0 4.522-3.679 8.2-8.2 8.2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      data-purpose="contact-cta"
      className="py-20 md:py-28 bg-white/60 dark:bg-[#0B0F17]/60 backdrop-blur-sm border-t border-slate-100/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header (Let's Connect removed per request) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight mb-4">
          LET&apos;S BUILD SOMETHING
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl max-w-xl mx-auto mb-10">
          Have an opportunity, project, or idea?
        </p>

        {/* Compact, Minimalist Distinctive Icons with Hover Animation */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 max-w-md mx-auto">
          {contactApps.map((app) => (
            <a
              key={app.name}
              href={app.href}
              target={app.href.startsWith("http") ? "_blank" : undefined}
              rel={app.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`Open ${app.name}`}
              title={app.name}
              className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-300 ${app.hoverBg} transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:shadow-lg cursor-pointer`}
            >
              <div className={`transition-transform duration-300 ${app.hoverIconColor}`}>
                {app.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
