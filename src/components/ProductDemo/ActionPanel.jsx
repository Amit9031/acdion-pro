import React from 'react';
import { X, CheckSquare, Square, Calendar, Briefcase, FileText, CheckCircle2, RotateCcw } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ActionPanel({ role, onClose, onToggleChecklist, onToggleComplete }) {
  if (!role) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      {/* Overlay Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Body */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#131926] h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col z-10 overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-[#131926]/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge type={role.completed ? 'completed' : role.priorityType} label={role.completed ? 'ACTION COMPLETED' : role.priority} />
              <span className="text-xs text-slate-400 font-mono">ID: {role.id}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{role.title}</span>
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {role.company} · {role.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          
          {/* Priority Goal Box */}
          <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80">
            <h3 className="text-xs font-mono font-bold uppercase text-blue-700 dark:text-blue-300 mb-1">
              ⚡ SINGLE CLEAR NEXT STEP
            </h3>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {role.nextAction}
            </p>
          </div>

          {/* Application Timeline */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              Stage Progress Timeline
            </h4>
            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {role.timeline.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between text-xs">
                  <div className={`absolute -left-[23px] w-3 h-3 rounded-full border-2 ${
                    step.current 
                      ? 'bg-blue-600 border-blue-300 dark:border-blue-900 animate-pulse' 
                      : step.done 
                      ? 'bg-emerald-500 border-emerald-200 dark:border-emerald-950' 
                      : 'bg-slate-300 dark:bg-slate-700 border-slate-200 dark:border-slate-800'
                  }`} />
                  <span className={`font-semibold ${step.current ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                    {step.event}
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">{step.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Checklist */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-500" />
              Preparation Checklist
            </h4>
            <div className="space-y-2">
              {role.checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onToggleChecklist(role.id, item.id)}
                  className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all ${
                    item.done
                      ? 'bg-slate-100/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400 line-through'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400'
                  }`}
                >
                  {item.done ? (
                    <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Context Notes */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-500" />
              Recruiter & Interviewer Context Notes
            </h4>
            <ul className="space-y-2">
              {role.notes.map((note, idx) => (
                <li key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
                  💡 {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-[#0E131F] border-t border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between gap-3">
          <button
            onClick={() => onToggleComplete(role.id)}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors ${
              role.completed
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20'
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
                Mark Action Completed
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
