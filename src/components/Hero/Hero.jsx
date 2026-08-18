import React from 'react';
import FocusCard from './FocusCard';
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Hero({ demoItems, onSelectTask }) {
  const scrollToWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tagline Badge */}
            <div className="font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
              SIGNALDESK / JOB SEARCH FOCUS WORKSPACE
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.08] mb-6 uppercase">
              STOP LOSING TRACK OF GOOD OPPORTUNITIES.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
              SignalDesk turns your job search into a clear list of what deserves attention next.
              No tab overload. No ghosting. <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Know what to do next.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToWorkspace}
                className="px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-medium text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore the workspace →</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('decisions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-mono text-xs transition-colors border border-zinc-200 dark:border-zinc-700/60"
              >
                DECISIONS.md
              </button>
            </div>

            {/* Footer metrics */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-3 gap-4 w-full text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <div>
                <span className="block text-zinc-900 dark:text-zinc-100 font-bold text-sm">100% Real</span>
                <span>Zero fake data</span>
              </div>
              <div>
                <span className="block text-zinc-900 dark:text-zinc-100 font-bold text-sm">390px – 1440px</span>
                <span>Native responsive</span>
              </div>
              <div>
                <span className="block text-zinc-900 dark:text-zinc-100 font-bold text-sm">0 Fluff</span>
                <span>Restrained design</span>
              </div>
            </div>

          </div>

          {/* Right Column: Handcrafted Focus Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <FocusCard demoItems={demoItems} onSelectTask={onSelectTask} />
          </div>

        </div>
      </div>
    </section>
  );
}
