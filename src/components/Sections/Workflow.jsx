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
    <section ref={ref} className="py-16 md:py-24 border-b border-[#28282D]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00] mb-2 block">
            DAILY HABIT
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            3 Steps to Execution Clarity
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl aww-card"
            >
              <div className="text-3xl font-syne font-bold text-[#CCFF00] mb-3">
                {step.num}
              </div>
              <h3 className="font-syne font-bold text-lg text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
