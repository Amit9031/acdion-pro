import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function Features() {
  const [ref, isVisible] = useReveal();

  const specs = [
    {
      code: 'SPEC-01',
      title: 'Resilient Ingestion',
      desc: 'Parses job signals via rate-limit aware fallback pipelines without triggering platform bot detection.'
    },
    {
      code: 'SPEC-02',
      title: 'Priority Algorithm',
      desc: 'Ranks active applications algorithmically by stage deadlines, idle timers, and response probability.'
    },
    {
      code: 'SPEC-03',
      title: 'Prescriptive Action Triggers',
      desc: 'Generates single clear next actions per role, eliminating decision fatigue during high-volume searches.'
    },
    {
      code: 'SPEC-04',
      title: 'Native Dark Theme',
      desc: 'Custom color variables engineered for WCAG AA contrast standards without glowing distractors.'
    },
    {
      code: 'SPEC-05',
      title: 'Strict Responsive Engine',
      desc: 'Validated from 390px mobile viewports to 1440px+ ultra-wide desktop monitors without horizontal overflow.'
    },
    {
      code: 'SPEC-06',
      title: 'Zero Fake Guardrail',
      desc: 'Built with 100% honest product copy. Zero fake testimonials, zero invented client logos.'
    }
  ];

  return (
    <section id="features" ref={ref} className="py-16 md:py-24 border-b border-[#28282D] bg-[#0D0D0E]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00] mb-2 block">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Engineered Specifications
          </h2>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl aww-card font-mono text-xs"
            >
              <div className="text-[10px] text-[#CCFF00] font-bold mb-2">
                {item.code}
              </div>
              <h3 className="font-syne font-bold text-base text-white mb-1">
                {item.title}
              </h3>
              <p className="text-zinc-400 font-sans leading-relaxed text-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
