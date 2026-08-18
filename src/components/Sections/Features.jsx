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
    <section id="features" ref={ref} className="py-20 md:py-28 bg-[#FAFAFA] text-[#111111] border-b border-[#E2E2E2]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#222222] px-2.5 py-1 rounded bg-[#EAEAEA] border border-[#D5D5D5] inline-block mb-3">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight uppercase leading-tight">
            Engineered Specifications
          </h2>
        </div>

        {/* Specs Grid - Dark High Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          {specs.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-[#161618] text-white border border-[#28282D] shadow-xl"
            >
              <div className="text-[10px] text-[#CCFF00] font-extrabold mb-2">
                {item.code}
              </div>
              <h3 className="font-bold text-base text-white font-sans mb-1">
                {item.title}
              </h3>
              <p className="text-neutral-300 font-sans leading-relaxed text-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
