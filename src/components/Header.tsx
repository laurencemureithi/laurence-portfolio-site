import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
  onStartProject: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onStartProject,
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
    if (targetId === '#' || targetId === 'body') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#060b14]/92 dark:bg-[#060b14]/92 light-theme:bg-white/95 backdrop-blur-md border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-md shadow-black/20'
          : 'bg-[#060b14]/75 dark:bg-[#060b14]/75 light-theme:bg-white/80 backdrop-blur-sm border-white/5 dark:border-white/5 light-theme:border-slate-200/50'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-18 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'body')}
          className="text-lg font-bold tracking-tight text-white dark:text-white light-theme:text-slate-950 whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)] group-hover:scale-125 transition-transform" />
          <span className="font-display">{PERSONAL_INFO.fullName}</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'about' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'services' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            Capabilities
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'work' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            Selected Work
          </a>
          <a
            href="#operations"
            onClick={(e) => handleNavClick(e, '#operations')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'operations' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            Operations &amp; Data
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'pricing' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            Pricing (KES)
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, '#process')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'process' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 ${
              activeSection === 'contact' ? 'text-[#a3e635] font-bold' : ''
            }`}
          >
            Contact
          </a>
        </nav>

        {/* CTA & Theme Controls */}
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
            onClick={onStartProject}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 rounded-xl shadow-sm shadow-lime-500/20 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 dark:text-slate-300 light-theme:text-slate-700 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 border border-white/10 dark:border-white/10 light-theme:border-slate-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-6 py-5 bg-[#060b14] dark:bg-[#060b14] light-theme:bg-white border-b border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-2xl flex flex-col gap-3 animate-in fade-in duration-150">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            About Background &amp; Training
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            Capabilities (4 Categories)
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            Selected Work (Opsloom, Bluprint, NexusPulse)
          </a>
          <a
            href="#operations"
            onClick={(e) => handleNavClick(e, '#operations')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            Operations &amp; Data Case Studies
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            Pricing &amp; Rates in KES
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, '#process')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            How I Work (6 Steps)
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-sm font-semibold text-slate-200 dark:text-slate-200 light-theme:text-slate-800 py-1 hover:text-[#a3e635]"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartProject();
            }}
            className="mt-2 w-full py-3 px-4 text-center font-bold text-xs uppercase tracking-wider text-slate-950 bg-[#a3e635] rounded-xl"
          >
            Start a Project
          </button>
        </div>
      )}
    </header>
  );
};
