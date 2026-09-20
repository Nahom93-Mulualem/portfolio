"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="site-header"
      className="w-full bg-[#FAFAFC]/90 dark:bg-[#0B0F17]/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="brand-logo"
          className="group flex items-center space-x-2"
        >
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display group-hover:text-brand-purple transition-colors">
            Nahom Mulualem
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-slate-600 dark:text-slate-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-purple dark:hover:text-purple-400 transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-purple hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle, Chat Button, Mobile Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Animated Light/Dark Mode Toggle */}
          <ThemeToggle />

          {/* Quick Contact / Chat Button */}
          <a
            href="#contact"
            id="header-chat-btn"
            aria-label="Contact Nahom Mulualem"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-purple dark:hover:bg-brand-purple dark:hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-indigo-500/25 hover:scale-105"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3C6.477 3 2 6.94 2 11.8c0 2.278.966 4.35 2.585 5.92-.375 1.554-1.282 3.193-1.328 3.277a.5.5 0 0 0 .54.72c2.052-.3 3.906-1.077 5.166-1.782.97.29 2.002.445 3.037.445 5.523 0 10-3.94 10-8.8S17.523 3 12 3zm-4.5 9.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0E131F]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-purple-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full justify-center items-center py-2.5 px-4 rounded-xl bg-brand-purple text-white font-semibold text-sm shadow-md hover:bg-brand-purple-dark transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
