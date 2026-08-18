import React from 'react';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge';
import { Building2, MapPin, DollarSign, ArrowRight, CheckCircle2, Circle, Clock } from 'lucide-react';

export default function PriorityCard({ role, onToggleComplete, onOpenActionPanel }) {
  const isDone = role.completed;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl p-5 md:p-6 transition-all border ${
        isDone
          ? 'bg-slate-50/70 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 opacity-75'
          : role.priorityType === 'high'
          ? 'bg-white dark:bg-[#131926] border-blue-500/30 dark:border-blue-500/30 shadow-lg shadow-blue-500/5 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10'
          : 'bg-white dark:bg-[#131926] border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
      }`}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 shrink-0">
            {role.logo}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {role.company}
              </span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {role.title}
            </h3>
          </div>
        </div>

        <StatusBadge 
          type={isDone ? 'completed' : role.priorityType} 
          label={isDone ? 'COMPLETED' : role.priority} 
        />
      </div>

      {/* Meta Specs */}
      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          {role.location}
        </span>
        <span className="flex items-center gap-1">
          <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
          {role.salary}
        </span>
      </div>

      {/* Current Stage */}
      <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
        <div className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          Stage Signal
        </div>
        <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
          {role.status}
        </p>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 min-w-0">
          <button 
            onClick={() => onToggleComplete(role.id)}
            className="p-1 text-slate-400 hover:text-emerald-500 transition-colors focus:outline-none shrink-0"
            title={isDone ? "Mark pending" : "Mark action complete"}
          >
            {isDone ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            ) : (
              <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-slate-400" />
            )}
          </button>
          <span className="truncate">
            <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">Next:</span> {role.nextAction}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onOpenActionPanel(role)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
            isDone
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300'
              : role.priorityType === 'high'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
              : 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
          }`}
        >
          <span>{role.actionButtonText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
