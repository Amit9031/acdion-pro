import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Problem() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="problem" ref={ref} className="py-16 md:py-24 border-b border-[#E8E5DA] dark:border-[#282A30]">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-terracotta-500 mb-2 block">
            THE SYSTEM FAILURES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18181B] dark:text-[#F4F2EB] tracking-tight">
            Why Spreadsheets & 40-Tab Setups Fail High-Skill Candidates
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            Most job searches don't fail from a lack of qualified roles. They fail because high-value opportunities decay inside noisy browser tabs and forgotten Notion tables.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old Way */}
          <div className="rounded-2xl p-6 sm:p-8 paper-card bg-[#F4F2EB]/50 dark:bg-zinc-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-[#18181B] dark:text-[#F4F2EB]">
                  The 40-Tab Chaos
                </h4>
                <p className="text-xs text-zinc-500 font-mono">Reacting instead of prioritizing</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-zinc-400">•</span>
                <span><strong className="text-[#18181B] dark:text-[#F4F2EB]">Forgotten Follow-ups:</strong> 6 days pass after an onsite interview because notes were buried in an unread tab.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-400">•</span>
                <span><strong className="text-[#18181B] dark:text-[#F4F2EB]">Context Switching Overhead:</strong> Re-reading notes from scratch 10 minutes before a technical screen call.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-400">•</span>
                <span><strong className="text-[#18181B] dark:text-[#F4F2EB]">Spreadsheet Rot:</strong> Outdated application statuses and zero clarity on what specific action to execute next.</span>
              </li>
            </ul>
          </div>

          {/* SignalDesk Way */}
          <div className="rounded-2xl p-6 sm:p-8 paper-card border-terracotta-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-terracotta-500/10 border border-terracotta-500/20 flex items-center justify-center text-terracotta-500 font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-[#18181B] dark:text-[#F4F2EB]">
                  The SignalDesk Focus Desk
                </h4>
                <p className="text-xs text-terracotta-500 font-mono">Single-task queue focus</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-terracotta-500 font-bold">•</span>
                <span><strong className="text-[#18181B] dark:text-[#F4F2EB]">Automated Priority Scoring:</strong> Roles automatically surface based on upcoming interview dates and idle response timers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta-500 font-bold">•</span>
                <span><strong className="text-[#18181B] dark:text-[#F4F2EB]">Prescriptive Action Cards:</strong> Every role has exactly one prescribed next step so you never stare at your screen wondering what to do.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta-500 font-bold">•</span>
                <span><strong className="text-[#18181B] dark:text-[#F4F2EB]">Instant Context Drawers:</strong> Access recruiter notes, interview checklists, and submission timelines in one click.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
