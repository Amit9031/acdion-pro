import React from 'react';
import { AlertCircle, Clock, Bookmark, CheckCircle2 } from 'lucide-react';

export default function StatusBadge({ type, label }) {
  if (type === 'high') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
        <AlertCircle className="w-3 h-3 text-red-500" />
        {label || 'HIGH PRIORITY'}
      </span>
    );
  }

  if (type === 'warning') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
        <Clock className="w-3 h-3 text-amber-500" />
        {label || 'FOLLOW UP'}
      </span>
    );
  }

  if (type === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
        {label || 'COMPLETED'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20">
      <Bookmark className="w-3 h-3 text-slate-400" />
      {label || 'SAVED ROLE'}
    </span>
  );
}
