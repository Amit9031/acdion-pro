import React from 'react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';

export default function PriorityCard({ role, onToggleComplete, onOpenActionPanel }) {
  const isDone = role.completed;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -2 }}
      className={`rounded-xl p-5 transition-colors paper-card ${
        isDone
          ? 'opacity-65'
          : 'hover:border-terracotta-500/50'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-0.5 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-bold text-[#18181B] dark:text-[#F4F2EB]">{role.company}</span>
            <span>•</span>
            <span>{role.location}</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#18181B] dark:text-[#F4F2EB]">
            {role.title}
          </h3>
        </div>

        <StatusBadge 
          type={isDone ? 'completed' : role.priorityType} 
          label={isDone ? 'COMPLETED' : role.priority} 
        />
      </div>

      {/* Salary & Idle time */}
      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3 flex flex-wrap items-center gap-3">
        <span>{role.salary}</span>
        <span>•</span>
        <span className="text-[#18181B] dark:text-zinc-300 font-semibold">{role.status}</span>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#E8E5DA] dark:border-[#282A30]">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 min-w-0 font-mono">
          <button 
            onClick={() => onToggleComplete(role.id)}
            className="text-zinc-400 hover:text-terracotta-500 transition-colors focus:outline-none shrink-0"
            title={isDone ? "Mark pending" : "Mark completed"}
          >
            {isDone ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Circle className="w-4 h-4 text-terracotta-500" />
            )}
          </button>
          <span className="truncate text-[11px]">
            <span className="font-bold text-terracotta-500">NEXT:</span> {role.nextAction}
          </span>
        </div>

        <button
          onClick={() => onOpenActionPanel(role)}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors shrink-0 flex items-center justify-center gap-1.5 ${
            isDone
              ? 'bg-[#F4F2EB] dark:bg-zinc-800 text-zinc-500'
              : 'bg-[#18181B] dark:bg-[#F4F2EB] text-white dark:text-[#18181B] hover:bg-terracotta-500 dark:hover:bg-terracotta-500 dark:hover:text-white'
          }`}
        >
          <span>{role.actionButtonText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
