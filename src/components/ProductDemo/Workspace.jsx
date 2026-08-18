import React, { useState } from 'react';
import PriorityCard from './PriorityCard';
import ActionPanel from './ActionPanel';
import { Sparkles, RotateCcw, Filter, Flame, CheckCircle, Clock } from 'lucide-react';

export default function Workspace({ demoItems, setDemoItems, onResetDemo }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedRoleForPanel, setSelectedRoleForPanel] = useState(null);

  // Filter items
  const filteredItems = demoItems.filter(item => {
    if (activeFilter === 'HIGH') return item.priorityType === 'high';
    if (activeFilter === 'FOLLOW') return item.priorityType === 'warning';
    if (activeFilter === 'SAVED') return item.priorityType === 'neutral';
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

    // Update open panel role if active
    if (selectedRoleForPanel && selectedRoleForPanel.id === roleId) {
      setSelectedRoleForPanel(prev => ({
        ...prev,
        checklist: prev.checklist.map(c => c.id === checklistId ? { ...c, done: !c.done } : c)
      }));
    }
  };

  return (
    <section id="workspace" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0E131F] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              LIVE INTERACTIVE PRODUCT DEMO
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              SIGNALDESK WORKSPACE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              This is the live focus canvas. Click <span className="font-semibold text-blue-600 dark:text-blue-400">[ Prepare → ]</span> or check off tasks to experience the real-time queue.
            </p>
          </div>

          {/* Quick controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={onResetDemo}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
              title="Reset sample state"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              Reset Workspace State
            </button>
          </div>
        </div>

        {/* Workspace Shell Container */}
        <div className="rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Top Bar Metrics & Filters */}
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-2 shrink-0">
                <Filter className="w-3 h-3" />
                Filter:
              </span>
              <button
                onClick={() => setActiveFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  activeFilter === 'ALL'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                All Focus ({demoItems.length})
              </button>

              <button
                onClick={() => setActiveFilter('HIGH')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                  activeFilter === 'HIGH'
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Flame className="w-3 h-3 text-red-500 fill-red-500" />
                High Priority ({highCount})
              </button>

              <button
                onClick={() => setActiveFilter('FOLLOW')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                  activeFilter === 'FOLLOW'
                    ? 'bg-amber-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Clock className="w-3 h-3 text-amber-500" />
                Follow Ups ({followCount})
              </button>

              <button
                onClick={() => setActiveFilter('DONE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                  activeFilter === 'DONE'
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                Completed ({doneCount})
              </button>
            </div>

            {/* Micro Live Summary */}
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Auto-syncing signals
              </span>
            </div>
          </div>

          {/* Cards Grid / List */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
              <div className="col-span-full py-12 text-center text-slate-400 dark:text-slate-500">
                <p className="text-sm font-medium">No roles match the selected filter tab.</p>
                <button
                  onClick={() => setActiveFilter('ALL')}
                  className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View all roles →
                </button>
              </div>
            )}
          </div>

          {/* Bottom Bar Info */}
          <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span>SIGNALDESK ENGINE v2.4</span>
            <span>NO FAKE TESTIMONIALS · 100% REAL PRODUCT INTERACTION</span>
          </div>
        </div>

      </div>

      {/* Slide-out Action Panel Modal */}
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
