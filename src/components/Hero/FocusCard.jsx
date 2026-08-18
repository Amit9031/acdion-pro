import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ArrowUpRight } from 'lucide-react';

export default function FocusCard({ demoItems, onSelectTask }) {
  const pendingItems = demoItems.filter(item => !item.completed);
  const completedCount = demoItems.filter(item => item.completed).length;

  return (
    <div className="w-full max-w-md rounded-2xl paper-card p-6 shadow-sm relative font-sans">
      {/* Accent Stamp */}
      <div className="flex items-center justify-between border-b border-[#E8E5DA] dark:border-[#282A30] pb-3.5 mb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500" />
          <span className="font-bold text-[#18181B] dark:text-[#F4F2EB] uppercase tracking-wider text-[11px]">
            FOCUS QUEUE
          </span>
        </div>
        <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">
          {pendingItems.length} PENDING
        </span>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h3 className="font-serif text-2xl font-bold text-[#18181B] dark:text-[#F4F2EB]">
          {pendingItems.length > 0 ? `${pendingItems.length} actions worth your time today` : 'Queue cleared!'}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
          {completedCount > 0 
            ? `${completedCount} action${completedCount === 1 ? '' : 's'} completed today.`
            : 'Prioritized automatically by interview deadline and idle response days.'}
        </p>
      </div>

      {/* Task Rows */}
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
                className={`group flex items-center justify-between p-3.5 rounded-xl border text-xs transition-colors cursor-pointer ${
                  isDone 
                    ? 'bg-zinc-100/50 dark:bg-zinc-900/40 border-[#E8E5DA] dark:border-[#282A30] text-zinc-400 dark:text-zinc-500 line-through'
                    : item.priorityType === 'high'
                    ? 'bg-[#FAF9F5] dark:bg-[#1E2026] border-terracotta-500/40 text-[#18181B] dark:text-[#F4F2EB]'
                    : 'bg-[#FAF9F5]/60 dark:bg-[#18191E] border-[#E8E5DA] dark:border-[#282A30] text-[#18181B] dark:text-[#F4F2EB]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-terracotta-500 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <div className="font-semibold text-xs truncate">
                      <span className="font-bold">{item.company}</span>
                      <span className="mx-1 text-zinc-400">•</span>
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono truncate mt-0.5">
                      → {item.nextAction}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-terracotta-500 transition-colors shrink-0 ml-2" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-[#E8E5DA] dark:border-[#282A30] flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>Click card to launch workspace</span>
        <button 
          onClick={() => {
            const el = document.getElementById('workspace');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-terracotta-500 font-bold hover:underline"
        >
          Full Workstation ↓
        </button>
      </div>
    </div>
  );
}
