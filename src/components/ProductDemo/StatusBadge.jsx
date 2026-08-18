import React from 'react';

export default function StatusBadge({ type, label }) {
  if (type === 'high') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-terracotta-500 text-white shadow-xs">
        {label || 'HIGH PRIORITY'}
      </span>
    );
  }

  if (type === 'warning') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F4F2EB] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-[#E0DDD1] dark:border-zinc-700">
        {label || 'FOLLOW UP'}
      </span>
    );
  }

  if (type === 'completed') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-700 text-white dark:bg-emerald-800">
        {label || 'COMPLETED'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F4F2EB] text-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-400 border border-[#E0DDD1] dark:border-zinc-700">
      {label || 'SAVED ROLE'}
    </span>
  );
}
