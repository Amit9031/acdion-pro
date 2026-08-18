import React from 'react';
import { motion } from 'framer-motion';
import FocusCard from './FocusCard';
import { ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Hero({ demoItems, onSelectTask }) {
  const scrollToWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-24 border-b border-[#E8E5DA] dark:border-[#282A30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Monospace Badge Stamp */}
            <div className="font-mono text-xs font-bold text-terracotta-500 uppercase tracking-widest mb-4 px-2.5 py-1 rounded bg-terracotta-500/10 border border-terracotta-500/20">
              SIGNALDESK / PRESCRIPTIVE FOCUS ENGINE
            </div>

            {/* Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#18181B] dark:text-[#F4F2EB] tracking-tight leading-[1.05] mb-6">
              Stop losing track of <br className="hidden sm:inline" />
              <span className="italic font-serif text-terracotta-500 underline decoration-terracotta-500/30 underline-offset-8">
                good opportunities.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8 font-sans">
              SignalDesk turns your job search into a clear list of what deserves attention next.
              No tab overload. No ghosting. <strong className="text-[#18181B] dark:text-[#F4F2EB] font-semibold">Know what to do next.</strong>
            </p>

            {/* CTA Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10 font-mono text-xs">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToWorkspace}
                className="px-6 py-3.5 rounded-xl bg-[#18181B] dark:bg-[#F4F2EB] text-white dark:text-[#18181B] font-bold shadow-md hover:bg-terracotta-500 dark:hover:bg-terracotta-500 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore the workspace →</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  const el = document.getElementById('decisions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 rounded-xl paper-card text-zinc-800 dark:text-zinc-200 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                DECISIONS.md
              </motion.button>
            </div>

            {/* Bottom Metrics */}
            <div className="pt-6 border-t border-[#E8E5DA] dark:border-[#282A30] grid grid-cols-3 gap-4 w-full text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <div>
                <span className="block text-[#18181B] dark:text-[#F4F2EB] font-bold text-sm">100% Real</span>
                <span>Zero fake data</span>
              </div>
              <div>
                <span className="block text-[#18181B] dark:text-[#F4F2EB] font-bold text-sm">390px – 1440px</span>
                <span>Native responsive</span>
              </div>
              <div>
                <span className="block text-[#18181B] dark:text-[#F4F2EB] font-bold text-sm">Prescriptive</span>
                <span>Single action queue</span>
              </div>
            </div>

          </div>

          {/* Right Column: Focus Card Desk */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <FocusCard demoItems={demoItems} onSelectTask={onSelectTask} />
          </div>

        </div>
      </div>
    </section>
  );
}
