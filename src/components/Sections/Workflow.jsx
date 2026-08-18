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
    <section ref={ref} className="py-20 md:py-28 bg-[#FAFAFA] text-[#111111] border-b border-[#E2E2E2]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#222222] px-2.5 py-1 rounded bg-[#EAEAEA] border border-[#D5D5D5] inline-block mb-3">
            DAILY HABIT
          </span>
          <h2 className="font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight uppercase leading-tight">
            3 Steps to Execution Clarity
          </h2>
        </div>

        {/* Steps Grid - Dark High-Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#161618] text-white border border-[#28282D] shadow-xl"
            >
              <div className="text-4xl font-extrabold text-[#CCFF00] font-mono mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-white font-sans mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
