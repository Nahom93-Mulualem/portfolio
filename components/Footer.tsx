export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-purpose="site-footer"
      className="bg-[#FAFAFC] dark:bg-[#0B0F17] border-t border-slate-200 dark:border-slate-800 py-10 transition-colors"
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

        {/* Real Profile Links */}
        <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <a
            href="https://github.com/Nahom93-Mulualem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-purple dark:hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nahom-mulualem-24a566386/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-purple dark:hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/Niyatey_02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-purple dark:hover:text-purple-400 transition-colors"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/?text=Hi%20Nahom!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors font-semibold text-emerald-600 dark:text-emerald-400"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
