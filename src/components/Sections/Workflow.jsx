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
    <section ref={ref} className="py-16 md:py-24 border-b border-[#E8E5DA] dark:border-[#282A30]">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-terracotta-500 mb-2 block">
            DAILY HABIT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18181B] dark:text-[#F4F2EB] tracking-tight">
            3 Steps to Execution Clarity
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl paper-card"
            >
              <div className="text-3xl font-serif italic text-terracotta-500 font-bold mb-3">
                {step.num}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#18181B] dark:text-[#F4F2EB] mb-2">
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
