import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
  onDiscussProject: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onDiscussProject,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0b0f17]/90 dark:bg-[#0b0f17]/90 light-theme:bg-white/95 backdrop-blur-md border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-md shadow-black/10'
          : 'bg-[#0b0f17]/70 dark:bg-[#0b0f17]/70 light-theme:bg-white/80 backdrop-blur-sm border-white/5 dark:border-white/5 light-theme:border-slate-200/50'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'body')}
          className="text-lg font-bold tracking-tight text-white dark:text-white light-theme:text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          <span className="font-display">{PERSONAL_INFO.fullName}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'work' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Work
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'services' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'about' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'pricing' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Pricing
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, '#process')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'process' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            How I Work
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, '#faq')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'faq' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'contact' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: CTA & Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 dark:text-slate-300 light-theme:text-slate-700 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light-theme:hover:bg-slate-200 border border-white/10 dark:border-white/10 light-theme:border-slate-300 transition-all cursor-pointer"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
          </button>

          <button
            onClick={onDiscussProject}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 rounded-xl shadow-sm shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 dark:text-slate-300 light-theme:text-slate-700 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 border border-white/10 dark:border-white/10 light-theme:border-slate-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-5 bg-[#0b0f17] dark:bg-[#0b0f17] light-theme:bg-white border-b border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-2xl flex flex-col gap-3.5 animate-in fade-in duration-150">
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            Work &amp; Case Studies
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            Services (Operations &amp; Design)
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            About My Background
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            Pricing &amp; Packages
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, '#process')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            How I Work
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, '#faq')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            Frequently Asked Questions
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-base font-medium text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-emerald-400"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onDiscussProject();
            }}
            className="mt-2 w-full py-3 px-4 text-center font-semibold text-xs uppercase tracking-wider text-slate-950 bg-emerald-400 rounded-xl"
          >
            Discuss a Project
          </button>
        </div>
      )}
    </header>
  );
};
