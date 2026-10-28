import React, { useState } from 'react';
import { Calculator, Check, ArrowUpRight, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

interface ScopeOption {
  id: string;
  category: 'Design' | 'Web' | 'Data & Operations';
  name: string;
  description: string;
  minKes: number;
  maxKes: number;
  days: number;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: 'brand-identity',
    category: 'Design',
    name: 'Brand Identity & Vector Logo Kit',
    description: 'Primary logo, alternate marks, color palette, typography hierarchy & guidelines.',
    minKes: 8000,
    maxKes: 20000,
    days: 4,
  },
  {
    id: 'marketing-print',
    category: 'Design',
    name: 'Marketing & Commercial Print Pack',
    description: 'Business cards, company profile / brochure, flyers, and digital banners.',
    minKes: 3000,
    maxKes: 10000,
    days: 3,
  },
  {
    id: 'landing-page',
    category: 'Web',
    name: 'Single-Page Business Website / Landing Page',
    description: 'Fast, responsive web presence with clear conversion CTA, WhatsApp integration & SEO.',
    minKes: 15000,
    maxKes: 30000,
    days: 5,
  },
  {
    id: 'multi-page-web',
    category: 'Web',
    name: 'Multi-Page Corporate / Business Website',
    description: 'Comprehensive 4–7 page platform: About, Services, Case Studies, and Contact lead capture.',
    minKes: 35000,
    maxKes: 75000,
    days: 10,
  },
  {
    id: 'ecommerce',
    category: 'Web',
    name: 'E-Commerce / Catalog Store',
    description: 'Product catalog, shopping cart, WhatsApp/checkout integration & order management.',
    minKes: 45000,
    maxKes: 90000,
    days: 14,
  },
  {
    id: 'excel-automation',
    category: 'Data & Operations',
    name: 'Automated Excel Operational Template',
    description: 'Dynamic lookups, data validation, automated calculation macros and reconciliation checks.',
    minKes: 5000,
    maxKes: 15000,
    days: 3,
  },
  {
    id: 'kpi-dashboard',
    category: 'Data & Operations',
    name: 'Executive KPI Dashboard & Reporting System',
    description: 'Consolidated shift/monthly metrics, error highlighting, and automated chart generation.',
    minKes: 15000,
    maxKes: 40000,
    days: 7,
  },
  {
    id: 'sop-standardization',
    category: 'Data & Operations',
    name: 'SOP Documentation & 5S Process Mapping',
    description: 'Standard operating procedures, step-by-step handover checklists & Kaizen waste audits.',
    minKes: 10000,
    maxKes: 30000,
    days: 6,
  },
];

interface ScopeCalculatorProps {
  onBookScope: (selectedNames: string[], totalRange: string, scopeBriefText: string) => void;
}

export const ScopeCalculator: React.FC<ScopeCalculatorProps> = ({ onBookScope }) => {
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'brand-identity',
    'landing-page',
    'excel-automation',
  ]);

  const KES_TO_USD_RATE = 130;

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = SCOPE_OPTIONS.filter((opt) => selectedIds.includes(opt.id));

  const totalMinKes = selectedItems.reduce((acc, curr) => acc + curr.minKes, 0);
  const totalMaxKes = selectedItems.reduce((acc, curr) => acc + curr.maxKes, 0);

  const estimatedDays = Math.max(
    ...selectedItems.map((s) => s.days),
    Math.round(selectedItems.reduce((acc, curr) => acc + curr.days, 0) * 0.75)
  );

  const formattedRange =
    selectedItems.length === 0
      ? currency === 'KES'
        ? 'KES 0'
        : '$0 USD'
      : currency === 'KES'
      ? `KES ${totalMinKes.toLocaleString()} – ${totalMaxKes.toLocaleString()}`
      : `$${Math.ceil(totalMinKes / KES_TO_USD_RATE).toLocaleString()} – $${Math.ceil(
          totalMaxKes / KES_TO_USD_RATE
        ).toLocaleString()} USD`;

  const selectedNames = selectedItems.map((s) => s.name);

  const structuredBrief =
    selectedItems.length === 0
      ? ''
      : `Hello Laurence,\n\nI evaluated my project requirements using your interactive scope calculator and would like to proceed with the following deliverables:\n${selectedItems
          .map((s) => `• ${s.name} (${s.category})`)
          .join('\n')}\n\nIndicative Budget: ${formattedRange}\nEstimated Turnaround: ~${estimatedDays} business days.\n\nPlease provide a structured project proposal and review call availability.`;

  const handleWhatsAppScope = () => {
    if (selectedItems.length === 0) return;
    const itemsList = selectedItems.map((s) => `• ${s.name} (${s.category})`).join('\n');
    const message = encodeURIComponent(
      `Hi Laurence, I used your website Scope Calculator and would like to discuss this project package:\n\n` +
      `SELECTED SCOPE:\n${itemsList}\n\n` +
      `ESTIMATED BUDGET: ${formattedRange}\n` +
      `ESTIMATED TIMELINE: ~${estimatedDays} business days\n\n` +
      `Could we schedule a call to review requirements?`
    );
    window.open(`https://wa.me/254110343757?text=${message}`, '_blank');
  };

  const handleLockScopeToForm = () => {
    onBookScope(selectedNames, formattedRange, structuredBrief);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-14 p-6 sm:p-9 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#a3e635]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header with Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope &amp; Budget Estimator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white dark:text-white light-theme:text-slate-900">
              Tailor your project scope and see immediate estimated investment.
            </h3>
          </div>

          {/* Currency Switcher Toggle (KES ↔ USD) */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
              Currency:
            </span>
            <div className="inline-flex rounded-xl p-1 bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 border border-white/10 dark:border-white/10 light-theme:border-slate-200 text-xs font-mono">
              <button
                type="button"
                onClick={() => setCurrency('KES')}
                className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  currency === 'KES'
                    ? 'bg-[#a3e635] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
                }`}
              >
                KES (KSh)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#a3e635] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Options Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {SCOPE_OPTIONS.map((opt) => {
            const isSelected = selectedIds.includes(opt.id);
            const displayMin =
              currency === 'KES'
                ? `KES ${opt.minKes.toLocaleString()}`
                : `$${Math.ceil(opt.minKes / KES_TO_USD_RATE).toLocaleString()}`;

            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggleOption(opt.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#101c34] dark:bg-[#101c34] light-theme:bg-emerald-50/50 border-[#a3e635] shadow-md shadow-lime-500/10'
                    : 'bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-50 border-white/5 dark:border-white/5 light-theme:border-slate-200 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {opt.category}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#a3e635] text-slate-950 font-bold'
                          : 'border border-white/20 dark:border-white/20 light-theme:border-slate-300 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                  <div className="text-sm font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                    {opt.name}
                  </div>
                  <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a3e635] font-bold">
                    {displayMin}
                  </span>
                  <span className="text-slate-400 text-[11px]">~{opt.days}d</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Calculation Tally Box */}
        <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-50 border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 light-theme:text-slate-500">
              Estimated Combined Range ({selectedItems.length} selected in {currency})
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-[#a3e635] font-mono tracking-tight">
              {formattedRange}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#a3e635]" />
                Estimated delivery: ~{selectedItems.length === 0 ? 0 : estimatedDays} business days
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#a3e635]" />
                Includes milestone reviews &amp; 100% asset sovereignty
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={selectedItems.length === 0}
              onClick={handleWhatsAppScope}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 transition-all cursor-pointer shadow-lg shadow-lime-500/20 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Scope on WhatsApp</span>
            </button>

            <button
              type="button"
              disabled={selectedItems.length === 0}
              onClick={handleLockScopeToForm}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white dark:text-white light-theme:text-slate-900 bg-white/5 dark:bg-white/5 light-theme:bg-white hover:bg-white/10 dark:hover:bg-white/10 light-theme:hover:bg-slate-100 border border-white/15 dark:border-white/15 light-theme:border-slate-300 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
            >
              <span>Lock Selected Scope to Form</span>
              <ArrowUpRight className="w-4 h-4 text-[#a3e635]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
