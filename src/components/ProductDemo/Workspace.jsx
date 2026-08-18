import React, { useState } from 'react';
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
    <section id="workspace" className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
              LIVE DEMO WORKSPACE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Interactive Signal Queue
            </h2>
          </div>

          <button
            onClick={onResetDemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors shadow-sm self-start md:self-auto"
          >
            <RotateCcw className="w-3 h-3 text-zinc-500" />
            Reset Demo State
          </button>
        </div>

        {/* Workspace Canvas Container */}
        <div className="rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          
          {/* Filter Bar */}
          <div className="p-3 sm:p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveFilter('ALL')}
                className={`px-3 py-1 rounded transition-colors shrink-0 ${
                  activeFilter === 'ALL'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
                }`}
              >
                All ({demoItems.length})
              </button>

              <button
                onClick={() => setActiveFilter('HIGH')}
                className={`px-3 py-1 rounded transition-colors shrink-0 ${
                  activeFilter === 'HIGH'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
                }`}
              >
                High Priority ({highCount})
              </button>

              <button
                onClick={() => setActiveFilter('FOLLOW')}
                className={`px-3 py-1 rounded transition-colors shrink-0 ${
                  activeFilter === 'FOLLOW'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
                }`}
              >
                Follow Ups ({followCount})
              </button>

              <button
                onClick={() => setActiveFilter('DONE')}
                className={`px-3 py-1 rounded transition-colors shrink-0 ${
                  activeFilter === 'DONE'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
                }`}
              >
                Completed ({doneCount})
              </button>
            </div>

            <div className="text-[11px] text-zinc-400 shrink-0">
              ● 100% Client-State Responsive
            </div>
          </div>

          {/* Cards Grid */}
          <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
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
                No items match this filter view.
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2.5 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
            <span>SIGNALDESK FOCUS ENGINE</span>
            <span>ZERO FAKE DATA</span>
          </div>

        </div>

      </div>

      {/* Action Drawer Panel */}
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
