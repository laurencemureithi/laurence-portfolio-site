import React from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Layers, BarChart3, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Ambient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] ambient-glow pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Layered Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic & Positioning Impact */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-xs font-bold uppercase tracking-wider text-[#a3e635] w-fit mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
              <span>Systems · Automation · Design</span>
            </div>

            {/* Main Required Professional Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-950 leading-[1.08] text-balance">
              Business Systems, Automation and{' '}
              <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-emerald-400 to-teal-300">
                Digital Experiences
              </span>
            </h1>

            {/* Multidisciplinary Philosophy & Quote */}
            <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/10 dark:border-white/10 light-theme:border-slate-200">
              <p className="text-sm sm:text-base font-semibold text-white dark:text-white light-theme:text-slate-900 leading-snug">
                “I turn business problems into better systems, smarter operations, and digital experiences that work.”
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                I help businesses improve operations, make better use of their data, and build stronger digital experiences through practical technology, process improvement, and thoughtful design.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 rounded-xl shadow-lg shadow-lime-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white dark:text-white light-theme:text-slate-800 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light-theme:hover:bg-slate-200 border border-white/15 dark:border-white/15 light-theme:border-slate-300 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#a3e635]" />
              </button>

              <a
                href="#operations"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light-theme:text-slate-700 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900 transition-colors"
              >
                <span>ROI Simulator →</span>
              </a>
            </div>

            {/* Quick Credentials Strip */}
            <div className="mt-8 pt-5 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Operations</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Continuous Improvement</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Framework</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Kaizen &amp; Lean SOPs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Analytics</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Python &amp; Advanced Excel</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Location</span>
                <span className="font-semibold text-white dark:text-white light-theme:text-slate-900 mt-0.5">Nairobi, Kenya (Global)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[420px] w-full">
              {/* Geometric Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 w-7 h-7 border-t-2 border-l-2 border-[#a3e635] z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-2 border-r-2 border-[#a3e635] z-20 pointer-events-none" />

              {/* Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#a3e635]/25 via-emerald-500/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 dark:border-white/15 light-theme:border-slate-300 bg-[#0c1424] shadow-2xl">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Portrait of Laurence Magondu"
                  className="w-full h-[460px] object-cover object-center filter contrast-[1.03] transition-transform duration-500 group-hover:scale-102"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'images/mur.jpg';
                    }
                  }}
                />

                {/* Subdued Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/95 via-transparent to-transparent pointer-events-none" />

                {/* Technical System Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-black/75 border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white font-display flex items-center gap-2">
                      <span>{PERSONAL_INFO.fullName}</span>
                      <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-[#a3e635]/20 text-[#a3e635]">
                        VERIFIED
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      Operations · Automation · Digital Systems
                    </div>
                    <div className="text-[11px] text-[#a3e635] font-mono mt-0.5">
                      ● Active since 2021
                    </div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.9)] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width KPI Panel Strip (From Reference Design) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 dark:divide-white/10 light-theme:divide-slate-200">
            <div className="pt-2 sm:pt-0 sm:px-4 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] font-mono tracking-tight">
                2021+
              </div>
              <div className="text-xs font-bold text-white dark:text-white light-theme:text-slate-900 mt-1">
                Operational Industry Experience
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-400 light-theme:text-slate-500 mt-0.5">
                Manufacturing, Quality &amp; IT Support
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] font-mono tracking-tight">
                100%
              </div>
              <div className="text-xs font-bold text-white dark:text-white light-theme:text-slate-900 mt-1">
                Asset Ownership Sovereignty
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-400 light-theme:text-slate-500 mt-0.5">
                Full code &amp; source vector transfer
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] font-mono tracking-tight">
                Lean
              </div>
              <div className="text-xs font-bold text-white dark:text-white light-theme:text-slate-900 mt-1">
                Continuous Process Mapping
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-400 light-theme:text-slate-500 mt-0.5">
                Kaizen, 5S &amp; Root Cause (5-Whys)
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] font-mono tracking-tight">
                Vector
              </div>
              <div className="text-xs font-bold text-white dark:text-white light-theme:text-slate-900 mt-1">
                Print-Ready Creative Assets
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-400 light-theme:text-slate-500 mt-0.5">
                CMYK prepress &amp; mathematical marks
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
