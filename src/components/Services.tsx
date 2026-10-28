import React, { useState } from 'react';
import { Palette, Globe, BarChart3, Factory, CheckCircle2, ArrowUpRight, AlertCircle } from 'lucide-react';
import { SERVICES_DATA, ServiceCategory, ServiceItem } from '../data/portfolio';

interface ServicesProps {
  onSelectService: (serviceTitle: string, startingPrice?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('brand-design');

  const activeCategory: ServiceCategory =
    SERVICES_DATA.find((c) => c.id === activeCategoryId) || SERVICES_DATA[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'brand-design':
        return <Palette className="w-4 h-4" />;
      case 'web-digital':
        return <Globe className="w-4 h-4" />;
      case 'data-systems':
        return <BarChart3 className="w-4 h-4" />;
      case 'operations-improvement':
        return <Factory className="w-4 h-4" />;
      default:
        return <Palette className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
            Capabilities &amp; Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
            Four connected capabilities for practical business growth.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
            From brand identity and web development to Excel automation and factory-floor process improvement—each capability is delivered with craftsmanship, technical precision, and complete handover.
          </p>
        </div>

        {/* 4 Category Tabs */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES_DATA.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border-[#a3e635] shadow-lg shadow-black/20'
                    : 'bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-white/60 border-white/5 dark:border-white/5 light-theme:border-slate-200 hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <span className={isActive ? 'text-[#a3e635]' : 'text-slate-400'}>{cat.number}</span>
                    <span className={isActive ? 'text-[#a3e635]' : 'text-slate-500'}>{getCategoryIcon(cat.id)}</span>
                  </div>
                  <div className="text-base font-bold font-display text-white dark:text-white light-theme:text-slate-900 leading-snug">
                    {cat.categoryName}
                  </div>
                </div>
                <div className={`mt-3 text-[11px] font-semibold ${isActive ? 'text-[#a3e635]' : 'text-slate-400'}`}>
                  {isActive ? '● Viewing Scope' : 'Click to View'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Overview Banner */}
        <div className="mt-6 p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <strong className="text-white dark:text-white light-theme:text-slate-900">{activeCategory.categoryName}: </strong>
            <span>{activeCategory.tagline}</span>
          </div>
          <span className="text-slate-400 text-[11px] font-mono shrink-0">
            {activeCategory.services.length} Core Services
          </span>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {activeCategory.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 flex flex-col justify-between shadow-md hover:border-[#a3e635]/40 transition-all"
            >
              <div>
                {/* Header: Title & Starting Price */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                    {service.title}
                  </h3>
                  {service.startingPriceKes && (
                    <span className="shrink-0 text-xs font-mono font-bold text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20 px-2.5 py-1 rounded-md">
                      {service.startingPriceKes}
                    </span>
                  )}
                </div>

                {/* The Business Problem */}
                <div className="mt-4 p-3.5 rounded-xl bg-red-950/20 dark:bg-red-950/20 light-theme:bg-red-50 border border-red-500/15">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-300 dark:text-red-300 light-theme:text-red-700 mb-1">
                    Problem It Solves
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                    {service.problemSolved}
                  </p>
                </div>

                {/* What You Receive */}
                <div className="mt-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-2.5">
                    What You Receive
                  </div>
                  <ul className="space-y-1.5">
                    {service.whatYouReceive.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Fit */}
                <div className="mt-5 pt-3.5 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
                  <strong className="text-slate-300 dark:text-slate-300 light-theme:text-slate-800">Ideal For: </strong>
                  {service.suitableFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Indicative Scope</span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.title, service.startingPriceKes)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#a3e635] hover:text-[#bef264] cursor-pointer transition-colors"
                >
                  <span>Inquire for This</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Capability Boundary Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 flex items-start gap-3 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-600">
          <AlertCircle className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white dark:text-white light-theme:text-slate-900">Direct Delivery vs. Custom Scoping: </strong>
            Direct deliverables (e.g. brand kits, automated reporting sheets, websites) are delivered within defined milestone schedules. Larger, multi-department operational systems or advanced integrations are scoped individually based on existing data readiness, system constraints, and team requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
