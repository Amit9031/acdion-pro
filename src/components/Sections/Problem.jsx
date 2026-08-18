import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { AlertTriangle, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export default function Problem() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="problem" ref={ref} className="py-16 md:py-24 transition-colors">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            THE REALITY OF MODERN JOB SEARCHING
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Spreadsheet & 40-Tab Systems Fail Engineers
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-4">
            Most job searches don't fail from a lack of qualified roles. They fail because high-value opportunities slip through the cracks of a noisy, fragmented process.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Old Way */}
          <div className="rounded-2xl p-6 sm:p-8 bg-red-50/50 dark:bg-red-950/20 border border-red-200/80 dark:border-red-900/40 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/60 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  The 40-Tab Chaos (Traditional Way)
                </h4>
                <p className="text-xs text-red-600 dark:text-red-400 font-mono">Reacting instead of prioritizing</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Forgotten Follow-ups:</strong> 6 days pass after an onsite interview because it was buried in your Notion table.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Context Switching Fatigue:</strong> Re-reading notes from scratch 15 minutes before an interview call.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Spreadsheet Rot:</strong> Outdated statuses, duplicate rows, and no clear answer to "What should I do right now?"</span>
              </li>
            </ul>
          </div>

          {/* SignalDesk Way */}
          <div className="rounded-2xl p-6 sm:p-8 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-800/60 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  The SignalDesk Focus Queue
                </h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">Single-task focus, zero friction</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Automated Priority Scoring:</strong> Roles automatically bubble up based on interview dates and idle response timers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Single Clear Next Action:</strong> Every role has exactly one prescribed step so you never stare at your screen wondering what to do.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-white">Context On Demand:</strong> Access interview notes, recruiter hints, and prep checklists in one click.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
