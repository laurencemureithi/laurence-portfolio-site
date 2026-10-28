import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolio';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            Clear answers to common questions before getting started.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
            Straightforward, practical responses about costs, timelines, budgets, and how we collaborate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] dark:hover:bg-white/[0.02] light-theme:hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed border-t border-white/5 dark:border-white/5 light-theme:border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
