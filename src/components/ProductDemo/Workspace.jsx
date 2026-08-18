import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriorityCard from './PriorityCard';
import ActionPanel from './ActionPanel';
import { SlidersHorizontal, RotateCcw, Smartphone, Monitor } from 'lucide-react';

export default function Workspace({ demoItems, setDemoItems, onResetDemo }) {
  const [activePlatform, setActivePlatform] = useState('iOS'); // 'iOS' | 'Web'
  const [activeSort, setActiveSort] = useState('Latest'); // 'Latest' | 'Most popular' | 'Top rated'
  const [selectedCompanyFilter, setSelectedCompanyFilter] = useState(null); // null | 'Stripe' | 'Vercel' | 'Linear' | 'Framer'
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [selectedRoleForPanel, setSelectedRoleForPanel] = useState(null);

  // Filter items logic
  const filteredItems = demoItems.filter(item => {
    if (selectedCompanyFilter) {
      return item.company.toLowerCase().includes(selectedCompanyFilter.toLowerCase());
    }
    if (activeSort === 'Most popular') return item.priorityType === 'high' || !item.completed;
    if (activeSort === 'Top rated') return item.priorityType === 'high' || item.priorityType === 'warning';
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
        
        {/* Mobbin 4-Column Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 mb-10 border-b border-[#E5E5E5] text-xs">
          
          {/* Column 1: Categories */}
          <div>
            <div className="font-semibold text-neutral-400 mb-3">Categories</div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li onClick={() => setSelectedCompanyFilter(null)} className="hover:underline cursor-pointer">Engineering Roles ({demoItems.length})</li>
              <li onClick={() => setSelectedCompanyFilter('Stripe')} className="hover:underline cursor-pointer">Backend Infrastructure</li>
              <li onClick={() => setSelectedCompanyFilter('Framer')} className="hover:underline cursor-pointer">Frontend Architecture</li>
              <li onClick={() => setSelectedCompanyFilter('Vercel')} className="hover:underline cursor-pointer">Product & Systems</li>
              <li onClick={() => setSelectedCompanyFilter('Linear')} className="hover:underline cursor-pointer">Staff & Lead Search</li>
            </ul>
          </div>

          {/* Column 2: Focus Tools */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[#111111] font-bold text-sm">SignalDesk</span>
              <span className="text-[11px] font-semibold text-neutral-500">Workspace</span>
            </div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li onClick={() => setActiveSort('Latest')} className="hover:underline cursor-pointer">Today Focus Queue</li>
              <li onClick={() => setShowFilterDrawer(!showFilterDrawer)} className="hover:underline cursor-pointer">Search & Filter</li>
              <li onClick={() => setActiveSort('Most popular')} className="hover:underline cursor-pointer">Stage Timeline</li>
              <li onClick={() => setActiveSort('Top rated')} className="hover:underline cursor-pointer">Idle Response Timer</li>
            </ul>
          </div>

          {/* Column 3: Components */}
          <div>
            <div className="font-semibold text-neutral-400 mb-3">UI Components</div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li onClick={() => setActiveSort('Latest')} className="hover:underline cursor-pointer">Priority Cards</li>
              <li onClick={() => setActiveSort('Most popular')} className="hover:underline cursor-pointer">Status Badges</li>
              <li onClick={() => setSelectedRoleForPanel(demoItems[0])} className="hover:underline cursor-pointer">Action Drawers</li>
              <li onClick={() => setSelectedRoleForPanel(demoItems[0])} className="hover:underline cursor-pointer">Checklists</li>
            </ul>
          </div>

          {/* Column 4: Candidate Flows */}
          <div>
            <div className="font-semibold text-neutral-400 mb-3">Candidate Flows</div>
            <ul className="space-y-2 font-bold text-sm text-[#111111]">
              <li onClick={() => setSelectedCompanyFilter('Stripe')} className="hover:underline cursor-pointer">Recruiter Screen</li>
              <li onClick={() => setSelectedCompanyFilter('Stripe')} className="hover:underline cursor-pointer">System Design Interview</li>
              <li onClick={() => setSelectedCompanyFilter('Linear')} className="hover:underline cursor-pointer">Take-home Challenge</li>
              <li onClick={() => setSelectedCompanyFilter('Vercel')} className="hover:underline cursor-pointer">Follow-up Reminder</li>
              <li onClick={() => setSelectedCompanyFilter('Framer')} className="hover:underline cursor-pointer">Offer Review & Negotiation</li>
            </ul>
          </div>

        </div>

        {/* Mobbin Filter Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-semibold">
          
          <div className="flex items-center gap-6">
            {/* iOS / Web Platform Toggle */}
            <div className="p-1 rounded-full bg-[#EAEAEA] flex items-center gap-1 font-bold text-[11px]">
              <button
                onClick={() => setActivePlatform('iOS')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  activePlatform === 'iOS' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                iOS
              </button>
              <button
                onClick={() => setActivePlatform('Web')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  activePlatform === 'Web' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                }`}
              >
                <Monitor className="w-3 h-3" />
                Web
              </button>
            </div>

            {/* Sort Tabs */}
            <div className="flex items-center gap-6 font-bold text-xs">
              <button
                onClick={() => {
                  setActiveSort('Latest');
                  setSelectedCompanyFilter(null);
                }}
                className={`relative py-1 transition-colors ${
                  activeSort === 'Latest' && !selectedCompanyFilter ? 'text-black border-b-2 border-black font-extrabold' : 'text-neutral-400 hover:text-black'
                }`}
              >
                Latest
              </button>

              <button
                onClick={() => {
                  setActiveSort('Most popular');
                  setSelectedCompanyFilter(null);
                }}
                className={`relative py-1 transition-colors ${
                  activeSort === 'Most popular' && !selectedCompanyFilter ? 'text-black border-b-2 border-black font-extrabold' : 'text-neutral-400 hover:text-black'
                }`}
              >
                Most popular
              </button>

              <button
                onClick={() => {
                  setActiveSort('Top rated');
                  setSelectedCompanyFilter(null);
                }}
                className={`relative py-1 transition-colors ${
                  activeSort === 'Top rated' && !selectedCompanyFilter ? 'text-black border-b-2 border-black font-extrabold' : 'text-neutral-400 hover:text-black'
                }`}
              >
                Top rated
              </button>

              {selectedCompanyFilter && (
                <span className="px-2 py-0.5 rounded bg-black text-white font-mono text-[10px] flex items-center gap-1">
                  Filter: {selectedCompanyFilter}
                  <button onClick={() => setSelectedCompanyFilter(null)} className="hover:text-red-400">✕</button>
                </span>
              )}
            </div>
          </div>

          {/* Right Reset & Filter Trigger Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onResetDemo();
                setSelectedCompanyFilter(null);
                setActiveSort('Latest');
              }}
              className="p-2 rounded-lg bg-[#EAEAEA] text-neutral-600 hover:text-black transition-colors"
              title="Reset Queue State"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setShowFilterDrawer(!showFilterDrawer)}
              className={`px-4 py-2 rounded-lg text-black font-bold flex items-center gap-2 transition-colors ${
                showFilterDrawer ? 'bg-[#CCFF00]' : 'bg-[#EAEAEA] hover:bg-[#E2E2E2]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
          </div>

        </div>

        {/* Expandable Filter Drawer Panel */}
        {showFilterDrawer && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-4 rounded-2xl bg-[#EAEAEA] border border-[#D5D5D5] font-mono text-xs flex flex-wrap items-center gap-3"
          >
            <span className="font-bold text-neutral-500">Quick Filter by Brand:</span>
            {['Stripe', 'Vercel', 'Linear', 'Framer'].map(brand => (
              <button
                key={brand}
                onClick={() => {
                  setSelectedCompanyFilter(brand);
                  setShowFilterDrawer(false);
                }}
                className={`px-3 py-1 rounded-full font-bold transition-colors ${
                  selectedCompanyFilter === brand ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {brand}
              </button>
            ))}
            <button 
              onClick={() => {
                setSelectedCompanyFilter(null);
                setShowFilterDrawer(false);
              }} 
              className="text-neutral-500 underline ml-auto text-[11px]"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Mobbin Style Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((role) => (
                <motion.div 
                  key={role.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-3xl bg-[#F2F2F2] border border-[#E5E5E5] p-6 relative hover:shadow-xl transition-all group"
                >
                  {/* Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-white text-black font-bold text-[10px] uppercase shadow-xs">
                      {role.completed ? 'Updated' : 'New'}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 font-semibold">{activePlatform} View</span>
                  </div>

                  {/* Mobile or Web Preview Frame */}
                  <div className={`w-full mx-auto rounded-3xl bg-black p-3 shadow-2xl text-white mb-6 border-4 border-neutral-800 ${
                    activePlatform === 'iOS' ? 'max-w-[280px]' : 'max-w-full'
                  }`}>
                    {activePlatform === 'iOS' && <div className="w-16 h-3 rounded-full bg-neutral-900 mx-auto mb-3" />}
                    
                    <div className="p-3.5 rounded-2xl bg-neutral-900 border border-white/10 space-y-2 text-xs">
                      <div className="font-mono text-[10px] text-[#CCFF00] font-bold flex justify-between">
                        <span>{role.company}</span>
                        <span>{role.priority}</span>
                      </div>
                      <div className="font-bold text-sm leading-snug">{role.title}</div>
                      <div className="text-[10px] text-neutral-400 font-mono">Stage: {role.status}</div>

                      <button
                        onClick={() => setSelectedRoleForPanel(role)}
                        className="w-full py-2.5 mt-2 rounded-xl bg-white text-black font-extrabold text-[10px] uppercase tracking-wider hover:bg-[#CCFF00] transition-colors"
                      >
                        {role.actionButtonText}
                      </button>
                    </div>
                  </div>

                  {/* Card Footer Meta */}
                  <div className="flex items-center justify-between text-xs font-semibold border-t border-[#E5E5E5] pt-3">
                    <span className="text-black font-bold">{role.company}</span>
                    <span className="text-neutral-500 font-mono text-[11px]">{role.location}</span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-neutral-500 font-mono text-xs">
                No roles match the selected filter. Click <button onClick={() => setSelectedCompanyFilter(null)} className="underline font-bold text-black">Reset</button> to view all active applications.
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobbin Brand Logo Icon Bubbles (Fully Clickable!) */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-[#E5E5E5]">
          <button 
            onClick={() => setSelectedCompanyFilter('Linear')}
            className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-md hover:scale-110 transition-transform"
            title="Filter by Linear"
          >
            ◈
          </button>
          <button 
            onClick={() => setSelectedCompanyFilter(null)}
            className="w-14 h-14 rounded-2xl bg-[#EAEAEA] text-black flex items-center justify-center font-bold text-xl shadow-md hover:scale-110 transition-transform"
            title="Show All Roles"
          >
            ●●
          </button>
          <button 
            onClick={() => setSelectedCompanyFilter('Stripe')}
            className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xs shadow-md hover:scale-110 transition-transform font-mono"
            title="Filter by Stripe"
          >
            Stripe
          </button>
          <button 
            onClick={() => setSelectedCompanyFilter('Vercel')}
            className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-md hover:scale-110 transition-transform"
            title="Filter by Vercel"
          >
            ▲
          </button>
          <button 
            onClick={() => setSelectedCompanyFilter('Framer')}
            className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center font-bold text-lg shadow-md hover:scale-110 transition-transform"
            title="Filter by Framer"
          >
            ❖
          </button>
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
