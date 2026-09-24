export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-purpose="site-footer"
      className="bg-[#FAFAFC]/80 dark:bg-[#0B0F17]/80 backdrop-blur-sm border-t border-slate-200/80 dark:border-slate-800/80 py-10 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand and Copyright */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
          <span className="text-lg font-bold font-display text-slate-900 dark:text-white">
            Nahom Mulualem
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear}. Software Engineer
          </span>
        </div>
      </div>
    </footer>
  );
}
