import React from 'react';

export default function StatusBadge({ type, label }) {
  if (type === 'high') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wide bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
        {label || 'HIGH PRIORITY'}
      </span>
    );
  }

  if (type === 'warning') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wide bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
        {label || 'FOLLOW UP'}
      </span>
    );
  }

  if (type === 'completed') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
        {label || 'COMPLETED'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wide bg-zinc-100 text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
      {label || 'SAVED ROLE'}
    </span>
  );
}
