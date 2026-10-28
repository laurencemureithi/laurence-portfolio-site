import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 bg-[#070b12] dark:bg-[#070b12] light-theme:bg-slate-50 text-slate-400 dark:text-slate-400 light-theme:text-slate-600 text-xs">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Scope */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
            {PERSONAL_INFO.fullName}
          </span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>{PERSONAL_INFO.headline}</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            Work
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, '#process')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            How I Work
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, '#faq')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 light-theme:bg-slate-200 light-theme:hover:bg-slate-300 text-slate-300 dark:text-slate-300 light-theme:text-slate-700 transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
