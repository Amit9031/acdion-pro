import React from 'react';
import StatusBadge from './StatusBadge';
import { Building2, MapPin, DollarSign, ArrowRight, CheckCircle2, Circle, Clock } from 'lucide-react';

export default function PriorityCard({ role, onToggleComplete, onOpenActionPanel }) {
  const isDone = role.completed;

  return (
    <div 
      className={`group relative rounded-xl p-5 md:p-6 transition-all duration-200 border ${
        isDone
          ? 'bg-slate-50/70 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 opacity-75'
          : role.priorityType === 'high'
          ? 'bg-white dark:bg-[#131926] border-blue-200/90 dark:border-blue-900/60 shadow-md shadow-blue-500/5 hover:border-blue-500/80 hover:shadow-lg'
          : 'bg-white dark:bg-[#131926] border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-lg border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 shrink-0">
            {role.logo}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                {role.company}
              </span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              {role.title}
            </h3>
          </div>
        </div>

        {/* Priority Badge */}
        <StatusBadge 
          type={isDone ? 'completed' : role.priorityType} 
          label={isDone ? 'COMPLETED' : role.priority} 
        />
      </div>

      {/* Meta Info (Location & Salary) */}
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

      {/* Current Status Box */}
      <div className="mb-5 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-slate-400" />
          Current Stage & Idle Time
        </div>
        <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
          {role.status}
        </p>
      </div>

      {/* Action Prompt Banner & CTA */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
        {/* Next step prompt */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 min-w-0">
          <button 
            onClick={() => onToggleComplete(role.id)}
            className="p-1 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors focus:outline-none"
            title={isDone ? "Mark as pending" : "Mark action completed"}
          >
            {isDone ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            ) : (
              <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-slate-400" />
            )}
          </button>
          <span className="truncate">
            <span className="font-semibold text-blue-600 dark:text-blue-400 font-mono">Next:</span> {role.nextAction}
          </span>
        </div>

        {/* Interactive Action Button */}
        <button
          onClick={() => onOpenActionPanel(role)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 active:scale-95 ${
            isDone
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300'
              : role.priorityType === 'high'
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
          }`}
        >
          <span>{role.actionButtonText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
