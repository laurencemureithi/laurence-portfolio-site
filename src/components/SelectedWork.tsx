import React, { useState } from 'react';
import { CheckCircle2, Tag, Layers, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolio';

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'client' | 'venture' | 'prototype'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'client') return project.projectType === 'Commercial Client Work';
    if (activeFilter === 'venture') return project.projectType === 'Personal Venture';
    if (activeFilter === 'prototype') return project.projectType === 'Operational Prototype' || project.projectType === 'Brand Concept';
    return true;
  });

  const getBadgeStyle = (type: Project['projectType']) => {
    switch (type) {
      case 'Commercial Client Work':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30';
      case 'Personal Venture':
        return 'text-blue-400 border-blue-500/30 bg-blue-950/30';
      case 'Operational Prototype':
        return 'text-amber-400 border-amber-500/30 bg-amber-950/30';
      case 'Brand Concept':
        return 'text-purple-400 border-purple-500/30 bg-purple-950/30';
      default:
        return 'text-slate-400 border-white/10 bg-white/5';
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
              Selected Work &amp; Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900">
              Verified projects, ventures &amp; operational prototypes.
            </h2>
            <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
              Each project is labeled honestly to distinguish commercial client work, personal entrepreneurial ventures, and operational prototypes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-emerald-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              All Work ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('client')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'client'
                  ? 'bg-emerald-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              Commercial Work
            </button>
            <button
              onClick={() => setActiveFilter('venture')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'venture'
                  ? 'bg-emerald-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              Ventures
            </button>
            <button
              onClick={() => setActiveFilter('prototype')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeFilter === 'prototype'
                  ? 'bg-emerald-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              Prototypes &amp; Concepts
            </button>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="mt-12 space-y-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Media Preview Column */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light-theme:border-slate-200 bg-black/40 h-56 sm:h-64">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.triedRelative) {
                          target.dataset.triedRelative = 'true';
                          target.src = project.image.replace(/^\//, '');
                        }
                      }}
                    />
                  </div>

                  {/* Project Type Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(
                        project.projectType
                      )}`}
                    >
                      <Tag className="w-3 h-3" />
                      <span>{project.projectType}</span>
                    </span>

                    {/* Status Pill */}
                    <span className="text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-500 font-mono">
                      {project.statusOrOutcome.includes('Active') || project.statusOrOutcome.includes('Live')
                        ? '● Active'
                        : '○ Concept/Proto'}
                    </span>
                  </div>

                  {/* Working External Link or Truthful Status */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-center text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{project.linkText || 'Visit Live Project'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="py-2.5 px-4 rounded-xl text-xs text-center text-slate-400 bg-white/5 border border-white/10 font-mono">
                      {project.statusOrOutcome}
                    </div>
                  )}
                </div>

                {/* Case Study Details Column */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Header: Name & Category */}
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white dark:text-white light-theme:text-slate-900">
                      {project.name}
                    </h3>

                    {/* Business Context or Problem */}
                    <div className="mt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-1">
                        Business Context &amp; Problem
                      </h4>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                        {project.businessContext}
                      </p>
                    </div>

                    {/* Specific Contribution */}
                    <div className="mt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-1">
                        My Specific Contribution
                      </h4>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>

                    {/* Approach & Tools Used */}
                    <div className="mt-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Approach &amp; Tools Used</span>
                      </h4>
                      <p className="text-xs font-mono text-slate-300 dark:text-slate-300 light-theme:text-slate-700 bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-100 p-2.5 rounded-lg border border-white/5 dark:border-white/5 light-theme:border-slate-200">
                        {project.approachAndTools}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables & Outcome Row */}
                  <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2">
                        Deliverables
                      </h4>
                      <ul className="space-y-1">
                        {project.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2">
                        Current Outcome &amp; Status
                      </h4>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                        {project.statusOrOutcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
