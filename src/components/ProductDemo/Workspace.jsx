import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriorityCard from './PriorityCard';
import ActionPanel from './ActionPanel';
import { Sparkles, RotateCcw, Filter, Flame, CheckCircle, Clock } from 'lucide-react';

export default function Workspace({ demoItems, setDemoItems, onResetDemo }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedRoleForPanel, setSelectedRoleForPanel] = useState(null);

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

    if (selectedRoleForPanel && selectedRoleForPanel.id === roleId) {
      setSelectedRoleForPanel(prev => ({
        ...prev,
        checklist: prev.checklist.map(c => c.id === checklistId ? { ...c, done: !c.done } : c)
      }));
    }
  };

  const filterTabs = [
    { id: 'ALL', label: `All Focus (${demoItems.length})`, icon: null },
    { id: 'HIGH', label: `High Priority (${highCount})`, icon: Flame, iconColor: 'text-red-500 fill-red-500' },
    { id: 'FOLLOW', label: `Follow Ups (${followCount})`, icon: Clock, iconColor: 'text-amber-500' },
    { id: 'DONE', label: `Completed (${doneCount})`, icon: CheckCircle, iconColor: 'text-emerald-500' },
  ];

  return (
    <section id="workspace" className="py-16 md:py-24 bg-slate-100/70 dark:bg-[#0E131F] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold mb-3 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              LIVE INTERACTIVE CANVAS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              SIGNALDESK WORKSPACE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Click <span className="font-semibold text-blue-600 dark:text-blue-400">[ Prepare → ]</span> or toggle task checkboxes to experience real-time queue synchronization.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onResetDemo}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm self-start md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            Reset State
          </motion.button>
        </div>

        {/* Outer Workspace Shell */}
        <div className="rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Animated Filter Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 relative">
              {filterTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 ${
                      isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.iconColor}`} />}
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Real-time focus engine</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 min-h-[300px]">
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
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-16 text-center text-slate-400 dark:text-slate-500 font-mono text-xs"
                >
                  No tasks match the active filter.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Bar */}
          <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span>SIGNALDESK FOCUS ENGINE v2.4</span>
            <span>ZERO FAKE DATA GUARANTEE</span>
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
