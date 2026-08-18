import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ArrowUpRight, Flame, Sparkles } from 'lucide-react';

export default function FocusCard({ demoItems, onSelectTask }) {
  const pendingItems = demoItems.filter(item => !item.completed);
  const completedCount = demoItems.filter(item => item.completed).length;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-md rounded-2xl glass-card p-6 shadow-2xl shadow-blue-500/10 border border-slate-200/80 dark:border-slate-800 relative overflow-hidden"
    >
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ring-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            TODAY FOCUS QUEUE
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{pendingItems.length} urgent action{pendingItems.length === 1 ? '' : 's'}</span>
        </div>
      </div>

      {/* Headline */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>{pendingItems.length > 0 ? `${pendingItems.length} actions worth your time` : 'All focus tasks cleared!'}</span>
          {pendingItems.length === 0 && <Sparkles className="w-5 h-5 text-amber-400" />}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {completedCount > 0 
            ? `You completed ${completedCount} action${completedCount === 1 ? '' : 's'} today. Great momentum.`
            : 'Prioritized automatically by stage deadline and idle time.'}
        </p>
      </div>

      {/* Animated Task List */}
      <div className="space-y-3">
        <AnimatePresence>
          {demoItems.slice(0, 3).map((item) => {
            const isDone = item.completed;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectTask(item)}
                className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isDone 
                    ? 'bg-slate-100/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 line-through'
                    : item.priorityType === 'high'
                    ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800/80 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/60 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <Circle className={`w-4 h-4 shrink-0 ${item.priorityType === 'high' ? 'text-blue-500 fill-blue-500/20' : 'text-slate-400'}`} />
                  )}
                  <div className="min-w-0">
                    <div className="font-semibold text-xs truncate flex items-center gap-1.5">
                      <span className="text-slate-900 dark:text-white font-bold">{item.company}</span>
                      <span className="text-slate-400 dark:text-slate-500 font-normal">•</span>
                      <span className="truncate">{item.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5 font-mono">
                      ● {item.nextAction}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
          Click card to open workspace
        </span>
        <button 
          onClick={() => {
            const el = document.getElementById('workspace');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
        >
          Full Canvas ↓
        </button>
      </div>

    </motion.div>
  );
}
