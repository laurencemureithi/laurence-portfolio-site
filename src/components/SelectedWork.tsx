import React, { useState } from 'react';
import { ExternalLink, Tag, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolio';

export const SelectedWork: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ventures' | 'clients' | 'operations'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ventures') return project.projectType === 'Personal Venture';
    if (filter === 'clients') return project.projectType === 'Commercial Client Work';
    if (filter === 'operations') return project.projectType === 'Operational Case Study' || project.projectType === 'Brand Concept';
    return true;
  });

  const getBadgeClass = (type: Project['projectType']) => {
    switch (type) {
      case 'Commercial Client Work':
        return 'text-[#a3e635] border-[#a3e635]/30 bg-[#a3e635]/10';
      case 'Personal Venture':
        return 'text-sky-400 border-sky-500/30 bg-sky-950/30';
      case 'Operational Case Study':
        return 'text-amber-400 border-amber-500/30 bg-amber-950/30';
      case 'Brand Concept':
        return 'text-purple-400 border-purple-500/30 bg-purple-950/30';
      default:
        return 'text-slate-400 border-white/10 bg-white/5';
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 relative bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 dark:border-white/10 light-theme:border-slate-200">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
              Portfolio &amp; Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
              Selected projects, ventures &amp; operational systems.
            </h2>
            <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-600">
              Demonstrated work across commercial brand design, web applications, e-commerce, and hands-on manufacturing systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light-theme:bg-slate-100 border border-white/5 dark:border-white/5 light-theme:border-slate-200 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#a3e635] text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              All Work ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('ventures')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filter === 'ventures'
                  ? 'bg-[#a3e635] text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              Ventures
            </button>
            <button
              onClick={() => setFilter('clients')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filter === 'clients'
                  ? 'bg-[#a3e635] text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              Commercial Work
            </button>
            <button
              onClick={() => setFilter('operations')}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filter === 'operations'
                  ? 'bg-[#a3e635] text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light-theme:hover:text-slate-900'
              }`}
            >
              Operations &amp; Concepts
            </button>
          </div>
        </div>

        {/* Case Studies Presentation */}
        <div className="mt-12 space-y-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Media & Meta Column */}
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

                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeClass(
                        project.projectType
                      )}`}
                    >
                      <Tag className="w-3 h-3" />
                      <span>{project.projectType}</span>
                    </span>

                    <span className="text-xs text-slate-400 font-mono">
                      {project.statusOrOutcome.includes('Active') || project.statusOrOutcome.includes('Live')
                        ? '● Active'
                        : '○ Completed/Case'}
                    </span>
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-lime-500/10"
                    >
                      <span>{project.linkText || 'Visit Live Platform'}</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  ) : (
                    <div className="py-2.5 px-4 rounded-xl text-xs text-center text-slate-400 bg-white/5 border border-white/10 font-mono">
                      {project.statusOrOutcome}
                    </div>
                  )}
                </div>

                {/* Case Study Written Content */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white dark:text-white light-theme:text-slate-900">
                      {project.name}
                    </h3>

                    {/* Context / Problem */}
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-1">
                        Context &amp; Business Problem
                      </h4>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                        {project.businessContext}
                      </p>
                    </div>

                    {/* My Contribution */}
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-1">
                        My Contribution
                      </h4>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>

                    {/* Tools & Methods */}
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-1 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#a3e635]" />
                        <span>Tools &amp; Methods Used</span>
                      </h4>
                      <p className="text-xs font-mono text-slate-300 dark:text-slate-300 light-theme:text-slate-700 bg-white/[0.03] dark:bg-white/[0.03] light-theme:bg-slate-100 p-2.5 rounded-lg border border-white/5 dark:border-white/5 light-theme:border-slate-200">
                        {project.approachAndTools}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables & Outcome Row */}
                  <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2">
                        Deliverables
                      </h4>
                      <ul className="space-y-1">
                        {project.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light-theme:text-slate-500 mb-2">
                        Outcome &amp; Current Status
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
