import React from 'react';
import { Cpu, CheckCircle2, HelpCircle } from 'lucide-react';
import { OPERATIONS_CASE_STUDIES, OperationsCaseStudy } from '../data/portfolio';

export const OperationsCaseStudies: React.FC = () => {
  return (
    <section id="operations" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Operations &amp; Data Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            How I solve real manufacturing, workflow, and data problems.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
            Below are structured case-study themes reflecting my hands-on experience in manufacturing operations since 2021. They demonstrate the problem-solving methodology, data analysis, and process standardization I bring to complex operational bottlenecks.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {OPERATIONS_CASE_STUDIES.map((study: OperationsCaseStudy) => (
            <div
              key={study.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-lg hover:border-[#a3e635]/40 transition-all"
            >
              <div>
                {/* Theme Tag */}
                <div className="text-xs font-mono font-bold text-[#a3e635] uppercase tracking-wider mb-2">
                  {study.theme}
                </div>

                <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                  {study.title}
                </h3>

                {/* The Problem */}
                <div className="mt-4 p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-50 border border-white/5 dark:border-white/5 light-theme:border-slate-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Operational Bottleneck
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Methodology */}
                <div className="mt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2">
                    Methodology Applied
                  </div>
                  <ul className="space-y-1.5">
                    {study.methodology.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                        <span className="text-[#a3e635] shrink-0 font-bold">›</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Deliverable & Value */}
                <div className="mt-5 pt-3.5 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Deliverable &amp; Practical Value</span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                    {study.deliverableAndValue}
                  </p>
                </div>

                {/* Tools Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-wrap gap-1.5">
                  {study.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 text-slate-400 dark:text-slate-400 light-theme:text-slate-600 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality & Context Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex items-start gap-3 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
          <HelpCircle className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white dark:text-white light-theme:text-slate-900">Professional Confidentiality Note: </strong>
            To respect employer confidentiality and proprietary operational standards, the case studies above outline the technical frameworks, problem-solving methods, and tools used in manufacturing environments rather than exposing internal company records or customer figures.
          </p>
        </div>
      </div>
    </section>
  );
};
