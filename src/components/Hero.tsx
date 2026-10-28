import React from 'react';
import { ArrowDown, MessageSquare, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeroProps {
  onViewWork: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onDiscussProject }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 ambient-glow pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Positioning & Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Professional Name Label */}
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              <span>{PERSONAL_INFO.fullName}</span>
              <span className="text-white/20 dark:text-white/20 light-theme:text-slate-400">·</span>
              <span>Operations, Data &amp; Digital</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-[1.1] text-balance">
              Business Systems, Automation and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Digital Experiences
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.supportingStatement}
            </p>

            {/* Secondary Clarification Note */}
            <p className="mt-3 text-sm text-slate-400 dark:text-slate-400 light-theme:text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.secondaryStatement}
            </p>

            {/* Clear Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onDiscussProject}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white dark:text-white light-theme:text-slate-800 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light-theme:hover:bg-slate-200 border border-white/15 dark:border-white/15 light-theme:border-slate-300 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Discuss a Project</span>
              </button>
            </div>

            {/* Operational Foundations */}
            <div className="mt-10 pt-6 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Manufacturing operations experience since 2021</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Kaizen, Lean &amp; process standardization</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Nairobi, Kenya · Local &amp; remote delivery</span>
              </span>
            </div>
          </div>

          {/* Right Column: Real Portrait of Laurence Magondu */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[400px] w-full">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 dark:border-white/15 light-theme:border-slate-300 bg-[#111827] shadow-2xl">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Portrait of Laurence Magondu, Business Systems and Digital Specialist"
                  className="w-full h-[440px] object-cover object-center filter contrast-[1.03] transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'images/mur.jpg';
                    }
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl backdrop-blur-md bg-black/50 border border-white/10">
                  <div className="text-sm font-bold text-white font-display">{PERSONAL_INFO.fullName}</div>
                  <div className="text-xs text-emerald-300 mt-0.5">
                    Business Systems · Automation · Digital Presence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Competency */}
        <div className="mt-16 pt-10 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                01. Operational Thinking
              </div>
              <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                Operations &amp; Process Rigor
              </div>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Experience in manufacturing environments since 2021: root cause analysis, SOPs, Kaizen improvements, downtime tracking, and shop-floor workflow discipline.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                02. Data &amp; Automation
              </div>
              <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                Excel, Reporting &amp; Dashboards
              </div>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Automating repetitive data tasks, building operational dashboards, reconciling discrepancy errors, and transforming raw logs into clear management summaries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                03. Creative &amp; Digital
              </div>
              <div className="text-base font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                Websites &amp; Brand Systems
              </div>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Responsive business websites, clean e-commerce platforms, logo design, company profiles, and press-ready print materials through Bluprint and custom builds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
