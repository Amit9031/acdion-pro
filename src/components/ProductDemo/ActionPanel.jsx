import React from 'react';
import { X, CheckSquare, Square, Calendar, CheckCircle2, RotateCcw } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ActionPanel({ role, onClose, onToggleChecklist, onToggleComplete }) {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-zinc-950/50 backdrop-blur-xs transition-opacity">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white dark:bg-[#121215] h-full shadow-xl border-l border-zinc-200 dark:border-zinc-800 flex flex-col z-10 overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-[#121215] border-b border-zinc-200 dark:border-zinc-800 p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <StatusBadge type={role.completed ? 'completed' : role.priorityType} label={role.completed ? 'ACTION COMPLETED' : role.priority} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              {role.title}
            </h2>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              {role.company} · {role.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 space-y-6 flex-1 text-xs">
          
          {/* Action Focus */}
          <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
            <div className="font-mono text-[10px] uppercase font-bold text-zinc-400 mb-1">
              PRESCRIPTIVE NEXT ACTION
            </div>
            <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
              {role.nextAction}
            </p>
          </div>

          {/* Timeline */}
          <div>
            <div className="font-mono text-[11px] uppercase font-bold text-zinc-400 mb-3 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              Stage Progress Timeline
            </div>
            <div className="relative pl-5 space-y-3 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
              {role.timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between text-xs font-mono">
                  <div className={`absolute -left-[17px] w-2 h-2 rounded-full ${
                    step.current 
                      ? 'bg-blue-600 dark:bg-blue-400 ring-2 ring-blue-100 dark:ring-blue-950' 
                      : step.done 
                      ? 'bg-zinc-900 dark:bg-zinc-100' 
                      : 'bg-zinc-300 dark:bg-zinc-700'
                  }`} />
                  <span className={step.current ? 'font-bold text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400'}>
                    {step.event}
                  </span>
                  <span className="text-zinc-400 text-[11px]">{step.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div>
            <div className="font-mono text-[11px] uppercase font-bold text-zinc-400 mb-3">
              Preparation Checklist
            </div>
            <div className="space-y-2 font-mono">
              {role.checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onToggleChecklist(role.id, item.id)}
                  className={`p-2.5 rounded border flex items-center gap-2.5 cursor-pointer transition-colors ${
                    item.done
                      ? 'bg-zinc-50 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 text-zinc-400 line-through'
                      : 'bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  {item.done ? (
                    <CheckSquare className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100 shrink-0" />
                  ) : (
                    <Square className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  )}
                  <span className="text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <div className="font-mono text-[11px] uppercase font-bold text-zinc-400 mb-3">
              Context Notes
            </div>
            <ul className="space-y-2">
              {role.notes.map((note, idx) => (
                <li key={idx} className="p-3 rounded bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-[11px] leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between gap-3">
          <button
            onClick={() => onToggleComplete(role.id)}
            className={`flex-1 py-2 rounded font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-2 ${
              role.completed
                ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white'
            }`}
          >
            {role.completed ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                Reopen Task
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mark Completed
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
