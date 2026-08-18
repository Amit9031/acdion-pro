import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriorityCard from './PriorityCard';
import ActionPanel from './ActionPanel';
import { RotateCcw } from 'lucide-react';

export default function Workspace({ demoItems, setDemoItems, onResetDemo }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedRoleForPanel, setSelectedRoleForPanel] = useState(null);

  const filteredItems = demoItems.filter(item => {
    if (activeFilter === 'HIGH') return item.priorityType === 'high';
    if (activeFilter === 'FOLLOW') return item.priorityType === 'warning';
    if (activeFilter === 'DONE') return item.completed;
    return true;
  });

  const highCount = demoItems.filter(i => i.priorityType === 'high' && !i.completed).length;
  const followCount = demoItems.filter(i => i.priorityType === 'warning' && !i.completed).length;
  const doneCount = demoItems.filter(i => i.completed).length;

  const handleToggleComplete = (roleId) => {
    setDemoItems(prev => prev.map(item => {
      if (item.id === roleId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  const handleToggleChecklist = (roleId, checklistId) => {
    setDemoItems(prev => prev.map(item => {
      if (item.id === roleId) {
        const updatedChecklist = item.checklist.map(c => c.id === checklistId ? { ...c, done: !c.done } : c);
        return { ...item, checklist: updatedChecklist };
      }
      return item;
    }));

    if (selectedRoleForPanel && selectedRoleForPanel.id === roleId) {
      setSelectedRoleForPanel(prev => ({
        ...prev,
        checklist: prev.checklist.map(c => c.id === checklistId ? { ...c, done: !c.done } : c)
      }));
    }
  };

  return (
    <section id="workspace" className="py-16 md:py-24 border-b border-[#E8E5DA] dark:border-[#282A30] bg-[#FAF9F5] dark:bg-[#111215]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="font-mono text-xs font-bold text-terracotta-500 uppercase tracking-widest mb-1">
              DEMO WORKSTATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18181B] dark:text-[#F4F2EB] tracking-tight">
              Interactive Focus Canvas
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1">
              Test queue filters or check off actions to experience real-time status distillation.
            </p>
          </div>

          <button
            onClick={onResetDemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg paper-card text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-[#18181B] dark:hover:text-[#F4F2EB] transition-colors self-start md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5 text-zinc-500" />
            Reset Queue
          </button>
        </div>

        {/* Outer Workspace Box */}
        <div className="rounded-2xl paper-card overflow-hidden shadow-sm">
          
          {/* Filter Bar */}
          <div className="p-4 border-b border-[#E8E5DA] dark:border-[#282A30] bg-[#FAF9F5]/70 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
                  activeFilter === 'ALL'
                    ? 'bg-[#18181B] text-white dark:bg-[#F4F2EB] dark:text-[#18181B]'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800'
                }`}
              >
                All Focus ({demoItems.length})
              </button>

              <button
                onClick={() => setActiveFilter('HIGH')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
                  activeFilter === 'HIGH'
                    ? 'bg-[#18181B] text-white dark:bg-[#F4F2EB] dark:text-[#18181B]'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800'
                }`}
              >
                High Priority ({highCount})
              </button>

              <button
                onClick={() => setActiveFilter('FOLLOW')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
                  activeFilter === 'FOLLOW'
                    ? 'bg-[#18181B] text-white dark:bg-[#F4F2EB] dark:text-[#18181B]'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800'
                }`}
              >
                Follow Ups ({followCount})
              </button>

              <button
                onClick={() => setActiveFilter('DONE')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0 ${
                  activeFilter === 'DONE'
                    ? 'bg-[#18181B] text-white dark:bg-[#F4F2EB] dark:text-[#18181B]'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800'
                }`}
              >
                Completed ({doneCount})
              </button>
            </div>

            <div className="text-[11px] text-zinc-400 shrink-0">
              ● Client state synchronized
            </div>
          </div>

          {/* Cards Grid */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                filteredItems.map((role) => (
                  <PriorityCard
                    key={role.id}
                    role={role}
                    onToggleComplete={handleToggleComplete}
                    onOpenActionPanel={(r) => setSelectedRoleForPanel(r)}
                  />
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-zinc-400 font-mono text-xs">
                  No roles match this view tab.
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Footer Stamp */}
          <div className="px-6 py-3 border-t border-[#E8E5DA] dark:border-[#282A30] bg-[#FAF9F5] dark:bg-zinc-900/30 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
            <span>SIGNALDESK ENGINE</span>
            <span>ZERO FABRICATED METRICS</span>
          </div>

        </div>

      </div>

      {/* Action Drawer Modal */}
      {selectedRoleForPanel && (
        <ActionPanel
          role={selectedRoleForPanel}
          onClose={() => setSelectedRoleForPanel(null)}
          onToggleChecklist={handleToggleChecklist}
          onToggleComplete={(id) => {
            handleToggleComplete(id);
            setSelectedRoleForPanel(prev => prev ? { ...prev, completed: !prev.completed } : null);
          }}
        />
      )}
    </section>
  );
}
