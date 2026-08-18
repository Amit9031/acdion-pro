import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight, Inbox, Compass, CheckCircle2 } from 'lucide-react';

export default function Workflow() {
  const [ref, isVisible] = useReveal();

  const steps = [
    {
      num: '01',
      icon: Inbox,
      title: 'Automatic Signal Capture',
      desc: 'Connect your target roles or job bookmarklets. SignalDesk extracts company names, stage dates, and recruiter contact timelines automatically.'
    },
    {
      num: '02',
      icon: Compass,
      title: 'Daily Priority Distillation',
      desc: 'Every morning, SignalDesk scans all saved roles and presents max 3-4 priority actions worth your time today.'
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: 'Execute & Maintain Momentum',
      desc: 'Click into any action to access custom preparation checklists or follow-up prompts. Mark complete and move forward.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0B0F17] transition-colors border-t border-slate-200 dark:border-slate-800">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
            THE 3-STEP DAILY HABIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How SignalDesk Replaces Tab Overload
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                className="relative rounded-2xl p-6 bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-blue-600/30 dark:text-blue-400/20">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
