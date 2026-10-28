import React, { useState } from 'react';
import { CheckCircle2, Clock, Info, ArrowUpRight } from 'lucide-react';
import { PRICING_PACKAGES, PricingCategory, PricingItem } from '../data/portfolio';

interface PricingProps {
  onSelectPackage: (packageName: string, priceRange: string) => void;
  onCustomProject: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage, onCustomProject }) => {
  const [currencyMode, setCurrencyMode] = useState<'KES' | 'USD'>('KES');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const activeCategory: PricingCategory = PRICING_PACKAGES[activeCategoryIndex];

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
              Transparent Pricing &amp; Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
              Indicative starting packages and project ranges.
            </h2>
            <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
              Every project receives a clear written proposal and agreed milestone schedule before work begins. Below are indicative starting ranges for common scopes.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 self-start md:self-auto">
            <span className="text-xs font-medium text-slate-400 pl-2">Currency:</span>
            <button
              onClick={() => setCurrencyMode('KES')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                currencyMode === 'KES'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              KES (Primary)
            </button>
            <button
              onClick={() => setCurrencyMode('USD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                currencyMode === 'USD'
                  ? 'bg-emerald-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              USD Ref (~Approx)
            </button>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {PRICING_PACKAGES.map((cat, idx) => (
            <button
              key={cat.categoryName}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeCategoryIndex === idx
                  ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/10'
                  : 'bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-white border-white/10 dark:border-white/10 light-theme:border-slate-300 text-slate-300 dark:text-slate-300 light-theme:text-slate-700 hover:border-white/20'
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="mt-4 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
          {activeCategory.categoryDescription}
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
          {activeCategory.items.map((item: PricingItem) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-lg hover:border-emerald-500/30 transition-all"
            >
              <div>
                {/* Title & Timing */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
                      {item.typicalScope}
                    </p>
                  </div>
                  <span className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                    <Clock className="w-3 h-3" />
                    <span>{item.turnaround}</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="mt-5 pb-4 border-b border-white/10 dark:border-white/10 light-theme:border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light-theme:text-slate-900 font-mono tracking-tight">
                    {currencyMode === 'KES' ? item.priceKes : item.priceUsdApprox}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {currencyMode === 'KES' ? item.priceUsdApprox : item.priceKes} · Indicative starting range
                  </div>
                </div>

                {/* Typical Scope & Deliverables */}
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2.5">
                    Scope Includes
                  </div>
                  <ul className="space-y-2">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
                <button
                  type="button"
                  onClick={() => onSelectPackage(item.name, item.priceKes)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-500/10"
                >
                  <span>Request Quote for {item.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Custom Project Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-[#111827] to-[#111827] dark:from-emerald-950/30 dark:via-[#111827] dark:to-[#111827] light-theme:from-emerald-50 light-theme:via-white light-theme:to-white border border-emerald-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                Custom Requirements
              </div>
              <h3 className="text-xl font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Need a Custom or Phased Project?
              </h3>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                If your requirements do not fit the packages above—such as combining brand identity with a custom web portal, multi-facility Excel consolidation, or specific phased delivery—I provide an itemized quote tailored directly to your budget and operational goals.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Custom scope breakdown and milestone agreement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Phased delivery to match cash flow or operational cycles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dedicated consultation before any commitment</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
              <button
                type="button"
                onClick={onCustomProject}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white dark:text-white light-theme:text-slate-900 bg-white/10 dark:bg-white/10 light-theme:bg-slate-100 hover:bg-white/20 border border-white/10 cursor-pointer transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>Discuss a Custom Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Policy & Transparency Notes */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-white dark:text-white light-theme:text-slate-900 font-bold font-display">
            <Info className="w-4 h-4 text-emerald-400" />
            <span>Pricing Transparency &amp; Terms</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Starting Ranges:</strong> Prices shown above are indicative starting brackets. Final quotes reflect project complexity, third-party integrations, data quality, content readiness, and required revision cycles.
          </p>
          <p className="leading-relaxed">
            • <strong>Excluded Third-Party Costs:</strong> Domain registration, commercial web hosting, paid software subscriptions, and third-party SMS/API gateway costs are paid directly to their respective providers unless explicitly bundled in writing.
          </p>
          <p className="leading-relaxed">
            • <strong>No Hidden Fees:</strong> Deliverables, timelines, and payment milestones (typically a deposit followed by milestone/completion payments) are confirmed in a written proposal before any work begins.
          </p>
        </div>
      </div>
    </section>
  );
};
