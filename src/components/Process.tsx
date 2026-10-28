import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolio';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
            Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            How I work: structured, transparent, and outcome-led.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
            Every engagement follows a six-stage discipline to ensure requirements, deliverables, timelines, and payment milestones are agreed before work begins.
          </p>
        </div>

        {/* Dynamic Stepped Process Flow */}
        <div className="mt-14 space-y-4">
          {WORK_PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-md hover:border-[#a3e635]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Step Number & Headline */}
              <div className="md:col-span-4 flex items-start gap-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] font-mono shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 dark:text-slate-400 light-theme:text-slate-500 mt-1">
                    {step.summary}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                {step.description}
              </div>

              {/* Deliverable Pill */}
              <div className="md:col-span-3 flex md:justify-end">
                <div className="p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 flex items-start gap-2 w-full md:w-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                  <span className="leading-snug">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Agreement Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#0c1424] via-[#111c34] to-[#0c1424] dark:from-[#0c1424] dark:via-[#111c34] dark:to-[#0c1424] light-theme:from-emerald-50 light-theme:via-slate-50 light-theme:to-slate-50 border border-[#a3e635]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white dark:text-white light-theme:text-slate-900 font-display">
                No Financial Surprises
              </div>
              <div className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 mt-0.5">
                Every project is anchored in clear milestones: initial deposit to begin, working progress reviews, and final payment upon client verification and full source delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
