import React from 'react';
import { CheckCircle2, GraduationCap, Factory, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white/[0.01] dark:bg-white/[0.01] light-theme:bg-slate-50 border-t border-white/5 dark:border-white/5 light-theme:border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-widest text-[#a3e635] mb-2">
              Background &amp; Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white dark:text-white light-theme:text-slate-900 leading-tight">
              Bridging manufacturing operations, analytical rigor, and creative execution.
            </h2>

            <div className="mt-6 space-y-4 text-base text-slate-300 dark:text-slate-300 light-theme:text-slate-700 leading-relaxed font-normal">
              <p>
                My foundation began in manufacturing operations, where I have worked across production, quality control, engineering support, operational reporting, and IT-related responsibilities since 2021. Working on the factory floor taught me that businesses thrive or struggle not because of fancy concepts, but because of how well daily procedures, handovers, and data records are managed.
              </p>
              <p>
                During this time, I participated in structured Lean and Kaizen improvement initiatives alongside Japanese consultants and local manufacturing teams. I learned to look past surface symptoms, drill down to root causes with 5-Whys and Fishbone diagrams, draft clear Standard Operating Procedures (SOPs), and build tools that operators and supervisors can actually use under daily pressure.
              </p>
              <p>
                Alongside this operational experience, my technical education includes a <strong className="text-white dark:text-white light-theme:text-slate-900 font-semibold">Diploma in IT</strong>, formal <strong className="text-white dark:text-white light-theme:text-slate-900 font-semibold">CQP Foundation-level training</strong>, and continued <strong className="text-white dark:text-white light-theme:text-slate-900 font-semibold">CQP Intermediate studies</strong>. I apply advanced Excel and Python to clean messy datasets and automate reporting, and build clean web applications and brand identities through <strong className="text-white dark:text-white light-theme:text-slate-900 font-semibold">Opsloom</strong> and <strong className="text-white dark:text-white light-theme:text-slate-900 font-semibold">Bluprint</strong>.
              </p>
              <p>
                My differentiator is simple: I understand both the operational problem on the ground and the technical/creative solution needed to solve it.
              </p>
            </div>

            {/* Credibility Highlights */}
            <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light-theme:border-slate-200 space-y-3">
              {PERSONAL_INFO.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light-theme:text-slate-700">
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Experience Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Manufacturing & Lean Card */}
            <div className="p-6 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#a3e635] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                <Factory className="w-4 h-4" />
                <span>Manufacturing &amp; Quality</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Operational Discipline
              </h3>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Experience in high-throughput manufacturing since 2021: root-cause analysis, Kaizen waste reduction, shift handovers, machine downtime logs, and procedural documentation.
              </p>
            </div>

            {/* Technical Education Card */}
            <div className="p-6 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#a3e635] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Training</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                IT &amp; Quality Qualifications
              </h3>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                Diploma in IT paired with Chartered Quality Professional (CQP) Foundation training and active Intermediate studies, grounding technical skills in international quality standards.
              </p>
            </div>

            {/* Venture Platforms Card */}
            <div className="p-6 rounded-3xl bg-[#0c1424] dark:bg-[#0c1424] light-theme:bg-white border border-white/10 dark:border-white/10 light-theme:border-slate-200 shadow-xl">
              <div className="flex items-center gap-2.5 text-[#a3e635] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Active Initiatives</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white dark:text-white light-theme:text-slate-900">
                Opsloom &amp; Bluprint
              </h3>
              <p className="mt-2 text-xs text-slate-300 dark:text-slate-300 light-theme:text-slate-600 leading-relaxed">
                <strong>Opsloom</strong> provides digital systems, automation prototypes, and operational dashboards. <strong>Bluprint</strong> delivers professional brand identities, vector logos, and marketing print collateral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
