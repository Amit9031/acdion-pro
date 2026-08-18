import React from 'react';
import FocusCard from './FocusCard';
import { ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function Hero({ demoItems, onSelectTask }) {
  const scrollToWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Built for high-volume engineering & product searches</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-[1.1] mb-6">
              STOP LOSING TRACK OF <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-500">
                GOOD OPPORTUNITIES.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              SignalDesk turns your job search into a clear list of what deserves attention next.
              No tab overload. No silent ghosting. <strong className="text-slate-900 dark:text-white font-semibold">Know what to do next.</strong>
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToWorkspace}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-glow transition-all active:scale-95"
              >
                <span>[ Explore the workspace → ]</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('decisions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 hover:bg-slate-300/70 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all border border-slate-300/60 dark:border-slate-700/60"
              >
                Read Architectural Decisions
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 w-full text-xs font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero Fake Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Real-Time Focus Queue</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500 shrink-0" />
                <span>390px to 1440px Native</span>
              </div>
            </div>
          </div>

          {/* Right Hero Focus Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <FocusCard demoItems={demoItems} onSelectTask={onSelectTask} />
          </div>

        </div>
      </div>
    </section>
  );
}
