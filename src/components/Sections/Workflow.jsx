import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function Workflow() {
  const [ref, isVisible] = useReveal();

  const steps = [
    {
      num: '01',
      title: 'Signal Capture',
      desc: 'Ingest active applications cleanly. SignalDesk normalizes company names, stage dates, and recruiter contact windows.'
    },
    {
      num: '02',
      title: 'Priority Distillation',
      desc: 'Every morning, SignalDesk scans your saved applications and distills max 3-4 priority actions worth your focus today.'
    },
    {
      num: '03',
      title: 'Execution & Momentum',
      desc: 'Open action cards to view preparation checklists and follow-up prompts. Mark complete and move forward with clarity.'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#09090B]">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">
            DAILY HABIT
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight uppercase">
            3 Steps to Execution Clarity
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-lg bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-2xl font-black text-zinc-300 dark:text-zinc-700 mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
