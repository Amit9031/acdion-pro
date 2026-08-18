import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Problem() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="problem" ref={ref} className="py-20 md:py-28 bg-[#FAFAFA] text-[#111111] border-b border-[#E2E2E2]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#222222] px-2.5 py-1 rounded bg-[#EAEAEA] border border-[#D5D5D5] inline-block mb-3">
            SYSTEM FAILURES & CLARITY
          </span>
          <h2 className="font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight uppercase leading-tight">
            Why 40-Tab Setups Burn Opportunities
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            Most technical job searches don't fail from a lack of qualified roles. They fail because high-value opportunities decay inside noisy browser tabs and forgotten Notion tables.
          </p>
        </div>

        {/* High Contrast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Old Way Card - Dark Container for High Contrast */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#161618] text-white border border-[#28282D] shadow-xl font-mono text-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white font-sans">
                  The 40-Tab Chaos
                </h4>
                <p className="text-xs text-red-400 font-mono">Reacting instead of prioritizing</p>
              </div>
            </div>

            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                <span><strong className="text-white font-bold">Forgotten Follow-ups:</strong> 6 days pass after an onsite interview because notes were buried in an unread tab.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                <span><strong className="text-white font-bold">Context Switching Overhead:</strong> Re-reading notes from scratch 10 minutes before a technical screen call.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                <span><strong className="text-white font-bold">Spreadsheet Rot:</strong> Outdated application statuses and zero clarity on what specific action to execute next.</span>
              </li>
            </ul>
          </div>

          {/* SignalDesk Way Card - Dark Container with Acid Lime Highlights */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#161618] text-white border-2 border-[#CCFF00] shadow-xl font-mono text-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#CCFF00] text-black flex items-center justify-center font-extrabold text-base">
                ✓
              </div>
              <div>
                <h4 className="text-xl font-bold text-white font-sans">
                  The SignalDesk Focus Desk
                </h4>
                <p className="text-xs text-[#CCFF00] font-mono font-bold">Single-task queue focus</p>
              </div>
            </div>

            <ul className="space-y-4 text-neutral-200">
              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00] font-bold">•</span>
                <span><strong className="text-white font-bold">Automated Priority Scoring:</strong> Roles automatically surface based on upcoming interview dates and idle response timers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00] font-bold">•</span>
                <span><strong className="text-white font-bold">Prescriptive Action Cards:</strong> Every role has exactly one prescribed next step so you never stare at your screen wondering what to do.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CCFF00] font-bold">•</span>
                <span><strong className="text-white font-bold">Instant Context Drawers:</strong> Access recruiter notes, interview checklists, and submission timelines in one click.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
