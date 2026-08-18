import React from 'react';
import StatusBadge from './StatusBadge';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';

export default function PriorityCard({ role, onToggleComplete, onOpenActionPanel }) {
  const isDone = role.completed;

  return (
    <div 
      className={`rounded-lg p-4 md:p-5 transition-colors border ${
        isDone
          ? 'bg-zinc-50/50 dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-800/60 opacity-70'
          : 'bg-white dark:bg-[#121215] border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
              {role.company}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              {role.location}
            </span>
          </div>
          <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
            {role.title}
          </h3>
        </div>

        <StatusBadge 
          type={isDone ? 'completed' : role.priorityType} 
          label={isDone ? 'COMPLETED' : role.priority} 
        />
      </div>

      {/* Salary & Idle time */}
      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-3">
        <span>{role.salary}</span>
        <span>•</span>
        <span className="text-zinc-600 dark:text-zinc-300">{role.status}</span>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 min-w-0">
          <button 
            onClick={() => onToggleComplete(role.id)}
            className="text-zinc-400 hover:text-emerald-500 transition-colors focus:outline-none shrink-0"
            title={isDone ? "Mark pending" : "Mark completed"}
          >
            {isDone ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            ) : (
              <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-700 hover:text-zinc-500" />
            )}
          </button>
          <span className="truncate font-mono text-[11px]">
            <span className="text-zinc-400">NEXT:</span> {role.nextAction}
          </span>
        </div>

        <button
          onClick={() => onOpenActionPanel(role)}
          className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors shrink-0 flex items-center justify-center gap-1.5 ${
            isDone
              ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
              : 'bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900'
          }`}
        >
          <span>{role.actionButtonText}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
