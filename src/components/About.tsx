import React from 'react';
import { CheckCircle2, Wrench, FileText, Cpu, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: The Narrative Story */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
              Background &amp; Approach
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
              Operational discipline from the shop floor to digital systems.
            </h2>

            <div className="mt-6 space-y-4 text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed font-normal">
              <p>
                My professional foundation began in manufacturing operations, where I have worked since 2021. Across production, quality control, engineering support, and operational reporting, I learned firsthand that businesses succeed or struggle based on how well their daily processes, data, and communication are organized.
              </p>
              <p>
                In a manufacturing environment, small discrepancies in inventory, undocumented steps on a shift handover, or messy reporting spreadsheets quickly snowball into costly downtime and missed targets. Applying Kaizen and Lean improvement principles taught me to look for root causes rather than surface symptoms, standardize procedures (SOPs), and build tools that operators and supervisors can actually use every day.
              </p>
              <p>
                Over time, I combined this operational rigor with data analytics in Excel and Python, modern web development, and creative design. Through <strong className="text-white dark:text-white light-theme:text-slate-900">Opsloom</strong>, I develop practical digital solutions and automation prototypes. Through <strong className="text-white dark:text-white light-theme:text-slate-900">Bluprint</strong>, I deliver clean brand identities and press-ready marketing materials.
              </p>
              <p>
                Whether helping a manufacturing plant digitize daily logs or assisting a local startup with its first corporate website and logo, my focus remains constant: practical problem-solving, structured thinking, clear documentation, and useful outcomes that help businesses operate with clarity.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="mt-8 space-y-3.5">
              {[
                'Practical Problem-Solving: Choosing the simplest tool that solves the problem reliably, avoiding unnecessary complexity.',
                'Process Standardization: Clear SOPs and step-by-step checklists so business operations do not depend on memory.',
                'Clear Documentation & Handover: Providing unlocked workbooks, full source code, and training so clients remain self-sufficient.',
                'Grounded Tech: Focusing on tools that work in real African and global environments—accessible on mobile, offline-resilient, and cost-effective.',
              ].map((principle, idx) => {
                const [title, desc] = principle.split(': ');
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                      <strong className="text-white dark:text-white light-theme:text-slate-900 font-semibold">{title}: </strong>
                      {desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Experience & Competencies Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-3xl bg-[#111827] dark:bg-[#111827] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-emerald-400" />
                <span>Hands-On Experience Matrix</span>
              </h3>

              <div className="space-y-4 text-xs">
                {/* Operations & Quality */}
                <div>
                  <div className="text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Manufacturing &amp; Operations (Since 2021)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Quality Assurance',
                      'Production Workflows',
                      'Kaizen & Lean Activities',
                      'Root Cause Analysis (5-Whys)',
                      'SOP Documentation',
                      'Preventive Maintenance Tracking',
                      'IT & Systems Support',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 text-slate-300 dark:text-slate-300 light-theme:text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data & Analytics */}
                <div className="pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100">
                  <div className="text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>Data Analytics &amp; Reporting</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Advanced Excel & VBA',
                      'Operational Dashboards',
                      'Python Data Analysis',
                      'Data Cleaning & Reconciliation',
                      'Inventory Discrepancy Audits',
                      'Automated Summary Sheets',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 text-slate-300 dark:text-slate-300 light-theme:text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Software & Creative */}
                <div className="pt-3 border-t border-white/5 dark:border-white/5 light-theme:border-slate-100">
                  <div className="text-emerald-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Software &amp; Creative Design</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'React & TypeScript',
                      'Responsive Web Design',
                      'Tailwind CSS',
                      'Adobe Illustrator & InDesign',
                      'Brand Identity & Guidelines',
                      'Press-Ready Print Collateral',
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-white/5 dark:bg-white/5 light-theme:bg-slate-100 text-slate-300 dark:text-slate-300 light-theme:text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 text-xs text-slate-400 dark:text-slate-400 light-theme:text-slate-500">
                <span>Professional Name: </span>
                <strong className="text-white dark:text-white light-theme:text-slate-900 font-display">
                  {PERSONAL_INFO.fullName}
                </strong>
                <div className="mt-1">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
