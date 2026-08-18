import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function Navbar({ 
  onOpenSearch, 
  onOpenLogin, 
  onOpenSignup, 
  onOpenPro, 
  onOpenSubmit, 
  onOpenAcademy,
  onTriggerEasterEgg 
}) {
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 4) {
      setLogoClicks(0);
      onTriggerEasterEgg('logo');
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA] border-b border-[#E2E2E2] text-[#111111] transition-colors">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Left: W. Logo + Nav Links */}
        <div className="flex items-center gap-6">
          <button 
            onClick={handleLogoClick}
            className="font-bold text-2xl tracking-tighter text-black focus:outline-none"
            title="Click 4 times to unlock Developer Console"
          >
            W.
          </button>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-[#111111]">
            <button 
              onClick={() => scrollToSection('problem')} 
              className="flex items-center gap-1 hover:text-neutral-600 transition-colors"
            >
              Explore <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => scrollToSection('workspace')} 
              className="hover:text-neutral-600 transition-colors"
            >
              Directory
            </button>
            <button 
              onClick={onOpenAcademy} 
              className="flex items-center gap-1 hover:text-neutral-600 transition-colors"
            >
              Academy <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#111111] text-white rounded">New</span>
            </button>
            <button 
              onClick={() => scrollToSection('workspace')} 
              className="hover:text-neutral-600 transition-colors"
            >
              Jobs
            </button>
            <button 
              onClick={() => scrollToSection('decisions')} 
              className="hover:text-neutral-600 transition-colors"
            >
              Market
            </button>
          </nav>
        </div>

        {/* Center: Search Input */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center cursor-pointer" onClick={onOpenSearch}>
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              readOnly
              placeholder="Search by Inspiration"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#EAEAEA] border-none text-xs font-medium text-[#111111] placeholder-neutral-500 focus:outline-none cursor-pointer hover:bg-[#E2E2E2] transition-colors"
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <button onClick={onOpenLogin} className="hover:text-neutral-600 transition-colors hidden sm:inline">
            Log in
          </button>
          <button onClick={onOpenSignup} className="hover:text-neutral-600 transition-colors hidden sm:inline">
            Sign Up
          </button>

          {/* Dark Pill "Be Pro" */}
          <button 
            onClick={onOpenPro}
            className="px-4 py-2 rounded-lg bg-[#222222] text-white font-bold hover:bg-black transition-colors"
          >
            Be Pro
          </button>

          {/* Border Pill "Submit Website" */}
          <button 
            onClick={onOpenSubmit}
            className="px-4 py-2 rounded-lg bg-[#EAEAEA] border border-[#D5D5D5] text-[#111111] font-bold hover:bg-[#E2E2E2] transition-colors"
          >
            Submit Website
          </button>
        </div>

      </div>
    </header>
  );
}
