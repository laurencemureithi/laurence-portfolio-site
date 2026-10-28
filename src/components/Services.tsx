import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Cog, Palette, AlertCircle } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolio';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('business-systems');

  const activeCategory =
    SERVICES_DATA.find((c) => c.id === activeCategoryId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50/70 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            Services &amp; Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            Practical business systems and purposeful digital presence.
          </h2>
          <p className="mt-4 text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
            I organize my work into two clear categories: improving how your business operates behind the scenes, and strengthening how your business presents itself to customers.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setActiveCategoryId('business-systems')}
            className={`flex-1 p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeCategoryId === 'business-systems'
                ? 'bg-[#111827] dark:bg-[#111827] light-theme:bg-white border-emerald-500/50 shadow-lg shadow-black/20'
                : 'bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-white/60 border-white/5 dark:border-white/5 light-theme:border-slate-200 hover:border-white/15'
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <Cog className="w-4 h-4" />
              <span>Category A</span>
            </div>
            <div className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
              Business Systems &amp; Operational Improvement
            </div>
            <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600 line-clamp-2">
              Excel reporting, KPI dashboards, data reconciliation, SOPs, Lean problem-solving &amp; practical automation.
            </p>
          </button>

          <button
            onClick={() => setActiveCategoryId('digital-creative')}
            className={`flex-1 p-5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeCategoryId === 'digital-creative'
                ? 'bg-[#111827] dark:bg-[#111827] light-theme:bg-white border-emerald-500/50 shadow-lg shadow-black/20'
                : 'bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-white/60 border-white/5 dark:border-white/5 light-theme:border-slate-200 hover:border-white/15'
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <Palette className="w-4 h-4" />
              <span>Category B</span>
            </div>
            <div className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
              Digital Presence &amp; Creative Design
            </div>
            <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600 line-clamp-2">
              Logo design, brand identity, marketing print, business websites, e-commerce &amp; company profiles.
            </p>
          </button>
        </div>

        {/* Category Description Banner */}
        <div className="mt-6 p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
          <strong>{activeCategory.categoryName}:</strong> {activeCategory.description}
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {activeCategory.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-md hover:border-emerald-500/30 transition-all"
            >
              <div>
                <h3 className="text-xl font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                  {service.title}
                </h3>

                {/* The Problem It Solves */}
                <div className="mt-4 p-3.5 rounded-xl bg-red-950/20 dark:bg-red-950/20 light-theme:bg-red-50 border border-red-500/15 dark:border-red-500/15 light-theme:border-red-200">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-red-300 dark:text-red-300 light-theme:text-red-700 mb-1">
                    The Business Problem
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                    {service.problemSolved}
                  </p>
                </div>

                {/* What the Client Receives */}
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2.5">
                    What You Receive
                  </div>
                  <ul className="space-y-2">
                    {service.whatYouReceive.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable For */}
                <div className="mt-5 pt-4 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
                  <strong className="text-slate-300 dark:text-slate-300 light-theme:text-slate-800">Best Suited For: </strong>
                  {service.suitableFor}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-400">Need this for your business?</span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Scope Clarification Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex items-start gap-3 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
          <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white dark:text-white light-theme:text-slate-900">Scope &amp; Capability Note: </strong>
            I deliver grounded, practical tools—such as automated workbooks, internal dashboards, and custom business websites. I do not claim to build bloated enterprise ERP replacements or black-box AI platforms. Complex or multi-system custom development is individually scoped based on your verified data quality and business requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
