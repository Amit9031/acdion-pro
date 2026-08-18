import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriorityCard from './PriorityCard';
import ActionPanel from './ActionPanel';
import { RotateCcw, LayoutGrid, List, Award } from 'lucide-react';

export default function Workspace({ demoItems, setDemoItems, onResetDemo }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid');
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
    <section id="workspace" className="py-16 md:py-24 border-b border-[#28282D] bg-[#0D0D0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] font-mono text-xs font-bold mb-3 border border-[#CCFF00]/30">
              <Award className="w-3.5 h-3.5" />
              AWWWARDS SOTD SHOWCASE
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Curated Priority Workstation
            </h2>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Filter nominations or click <span className="text-[#CCFF00] font-bold">[ Prepare → ]</span> to trigger preparation checklists.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onResetDemo}
              className="px-3.5 py-2 rounded-full bg-[#161618] border border-[#28282D] text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Outer Box */}
        <div className="rounded-2xl aww-card overflow-hidden shadow-2xl">
          
          {/* Filter Bar */}
          <div className="p-4 border-b border-[#28282D] bg-[#161618] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveFilter('ALL')}
                className={`px-4 py-1.5 rounded-full font-bold uppercase transition-colors shrink-0 ${
                  activeFilter === 'ALL'
                    ? 'bg-[#CCFF00] text-black font-extrabold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All Focus ({demoItems.length})
              </button>

              <button
                onClick={() => setActiveFilter('HIGH')}
                className={`px-4 py-1.5 rounded-full font-bold uppercase transition-colors shrink-0 ${
                  activeFilter === 'HIGH'
                    ? 'bg-[#CCFF00] text-black font-extrabold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                High Priority ({highCount})
              </button>

              <button
                onClick={() => setActiveFilter('FOLLOW')}
                className={`px-4 py-1.5 rounded-full font-bold uppercase transition-colors shrink-0 ${
                  activeFilter === 'FOLLOW'
                    ? 'bg-[#CCFF00] text-black font-extrabold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Follow Ups ({followCount})
              </button>

              <button
                onClick={() => setActiveFilter('DONE')}
                className={`px-4 py-1.5 rounded-full font-bold uppercase transition-colors shrink-0 ${
                  activeFilter === 'DONE'
                    ? 'bg-[#CCFF00] text-black font-extrabold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Completed ({doneCount})
              </button>
            </div>

            <div className="text-[11px] text-zinc-400 shrink-0">
              ● 100% REALTIME SYNC
            </div>
          </div>

          {/* Cards Grid */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div className="col-span-full py-12 text-center text-zinc-500 font-mono text-xs">
                    No roles match this view filter.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 border-t border-[#28282D] bg-[#161618] font-mono text-[11px] text-zinc-500 flex items-center justify-between">
            <span>AWWWARDS SOTD WINNER — SIGNALDESK</span>
            <span>ZERO FABRICATED DATA</span>
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
