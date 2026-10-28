import React, { useState } from 'react';
import { CheckCircle2, Info, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PRICING_PACKAGES, PricingPackageItem } from '../data/portfolio';
import { ScopeCalculator } from './ScopeCalculator';

interface PricingProps {
  onSelectPackage: (packageName: string, price: string) => void;
  onRequestCustomQuote: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage, onRequestCustomQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Design' | 'Web' | 'Data & Operations'>('All');

  const filteredItems = PRICING_PACKAGES.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
              Transparent Rates &amp; Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
              Indicative project pricing in Kenyan Shillings (KES).
            </h2>
            <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
              Clear, transparent starting ranges based on typical scopes. Final quotations are provided in writing following discovery, with agreed milestones and zero surprise costs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs">
            {(['All', 'Design', 'Web', 'Data & Operations'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#a3e635] text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredItems.map((item: PricingPackageItem) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-lg hover:border-[#a3e635]/40 transition-all"
            >
              <div>
                {/* Category Pill & Service Name */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-slate-400 text-[11px] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded">
                    Indicative
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                  {item.service}
                </h3>

                {/* Price Display */}
                <div className="mt-4 pb-4 border-b border-white/10 dark:border-white/10 light-theme:border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#a3e635] font-mono tracking-tight">
                    {item.indicativePriceKes}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    Starting range · Milestone-based billing
                  </div>
                </div>

                {/* Typical Scope */}
                <p className="mt-4 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                  {item.typicalScope}
                </p>

                {/* What is Included */}
                <div className="mt-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2.5">
                    Scope Includes
                  </div>
                  <ul className="space-y-1.5">
                    {item.whatIsIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-7 pt-4 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
                <button
                  type="button"
                  onClick={() => onSelectPackage(item.service, item.indicativePriceKes)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm shadow-lime-500/10"
                >
                  <span>Inquire for {item.service}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}

          {/* Dedicated Custom Project Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0c1424] via-[#111c34] to-[#0c1424] dark:from-[#0c1424] dark:via-[#111c34] dark:to-[#0c1424] light-theme:from-emerald-50 light-theme:via-white light-theme:to-white border border-[#a3e635]/40 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono font-bold text-[#a3e635] uppercase tracking-wider mb-2">
                Custom Scope
              </div>
              <h3 className="text-xl font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Have a Complex or Multi-Discipline Project?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                If your project requirements do not fit a single package—such as combining a custom web portal with Excel data pipelines and a complete brand identity—I provide a tailored, itemized proposal based on your exact business needs and cash flow milestones.
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span>Itemized cost and milestone breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span>Phased delivery to match operational readiness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span>No obligation consultation before committing</span>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-4 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200">
              <button
                type="button"
                onClick={onRequestCustomQuote}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white dark:text-white light-theme:text-slate-950 bg-white/10 dark:bg-white/10 light-theme:bg-slate-900 hover:bg-white/20 dark:hover:bg-white/20 light-theme:hover:bg-slate-800 border border-white/15 dark:border-white/15 light-theme:border-slate-900 cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#a3e635]" />
                <span>Request a Custom Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Scope & Budget Estimator */}
        <ScopeCalculator
          onBookScope={(selectedNames, totalRange) => {
            onSelectPackage(
              `Custom Package (${selectedNames.length} items): ${selectedNames.slice(0, 2).join(', ')}${
                selectedNames.length > 2 ? '...' : ''
              }`,
              totalRange
            );
          }}
        />

        {/* Pricing Terms & Inclusions Disclosure */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-white dark:text-white light-theme:text-slate-900 font-bold font-display">
            <Info className="w-4 h-4 text-[#a3e635]" />
            <span>Pricing Terms, Inclusions &amp; Exclusions</span>
          </div>
          <p className="leading-relaxed">
            • <strong>Indicative Nature:</strong> The rates listed above are starting ranges rather than fixed quotations. Final pricing depends on project complexity, content readiness, required third-party integrations, data cleanliness, and turnaround urgency.
          </p>
          <p className="leading-relaxed">
            • <strong>Third-Party Fees:</strong> Domain registration, commercial website hosting, paid third-party API keys, SMS gateways, and specialized software licenses are paid directly to their respective providers and are not bundled unless agreed in writing.
          </p>
          <p className="leading-relaxed">
            • <strong>Agreed Milestones:</strong> All projects proceed under written terms outlining exact deliverables, timelines, revision boundaries, and milestone payments (typically a deposit followed by delivery sign-off).
          </p>
        </div>
      </div>
    </section>
  );
};
