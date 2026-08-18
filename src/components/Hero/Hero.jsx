import React from 'react';
import FocusCard from './FocusCard';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ demoItems, onSelectTask }) {
  const scrollToWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-8 pb-20 bg-[#FAFAFA] text-[#111111] relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        
        {/* Site of the Day Subtitle Bar */}
        <div className="flex items-center justify-center gap-3 text-xs font-medium text-neutral-600 mb-6">
          <span>Site of the Day</span>
          <span className="px-2.5 py-0.5 rounded bg-[#EAEAEA] font-mono text-[11px] text-[#111111] font-bold">
            Aug 19, 2026
          </span>
          <span>Score <strong className="text-black font-bold">9.68</strong> of 10</span>
        </div>

        {/* Massive Bold Headline (Exact Screenshot Match) */}
        <div className="text-center mb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-[#111111] uppercase leading-none">
            SIGNALDESK
          </h1>
        </div>

        {/* Creator Credit Badges */}
        <div className="flex items-center justify-center gap-6 mb-10 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-black text-white font-mono font-bold text-[10px] flex items-center justify-center">
              AT
            </div>
            <span className="underline font-bold">Acdyon Technologies</span>
            <span className="text-[9px] font-mono font-bold uppercase text-neutral-500">PRO</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-neutral-800 text-white font-mono font-bold text-[10px] flex items-center justify-center">
              SD
            </div>
            <span className="underline font-bold">Candidate Focus Queue</span>
            <span className="text-[9px] font-mono font-bold uppercase text-neutral-500">PRO</span>
          </div>
        </div>

        {/* Dark Showcase Container */}
        <div className="rounded-2xl bg-[#0D0D0E] p-6 sm:p-10 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Showcase Info */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="px-3 py-1 rounded-full bg-[#222222] text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                ★ PRESCRIPTIVE JOB ENGINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
                Know what to do next. <br />Every single morning.
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                SignalDesk turns your job search into a clear list of what deserves attention next. No tab overload. No ghosting.
              </p>

              <button
                onClick={scrollToWorkspace}
                className="px-6 py-3.5 rounded-lg bg-white text-black font-bold text-xs hover:bg-[#CCFF00] transition-colors flex items-center gap-2 uppercase tracking-wider"
              >
                <span>[ Launch Focus Workspace → ]</span>
              </button>
            </div>

            {/* Right Interactive Focus Card */}
            <div className="lg:col-span-6 flex justify-center">
              <FocusCard demoItems={demoItems} onSelectTask={onSelectTask} />
            </div>

          </div>
        </div>

      </div>

      {/* Floating Bottom Navigation Dock (Exact Screenshot Match) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-[#222222]/95 backdrop-blur-md text-white border border-white/10 shadow-2xl text-xs font-semibold">
          <span className="px-3 font-bold text-sm">W.</span>
          <button onClick={scrollToWorkspace} className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
            Nominees
          </button>
          <button onClick={scrollToWorkspace} className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
            Workspace
          </button>
          <button onClick={() => {
            const el = document.getElementById('decisions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
            DECISIONS.md
          </button>
          <button 
            onClick={scrollToWorkspace}
            className="ml-1 px-4 py-1.5 rounded-xl bg-white text-black font-bold hover:bg-[#CCFF00] transition-colors"
          >
            Visit Sotd.
          </button>
        </div>
      </div>
    </section>
  );
}
