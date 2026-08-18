import React from 'react';
import { CheckCircle2, Circle, ArrowUpRight } from 'lucide-react';

export default function FocusCard({ demoItems, onSelectTask }) {
  const pendingItems = demoItems.filter(item => !item.completed);
  const completedCount = demoItems.filter(item => item.completed).length;

  return (
    <div className="w-full max-w-md rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-[11px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            TODAY WORKSPACE QUEUE
          </span>
        </div>
        <span className="font-mono text-[11px] text-zinc-400">
          {pendingItems.length} PENDING
        </span>
      </div>

      {/* Main Focus Headline */}
      <div className="mb-4">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {pendingItems.length > 0 ? `${pendingItems.length} actions worth your time` : 'All focus tasks cleared!'}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
          {completedCount > 0 
            ? `${completedCount} action${completedCount === 1 ? '' : 's'} completed today` 
            : 'Prioritized automatically by stage deadline and idle response time.'}
        </p>
      </div>

      {/* Action Items List */}
      <div className="space-y-2">
        {demoItems.slice(0, 3).map((item) => {
          const isDone = item.completed;
          return (
            <div
              key={item.id}
              onClick={() => onSelectTask(item)}
              className={`group flex items-center justify-between p-3 rounded-lg border text-xs transition-colors cursor-pointer ${
                isDone 
                  ? 'bg-zinc-50 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800/60 text-zinc-400 dark:text-zinc-600 line-through'
                  : 'bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0" />
                )}
                <div className="min-w-0">
                  <div className="font-medium truncate text-xs">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{item.company}</span>
                    <span className="mx-1 text-zinc-400">•</span>
                    <span>{item.title}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono truncate mt-0.5">
                    → {item.nextAction}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors shrink-0 ml-2" />
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>Click card to test action</span>
        <button 
          onClick={() => {
            const el = document.getElementById('workspace');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
        >
          Full Canvas ↓
        </button>
      </div>

    </div>
  );
}
