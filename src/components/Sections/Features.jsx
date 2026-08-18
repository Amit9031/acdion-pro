import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { ShieldCheck, Cpu, Target, Moon, Smartphone, Zap } from 'lucide-react';

export default function Features() {
  const [ref, isVisible] = useReveal();

  const features = [
    {
      icon: Cpu,
      title: 'Resilient Signal Ingestion',
      description: 'Parses job specifications and status signals cleanly with rate-limit aware fallback pipelines.',
      tag: 'ARCHITECTURE'
    },
    {
      icon: Target,
      title: 'Urgency Priority Engine',
      description: 'Algorithmically ranks your active applications by stage timeline, interview countdowns, and idle follow-up windows.',
      tag: 'ALGORITHM'
    },
    {
      icon: Zap,
      title: 'One-Click Action Triggers',
      description: 'Open dedicated prep checklists, follow-up draft prompts, and recruiter context instantly without context switching.',
      tag: 'WORKFLOW'
    },
    {
      icon: Moon,
      title: 'Native Dark Mode Support',
      description: 'Flawless dark mode implementation built with accessible contrast and custom CSS color variables.',
      tag: 'DESIGN CRAFT'
    },
    {
      icon: Smartphone,
      title: 'Strict Responsive Engine',
      description: 'Tested from 390px mobile viewports up to 1440px+ ultra-wide desktop monitors without horizontal spill.',
      tag: 'RESPONSIVE'
    },
    {
      icon: ShieldCheck,
      title: 'Honest Engineering Polish',
      description: 'Zero fake metric counters, zero fabricated testimonials. Built strictly around real candidate workflows.',
      tag: 'HONESTY'
    }
  ];

  return (
    <section id="features" ref={ref} className="py-16 md:py-24 bg-slate-50 dark:bg-[#0B0F17] transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
            BUILT LIKE WE MEAN IT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered for High-Signal Job Seekers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Every component is crafted for speed, focus, and clarity. No bloatware, no fluff.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div 
                key={idx}
                className="group rounded-2xl p-6 bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
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
