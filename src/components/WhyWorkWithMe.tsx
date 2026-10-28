import React from 'react';
import { Target, Cpu, CheckCheck, Lightbulb, Wallet, ArrowUpRight } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolio';

interface WhyWorkWithMeProps {
  onStartProject: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onStartProject }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="w-5 h-5" />;
      case 1:
        return <Cpu className="w-5 h-5" />;
      case 2:
        return <CheckCheck className="w-5 h-5" />;
      case 3:
        return <Lightbulb className="w-5 h-5" />;
      case 4:
        return <Wallet className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
            Professional Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            Why work with Laurence Magondu?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
            Real differentiators grounded in manufacturing discipline, analytical thinking, and creative execution—without inflated claims or empty buzzwords.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-sm hover:border-[#a3e635]/30 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] mb-4">
                  {getIcon(idx)}
                </div>
                <h3 className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-[11px] font-mono text-[#a3e635]">
                ● Verifiable Practice
              </div>
            </div>
          ))}

          {/* Quick Action Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0c1424] via-[#111c34] to-[#0c1424] dark:from-[#0c1424] dark:via-[#111c34] dark:to-[#0c1424] light-theme:from-emerald-50 light-theme:via-white light-theme:to-white border border-[#a3e635]/30 flex flex-col justify-between shadow-md">
            <div>
              <div className="text-xs font-mono font-bold text-[#a3e635] uppercase tracking-wider mb-2">
                Get in Touch
              </div>
              <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Ready to Discuss Your Business Challenge?
              </h3>
              <p className="mt-3 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Whether you need a fresh brand identity, an automated Excel reporting pipeline, or a high-performance business website, let’s talk.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
              <button
                type="button"
                onClick={onStartProject}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm shadow-lime-500/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
