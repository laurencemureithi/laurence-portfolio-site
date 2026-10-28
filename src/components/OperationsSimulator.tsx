import React, { useState } from 'react';
import { Sliders, TrendingUp, Clock, AlertTriangle, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface OperationsSimulatorProps {
  onDiscussOperations: (estimatedSavings: string) => void;
}

export const OperationsSimulator: React.FC<OperationsSimulatorProps> = ({ onDiscussOperations }) => {
  const [weeklyManualHours, setWeeklyManualHours] = useState<number>(12);
  const [hourlyLaborCostKes, setHourlyLaborCostKes] = useState<number>(1200);
  const [monthlyDiscrepancies, setMonthlyDiscrepancies] = useState<number>(6);
  const discrepancyCostKes = 8500;

  // Calculations
  const annualManualHours = weeklyManualHours * 50;
  const hoursRecoveredViaAutomation = Math.round(annualManualHours * 0.75); // 75% time reduction typical in automated sheets
  const annualLaborSavingsKes = hoursRecoveredViaAutomation * hourlyLaborCostKes;

  const annualDiscrepancyLossKes = monthlyDiscrepancies * 12 * discrepancyCostKes;
  const discrepancyPreventedKes = Math.round(annualDiscrepancyLossKes * 0.8); // 80% error reduction from data validation & reconciliation

  const totalProjectedAnnualImpactKes = annualLaborSavingsKes + discrepancyPreventedKes;

  const formattedImpact = `KES ${totalProjectedAnnualImpactKes.toLocaleString()}`;

  return (
    <div className="mt-14 p-6 sm:p-9 rounded-3xl bg-[#0c1424] border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient illumination */}
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-1">
              <Sliders className="w-4 h-4" />
              <span>Interactive ROI &amp; Operational Friction Simulator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Quantify the cost of manual spreadsheets, shift lag &amp; errors.
            </h3>
          </div>
          <div className="text-xs text-slate-400 font-mono shrink-0">
            Based on standard manufacturing &amp; SME benchmarks
          </div>
        </div>

        {/* Sliders and Calculations Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Weekly Hours on Manual Reporting */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#a3e635]" />
                  Weekly Hours Spent Compiling Spreadsheets &amp; Shift Logs
                </span>
                <span className="text-base font-mono text-[#a3e635] font-extrabold">
                  {weeklyManualHours} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="40"
                step="2"
                value={weeklyManualHours}
                onChange={(e) => setWeeklyManualHours(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer accent-[#a3e635]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>4 hrs (minimal)</span>
                <span>20 hrs (heavy)</span>
                <span>40 hrs (full-time role)</span>
              </div>
            </div>

            {/* Slider 2: Average Hourly Staff / Supervisor Cost */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className="text-slate-300">
                  Estimated Supervisor / Team Hourly Rate (KES)
                </span>
                <span className="text-base font-mono text-[#a3e635] font-extrabold">
                  KES {hourlyLaborCostKes.toLocaleString()}/hr
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="3500"
                step="100"
                value={hourlyLaborCostKes}
                onChange={(e) => setHourlyLaborCostKes(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer accent-[#a3e635]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>KES 500/hr</span>
                <span>KES 1,500/hr</span>
                <span>KES 3,500/hr</span>
              </div>
            </div>

            {/* Slider 3: Reconciliation Discrepancies */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Monthly Discrepancies / Stock Reconciliation Lags
                </span>
                <span className="text-base font-mono text-amber-400 font-extrabold">
                  {monthlyDiscrepancies} instances/mo
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={monthlyDiscrepancies}
                onChange={(e) => setMonthlyDiscrepancies(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>1 per month</span>
                <span>10 per month</span>
                <span>20 per month</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Projected Value Display */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Projected Annual Value Recovered</span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-[#a3e635] font-mono tracking-tight">
                {formattedImpact}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Estimated direct overhead saved + preventable variance eliminated per year
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Hours Recovered Annually:</span>
                  <span className="font-mono font-bold text-white">~{hoursRecoveredViaAutomation} hours/year</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Labor Value Repurposed:</span>
                  <span className="font-mono font-bold text-white">KES {annualLaborSavingsKes.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Preventable Discrepancy Recovery:</span>
                  <span className="font-mono font-bold text-white">KES {discrepancyPreventedKes.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => onDiscussOperations(formattedImpact)}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20"
              >
                <span>Discuss an Operations &amp; Data Audit</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Kaizen Discipline Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#a3e635] shrink-0" />
          <span>
            Delivered through structured 5S root-cause analysis, standardized SOP checklists, and automated Excel/Python data tools.
          </span>
        </div>
      </div>
    </div>
  );
};
