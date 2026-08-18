import React from 'react';
import { AlertCircle, Clock, Bookmark, CheckCircle2 } from 'lucide-react';

export default function StatusBadge({ type, label }) {
  if (type === 'high') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/80">
        <AlertCircle className="w-3 h-3 text-red-600 dark:text-red-400" />
        {label || 'HIGH PRIORITY'}
      </span>
    );
  }

  if (type === 'warning') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80">
        <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
        {label || 'FOLLOW UP'}
      </span>
    );
  }

  if (type === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
        {label || 'COMPLETED'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      <Bookmark className="w-3 h-3 text-slate-500" />
      {label || 'SAVED ROLE'}
    </span>
  );
}
