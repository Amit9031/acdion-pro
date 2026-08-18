import React from 'react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';

export default function PriorityCard({ role, onToggleComplete, onOpenActionPanel }) {
  const isDone = role.completed;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -3 }}
      className={`rounded-2xl p-5 transition-all aww-card aww-card-hover ${
        isDone ? 'opacity-60' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1 font-mono text-xs text-zinc-400">
            <span className="font-bold text-white">{role.company}</span>
            <span>•</span>
            <span>{role.location}</span>
          </div>
          <h3 className="font-syne text-lg font-bold text-white">
            {role.title}
          </h3>
        </div>

        <StatusBadge 
          type={isDone ? 'completed' : role.priorityType} 
          label={isDone ? 'COMPLETED' : role.priority} 
        />
      </div>

      {/* Meta details */}
      <div className="text-xs font-mono text-zinc-400 mb-4 flex flex-wrap items-center gap-3">
        <span>{role.salary}</span>
        <span>•</span>
        <span className="text-[#CCFF00] font-semibold">{role.status}</span>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#28282D]">
        <div className="flex items-center gap-2 text-xs text-zinc-300 min-w-0 font-mono">
          <button 
            onClick={() => onToggleComplete(role.id)}
            className="text-zinc-400 hover:text-[#CCFF00] transition-colors focus:outline-none shrink-0"
            title={isDone ? "Mark pending" : "Mark completed"}
          >
            {isDone ? (
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
            ) : (
              <Circle className="w-4 h-4 text-[#CCFF00]" />
            )}
          </button>
          <span className="truncate text-[11px]">
            <span className="font-bold text-[#CCFF00]">NEXT:</span> {role.nextAction}
          </span>
        </div>

        <button
          onClick={() => onOpenActionPanel(role)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-colors shrink-0 flex items-center justify-center gap-1.5 ${
            isDone
              ? 'bg-[#1C1C1F] text-zinc-400'
              : 'bg-[#CCFF00] text-black hover:bg-white'
          }`}
        >
          <span>{role.actionButtonText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
