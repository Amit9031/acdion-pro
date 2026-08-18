import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckSquare, Square, Calendar, CheckCircle2, RotateCcw } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ActionPanel({ role, onClose, onToggleChecklist, onToggleComplete }) {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-zinc-950/40 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        className="relative w-full max-w-lg bg-[#FAF9F5] dark:bg-[#18191E] h-full shadow-2xl border-l border-[#E8E5DA] dark:border-[#282A30] flex flex-col z-10 overflow-y-auto"
      >
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#FAF9F5] dark:bg-[#18191E] border-b border-[#E8E5DA] dark:border-[#282A30] p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge type={role.completed ? 'completed' : role.priorityType} label={role.completed ? 'ACTION COMPLETED' : role.priority} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#18181B] dark:text-[#F4F2EB]">
              {role.title}
            </h2>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              {role.company} · {role.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-[#18181B] dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 text-xs">
          
          {/* Priority Goal */}
          <div className="p-4 rounded-xl paper-card bg-white dark:bg-[#121316]">
            <h3 className="text-xs font-mono font-bold uppercase text-terracotta-500 mb-1">
              ⚡ PRESCRIPTIVE NEXT STEP
            </h3>
            <p className="text-sm font-semibold text-[#18181B] dark:text-[#F4F2EB]">
              {role.nextAction}
            </p>
          </div>

          {/* Timeline */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta-500" />
              Stage Progress Timeline
            </h4>
            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E8E5DA] dark:before:bg-[#282A30]">
              {role.timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between text-xs font-mono">
                  <div className={`absolute -left-[23px] w-3 h-3 rounded-full border-2 ${
                    step.current 
                      ? 'bg-terracotta-500 border-terracotta-300' 
                      : step.done 
                      ? 'bg-[#18181B] dark:bg-[#F4F2EB] border-transparent' 
                      : 'bg-zinc-300 dark:bg-zinc-700 border-transparent'
                  }`} />
                  <span className={`font-semibold ${step.current ? 'text-terracotta-500' : 'text-zinc-700 dark:text-zinc-300'}`}>
                    {step.event}
                  </span>
                  <span className="text-zinc-400 text-[11px]">{step.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3 font-mono">
              Preparation Checklist
            </h4>
            <div className="space-y-2">
              {role.checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onToggleChecklist(role.id, item.id)}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                    item.done
                      ? 'bg-zinc-100/50 dark:bg-zinc-900/40 border-[#E8E5DA] dark:border-[#282A30] text-zinc-400 line-through'
                      : 'paper-card text-zinc-800 dark:text-zinc-200 hover:border-terracotta-500'
                  }`}
                >
                  {item.done ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-terracotta-500 shrink-0" />
                  )}
                  <span className="text-xs font-medium font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3 font-mono">
              Recruiter & Interviewer Notes
            </h4>
            <ul className="space-y-2">
              {role.notes.map((note, idx) => (
                <li key={idx} className="p-3 rounded-xl paper-card font-mono text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  💡 {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#FAF9F5] dark:bg-[#18191E] border-t border-[#E8E5DA] dark:border-[#282A30] p-4 flex items-center justify-between gap-3 font-mono text-xs">
          <button
            onClick={() => onToggleComplete(role.id)}
            className={`flex-1 py-2.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
              role.completed
                ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                : 'bg-[#18181B] dark:bg-[#F4F2EB] text-white dark:text-[#18181B] hover:bg-terracotta-500 dark:hover:bg-terracotta-500 dark:hover:text-white'
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
            className="px-4 py-2.5 rounded-xl paper-card font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            Done
          </button>
        </div>

      </motion.div>
    </div>
  );
}
