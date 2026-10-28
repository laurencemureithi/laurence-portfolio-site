import React from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Layers, BarChart3, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Ambient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] ambient-navy-glow pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Layered Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Impact */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Identity Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-4">
              <span>{PERSONAL_INFO.fullName}</span>
              <span className="text-white/20 dark:text-white/20 light-theme:text-slate-400">·</span>
              <span className="text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
                Operations · Data · Tech · Design
              </span>
            </div>

            {/* Memorable Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-950 leading-[1.08] text-balance">
              “I turn business problems into{' '}
              <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-emerald-400 to-teal-300">
                better systems, smarter operations,
              </span>{' '}
              and digital experiences that work.”
            </h1>

            {/* Supporting Explanation */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed max-w-2xl font-normal">
              A practical, multidisciplinary professional helping companies eliminate operational friction, turn messy spreadsheets into executive dashboards, and launch credible digital platforms that attract real clients.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white dark:text-white light-theme:text-slate-800 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light-theme:hover:bg-slate-200 border border-white/15 dark:border-white/15 light-theme:border-slate-300 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#a3e635]" />
              </button>
            </div>

            {/* Verified Foundation Markers */}
            <div className="mt-10 pt-6 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Experience</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Since 2021</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Methodology</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Kaizen &amp; Lean</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Analytics</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Excel &amp; Python</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Location</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Composition with Technical Motif */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[420px] w-full">
              {/* Geometric Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#a3e635] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#a3e635] z-20 pointer-events-none" />

              {/* Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#a3e635]/20 via-emerald-500/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 dark:border-white/15 light-theme:border-slate-300 bg-[#0c1424] shadow-2xl">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Portrait of Laurence Magondu"
                  className="w-full h-[450px] object-cover object-center filter contrast-[1.03] transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'images/mur.jpg';
                    }
                  }}
                />

                {/* Subdued Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/90 via-transparent to-transparent pointer-events-none" />

                {/* Technical System Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white font-display">{PERSONAL_INFO.fullName}</div>
                    <div className="text-xs text-[#a3e635] mt-0.5">
                      Business Systems · Data · Digital
                    </div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#a3e635] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Interconnected Disciplines */}
        <div className="mt-16 pt-10 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                  01. Operations
                </div>
                <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                  Continuous Improvement
                </div>
                <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  Lean, Kaizen, root-cause analysis (5-Whys), process standardization, and SOP documentation.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] mb-3">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                  02. Data &amp; Systems
                </div>
                <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                  Reporting &amp; Dashboards
                </div>
                <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  Advanced Excel, Python data routines, machine downtime modeling, and reconciliation audits.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                  03. Technology
                </div>
                <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                  Websites &amp; Automation
                </div>
                <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  Responsive React/web platforms, e-commerce stores, and digital tools built through Opsloom.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                  04. Creative Design
                </div>
                <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                  Brand Identity &amp; Print
                </div>
                <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  Logos, marketing collateral, brand guidelines, and press-ready print materials through Bluprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
