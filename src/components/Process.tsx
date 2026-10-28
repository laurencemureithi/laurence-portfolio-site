import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolio';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            How I Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            A structured, predictable process that builds confidence.
          </h2>
          <p className="mt-4 text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
            Project requirements, exact deliverables, delivery timelines, and payment milestones are agreed upon in writing before work begins. No guesswork, no hidden extras.
          </p>
        </div>

        {/* 6 Work Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-sm hover:border-emerald-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-mono">
                  <span className="text-2xl font-extrabold text-emerald-400">{step.number}</span>
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider">Step</span>
                </div>

                <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-400 mt-1">
                  {step.summary}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300 dark:text-slate-300 light-theme:text-slate-800">Outcome: </strong>
                  {step.keyDeliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Agreement Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#111827] to-[#111827] dark:from-emerald-950/30 dark:via-[#111827] dark:to-[#111827] light-theme:from-emerald-50 light-theme:via-slate-50 light-theme:to-slate-50 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                Clear Terms &amp; Complete Source Handoff
              </div>
              <div className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 mt-0.5">
                Every project concludes with full delivery of source assets (unlocked spreadsheets, vector files, and code) plus documentation for long-term client independence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
