import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckSquare, Square, Calendar, CheckCircle2, RotateCcw } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ActionPanel({ role, onClose, onToggleChecklist, onToggleComplete }) {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/70 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        className="relative w-full max-w-lg bg-[#161618] h-full shadow-2xl border-l border-[#28282D] flex flex-col z-10 overflow-y-auto"
      >
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#161618] border-b border-[#28282D] p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge type={role.completed ? 'completed' : role.priorityType} label={role.completed ? 'ACTION COMPLETED' : role.priority} />
            </div>
            <h2 className="font-syne text-xl font-bold text-white">
              {role.title}
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              {role.company} · {role.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 text-xs">
          
          {/* Goal */}
          <div className="p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30">
            <h3 className="text-xs font-mono font-bold uppercase text-[#CCFF00] mb-1">
              ⚡ PRESCRIPTIVE NEXT STEP
            </h3>
            <p className="text-sm font-semibold text-white">
              {role.nextAction}
            </p>
          </div>

          {/* Timeline */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#CCFF00]" />
              Stage Progress Timeline
            </h4>
            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#28282D]">
              {role.timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between text-xs font-mono">
                  <div className={`absolute -left-[23px] w-3 h-3 rounded-full border-2 ${
                    step.current 
                      ? 'bg-[#CCFF00] border-black animate-pulse' 
                      : step.done 
                      ? 'bg-white border-transparent' 
                      : 'bg-zinc-700 border-transparent'
                  }`} />
                  <span className={`font-semibold ${step.current ? 'text-[#CCFF00]' : 'text-zinc-300'}`}>
                    {step.event}
                  </span>
                  <span className="text-zinc-500 text-[11px]">{step.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3">
              Preparation Checklist
            </h4>
            <div className="space-y-2">
              {role.checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onToggleChecklist(role.id, item.id)}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                    item.done
                      ? 'bg-white/5 border-white/5 text-zinc-500 line-through'
                      : 'bg-[#1C1C1F] border-[#28282D] text-zinc-200 hover:border-[#CCFF00]/50'
                  }`}
                >
                  {item.done ? (
                    <CheckSquare className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  )}
                  <span className="text-xs font-medium font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3">
              Recruiter & Interviewer Notes
            </h4>
            <ul className="space-y-2">
              {role.notes.map((note, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] font-mono text-[11px] leading-relaxed text-zinc-400">
                  💡 {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#161618] border-t border-[#28282D] p-4 flex items-center justify-between gap-3 font-mono text-xs">
          <button
            onClick={() => onToggleComplete(role.id)}
            className={`flex-1 py-2.5 rounded-full font-bold uppercase transition-colors flex items-center justify-center gap-2 ${
              role.completed
                ? 'bg-white/10 text-zinc-400'
                : 'bg-[#CCFF00] text-black hover:bg-white'
            }`}
          >
            {role.completed ? (
              <>
                <RotateCcw className="w-4 h-4" />
                Reopen Task
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Mark Completed
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#1C1C1F] border border-[#28282D] text-zinc-300 font-bold hover:border-zinc-500"
          >
            Done
          </button>
        </div>

      </motion.div>
    </div>
  );
}
