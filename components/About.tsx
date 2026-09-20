export default function About() {
  const whatIDo = [
    {
      title: "Full-stack Web Development",
      description:
        "Building end-to-end digital solutions connecting performant frontends with robust backend architectures.",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting responsive, pixel-perfect, and accessible user interfaces using React, Next.js, and modern CSS systems.",
    },
    {
      title: "Backend / API Development",
      description:
        "Designing scalable RESTful APIs, business logic layers, and microservices with Node.js, Express, and FastAPI.",
    },
    {
      title: "Database-Driven Applications",
      description:
        "Architecting reliable relational and document databases with PostgreSQL, MongoDB, Prisma, and Firebase.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            About
          </h2>
        </div>

        {/* What I Do Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {whatIDo.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-purple-200 dark:hover:border-purple-900/60 transition-all duration-300"
            >
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

