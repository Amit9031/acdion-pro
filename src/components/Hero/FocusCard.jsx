import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ArrowUpRight } from 'lucide-react';

export default function FocusCard({ demoItems, onSelectTask }) {
  const pendingItems = demoItems.filter(item => !item.completed);
  const completedCount = demoItems.filter(item => item.completed).length;

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#161618] border border-white/10 p-5 text-white font-sans shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
          <span className="font-bold uppercase tracking-wider text-[11px] text-zinc-300">
            TODAY QUEUE
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#CCFF00] text-black font-bold text-[11px]">
          {pendingItems.length} PENDING
        </span>
      </div>

      {/* Headline */}
      <div className="mb-4">
        <h3 className="text-lg font-extrabold text-white">
          {pendingItems.length > 0 ? `${pendingItems.length} actions worth your time` : 'Queue cleared!'}
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          {completedCount > 0 
            ? `${completedCount} action${completedCount === 1 ? '' : 's'} completed today.`
            : 'Prioritized automatically by stage timeline.'}
        </p>
      </div>

      {/* Task Queue Rows */}
      <div className="space-y-2.5">
        <AnimatePresence>
          {demoItems.slice(0, 3).map((item) => {
            const isDone = item.completed;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onSelectTask(item)}
                className={`group flex items-center justify-between p-3 rounded-xl border text-xs transition-colors cursor-pointer ${
                  isDone 
                    ? 'bg-white/5 border-white/5 text-zinc-500 line-through'
                    : item.priorityType === 'high'
                    ? 'bg-[#CCFF00]/10 border-[#CCFF00]/30 text-white'
                    : 'bg-[#222222] border-white/10 text-zinc-200 hover:border-zinc-500'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 font-mono">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  )}
                  <div className="min-w-0">
                    <div className="font-bold text-xs truncate">
                      <span className="text-white">{item.company}</span>
                      <span className="mx-1 text-zinc-500">•</span>
                      <span className="text-zinc-300 font-sans">{item.title}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                      → {item.nextAction}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#CCFF00] transition-colors shrink-0 ml-2" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
        <span>Click card to test action</span>
        <button 
          onClick={() => {
            const el = document.getElementById('workspace');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[#CCFF00] font-bold hover:underline"
        >
          Full Canvas ↓
        </button>
      </div>
    </div>
  );
}
