import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function Problem() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="problem" ref={ref} className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
            THE SYSTEM FAILURES
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight uppercase">
            Why Spreadsheets & 40-Tab Setups Burn Opportunities
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Most technical job searches don't fail from a lack of qualified roles. They fail because high-value opportunities decay inside noisy, unprioritized browser tabs.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old Way */}
          <div className="rounded-xl p-6 bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 font-mono text-xs">
            <div className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between">
              <span>01 / TRADITIONAL TAB CHAOS</span>
              <span className="text-zinc-400">HIGH FRICTION</span>
            </div>

            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-200">• Forgotten Follow-ups</span>
                <span className="text-[11px] leading-relaxed">6 days elapse after an onsite interview because notes were buried inside a forgotten Notion row.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-200">• Context Switching Overhead</span>
                <span className="text-[11px] leading-relaxed">Re-reading company blog posts and interview notes 10 minutes before a technical screen call.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-200">• Spreadsheet Rot</span>
                <span className="text-[11px] leading-relaxed">Outdated application statuses and zero clarity on what specific action to execute next.</span>
              </li>
            </ul>
          </div>

          {/* SignalDesk Way */}
          <div className="rounded-xl p-6 bg-white dark:bg-[#121215] border border-zinc-900 dark:border-zinc-100 font-mono text-xs shadow-sm">
            <div className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between">
              <span>02 / SIGNALDESK FOCUS QUEUE</span>
              <span className="text-emerald-500 font-bold">SINGLE TASK</span>
            </div>

            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">• Automated Priority Scoring</span>
                <span className="text-[11px] leading-relaxed">Roles automatically surface based on upcoming interview dates and idle response timers.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">• Prescriptive Action Cards</span>
                <span className="text-[11px] leading-relaxed">Every role has exactly one prescribed next step so you never stare at your screen wondering what to do.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">• Instant Context Drawers</span>
                <span className="text-[11px] leading-relaxed">Access recruiter notes, interview checklists, and submission timelines in one click.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
