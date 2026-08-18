import React from 'react';

export default function StatusBadge({ type, label }) {
  if (type === 'high') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono font-extrabold uppercase tracking-wider bg-[#CCFF00] text-black">
        {label || 'HIGH PRIORITY'}
      </span>
    );
  }

  if (type === 'warning') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1C1C1F] text-amber-400 border border-amber-500/30">
        {label || 'FOLLOW UP'}
      </span>
    );
  }

  if (type === 'completed') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
        {label || 'COMPLETED'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1C1C1F] text-zinc-400 border border-[#28282D]">
      {label || 'SAVED ROLE'}
    </span>
  );
}
