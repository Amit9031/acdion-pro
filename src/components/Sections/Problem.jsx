import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Problem() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="problem" ref={ref} className="py-16 md:py-24 border-b border-[#28282D]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00] mb-2 block">
            THE REALITY OF MODERN JOB SEARCHES
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Why Spreadsheets & 40-Tab Setups Fail Engineers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            Most job searches don't fail from a lack of qualified roles. They fail because high-value opportunities decay inside noisy browser tabs and forgotten Notion tables.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old Way */}
          <div className="rounded-2xl p-6 sm:p-8 bg-red-500/5 border border-red-500/20 font-mono text-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-syne text-lg font-bold text-white">
                  The 40-Tab Chaos
                </h4>
                <p className="text-xs text-red-400 font-mono">Reacting instead of prioritizing</p>
              </div>
            </div>

            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Forgotten Follow-ups:</strong> 6 days pass after an onsite interview because notes were buried in an unread tab.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Context Switching Overhead:</strong> Re-reading notes from scratch 10 minutes before a technical screen call.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Spreadsheet Rot:</strong> Outdated application statuses and zero clarity on what specific action to execute next.</span>
              </li>
            </ul>
          </div>

          {/* SignalDesk Way */}
          <div className="rounded-2xl p-6 sm:p-8 aww-card border-[#CCFF00]/40 font-mono text-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-syne text-lg font-bold text-white">
                  The SignalDesk Focus Desk
                </h4>
                <p className="text-xs text-[#CCFF00] font-mono">Single-task queue focus</p>
              </div>
            </div>

            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00] font-bold">•</span>
                <span><strong className="text-white">Automated Priority Scoring:</strong> Roles automatically surface based on upcoming interview dates and idle response timers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00] font-bold">•</span>
                <span><strong className="text-white">Prescriptive Action Cards:</strong> Every role has exactly one prescribed next step so you never stare at your screen wondering what to do.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00] font-bold">•</span>
                <span><strong className="text-white">Instant Context Drawers:</strong> Access recruiter notes, interview checklists, and submission timelines in one click.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
