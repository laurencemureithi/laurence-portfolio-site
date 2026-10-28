import React from 'react';
import { ShieldCheck, FileCheck, Lock, UserCheck } from 'lucide-react';

export const TrustApproach: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            Standards &amp; Accountability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900">
            Why businesses work with Laurence Magondu.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
            I don’t make exaggerated claims or present anonymous quotes. Here is the verifiable approach and working standards I bring to every engagement.
          </p>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Manufacturing Quality Discipline
              </h3>
              <p className="mt-2.5 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Applying shop-floor quality assurance, Kaizen principles, and root-cause analysis to digital and operational systems so solutions remain robust under daily use.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-[11px] font-mono text-emerald-400">
              Verified background since 2021
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                100% Asset Ownership
              </h3>
              <p className="mt-2.5 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Zero proprietary lock-in. You receive unlocked Excel spreadsheets, vector design source files, clean website code, and full administration credentials.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-[11px] font-mono text-emerald-400">
              Complete source delivery
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Written Milestone Proposals
              </h3>
              <p className="mt-2.5 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Before any work begins, we establish a written scope, itemized budget, deliverables checklist, and milestone payment schedule with no hidden fees.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-[11px] font-mono text-emerald-400">
              Agreed terms upfront
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Documentation &amp; Training
              </h3>
              <p className="mt-2.5 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Tools only help if your team can operate them. Every project includes visual user instructions, standard operating procedures, and personal walkthroughs.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-[11px] font-mono text-emerald-400">
              Long-term self-sufficiency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
