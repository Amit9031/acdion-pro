import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriorityCard from './PriorityCard';
import ActionPanel from './ActionPanel';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

export default function Workspace({ demoItems, setDemoItems, onResetDemo }) {
  const [activePlatform, setActivePlatform] = useState('iOS'); // 'iOS' | 'Web'
  const [activeSort, setActiveSort] = useState('Latest'); // 'Latest' | 'Most popular' | 'Top rated'
  const [selectedRoleForPanel, setSelectedRoleForPanel] = useState(null);

  const filteredItems = demoItems.filter(item => {
    if (activeSort === 'Most popular') return item.priorityType === 'high';
    if (activeSort === 'Top rated') return item.completed;
    return true;
  });

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
    <section id="workspace" className="py-12 bg-[#FAFAFA] text-[#111111] border-b border-[#E2E2E2] font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        
        {/* Mobbin 4-Column Directory Layout (Exact Screenshot Replica) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 mb-10 border-b border-[#E5E5E5] text-xs">
          
          {/* Column 1: Categories */}
          <div>
            <div className="font-semibold text-neutral-400 mb-3">Categories</div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li className="hover:underline cursor-pointer">Engineering Roles</li>
              <li className="hover:underline cursor-pointer">Backend Infrastructure</li>
              <li className="hover:underline cursor-pointer">Frontend Architecture</li>
              <li className="hover:underline cursor-pointer">Product & Systems</li>
              <li className="hover:underline cursor-pointer">Staff & Lead Search</li>
            </ul>
          </div>

          {/* Column 2: Focus Tools */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-[#111111] font-bold text-sm">SignalDesk</span>
              <span className="text-[11px] font-semibold text-neutral-500">Workspace</span>
            </div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li className="hover:underline cursor-pointer">Today Focus Queue</li>
              <li className="hover:underline cursor-pointer">Search & Filter</li>
              <li className="hover:underline cursor-pointer">Stage Timeline</li>
              <li className="hover:underline cursor-pointer">Idle Response Timer</li>
            </ul>
          </div>

          {/* Column 3: Components */}
          <div>
            <div className="font-semibold text-neutral-400 mb-3">UI Components</div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li className="hover:underline cursor-pointer">Priority Cards</li>
              <li className="hover:underline cursor-pointer">Status Badges</li>
              <li className="hover:underline cursor-pointer">Action Drawers</li>
              <li className="hover:underline cursor-pointer">Checklists</li>
            </ul>
          </div>

          {/* Column 4: Candidate Flows */}
          <div>
            <div className="font-semibold text-neutral-400 mb-3">Candidate Flows</div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li className="hover:underline cursor-pointer">Recruiter Screen</li>
              <li className="hover:underline cursor-pointer">System Design Interview</li>
              <li className="hover:underline cursor-pointer">Take-home Challenge</li>
              <li className="hover:underline cursor-pointer">Follow-up Reminder</li>
              <li className="hover:underline cursor-pointer">Offer Review & Negotiation</li>
            </ul>
          </div>

        </div>

        {/* Mobbin Filter Control Bar (Exact Screenshot Replica) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-semibold">
          
          <div className="flex items-center gap-6">
            {/* iOS / Web Platform Pill */}
            <div className="p-1 rounded-full bg-[#EAEAEA] flex items-center gap-1 font-bold text-[11px]">
              <button
                onClick={() => setActivePlatform('iOS')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activePlatform === 'iOS' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                }`}
              >
                iOS
              </button>
              <button
                onClick={() => setActivePlatform('Web')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activePlatform === 'Web' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                }`}
              >
                Web
              </button>
            </div>

            {/* Sort Tabs */}
            <div className="flex items-center gap-6 font-bold text-xs">
              <button
                onClick={() => setActiveSort('Latest')}
                className={`relative py-1 transition-colors ${
                  activeSort === 'Latest' ? 'text-black border-b-2 border-black font-extrabold' : 'text-neutral-400 hover:text-black'
                }`}
              >
                Latest
              </button>

              <button
                onClick={() => setActiveSort('Most popular')}
                className={`relative py-1 transition-colors ${
                  activeSort === 'Most popular' ? 'text-black border-b-2 border-black font-extrabold' : 'text-neutral-400 hover:text-black'
                }`}
              >
                Most popular
              </button>

              <button
                onClick={() => setActiveSort('Top rated')}
                className={`relative py-1 transition-colors ${
                  activeSort === 'Top rated' ? 'text-black border-b-2 border-black font-extrabold' : 'text-neutral-400 hover:text-black'
                }`}
              >
                Top rated
              </button>
            </div>
          </div>

          {/* Right Filter Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onResetDemo}
              className="p-2 rounded-lg bg-[#EAEAEA] text-neutral-600 hover:text-black transition-colors"
              title="Reset Queue State"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setActiveSort(prev => prev === 'Latest' ? 'Most popular' : 'Latest')}
              className="px-4 py-2 rounded-lg bg-[#EAEAEA] text-black font-bold flex items-center gap-2 hover:bg-[#E2E2E2] transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
          </div>

        </div>

        {/* Mobbin Style Card Grid Showcase (Exact Screenshot Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((role) => (
            <div 
              key={role.id}
              className="rounded-3xl bg-[#F2F2F2] border border-[#E5E5E5] p-6 relative hover:shadow-xl transition-all group"
            >
              {/* Badge */}
              <div className="mb-4">
                <span className="px-2.5 py-1 rounded-md bg-white text-black font-bold text-[10px] uppercase shadow-xs">
                  {role.completed ? 'Updated' : 'New'}
                </span>
              </div>

              {/* Mobile Phone Mockup Frame inside card */}
              <div className="w-full max-w-[280px] mx-auto rounded-3xl bg-black p-3 shadow-2xl text-white mb-6 border-4 border-neutral-800">
                <div className="w-16 h-4 rounded-full bg-neutral-900 mx-auto mb-3" />
                
                <div className="p-3 rounded-2xl bg-neutral-900 border border-white/10 space-y-2 text-xs">
                  <div className="font-mono text-[10px] text-[#CCFF00] font-bold">{role.company}</div>
                  <div className="font-bold text-sm leading-snug">{role.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Status: {role.status}</div>

                  <button
                    onClick={() => setSelectedRoleForPanel(role)}
                    className="w-full py-2 mt-2 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-wider hover:bg-[#CCFF00] transition-colors"
                  >
                    {role.actionButtonText}
                  </button>
                </div>
              </div>

              {/* Card Meta */}
              <div className="flex items-center justify-between text-xs font-semibold border-t border-[#E5E5E5] pt-3">
                <span className="text-black font-bold">{role.company}</span>
                <span className="text-neutral-500 font-mono text-[11px]">{role.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobbin Brand Logo Icon Bubbles at Bottom (Exact Screenshot Match) */}
        <div className="flex items-center justify-center gap-8 pt-8 border-t border-[#E5E5E5]">
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-md">
            ⌘
          </div>
          <div className="w-14 h-14 rounded-2xl bg-[#EAEAEA] text-black flex items-center justify-center font-bold text-xl shadow-md">
            ●●
          </div>
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-sm shadow-md">
            Stripe
          </div>
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center font-bold text-lg shadow-md">
            ★
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
