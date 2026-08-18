import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onTriggerEasterEgg }) {
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
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F5]/90 dark:bg-[#121316]/90 backdrop-blur-md border-b border-[#E8E5DA] dark:border-[#282A30] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Editorial Brand Logo */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-left focus:outline-none group"
          title="Click 4 times to unlock Developer Console"
        >
          <div className="w-8 h-8 rounded-lg bg-terracotta-500 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm group-hover:bg-terracotta-600 transition-colors">
            SD
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#18181B] dark:text-[#F4F2EB] leading-none flex items-center gap-2">
              SignalDesk
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-500 border border-terracotta-500/20">
                v2.4
              </span>
            </span>
            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Prescriptive Focus Queue
            </span>
          </div>
        </button>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <button 
            onClick={() => scrollToSection('problem')} 
            className="hover:text-terracotta-500 dark:hover:text-white transition-colors"
          >
            Why SignalDesk
          </button>
          <button 
            onClick={() => scrollToSection('workspace')} 
            className="hover:text-terracotta-500 dark:hover:text-white transition-colors"
          >
            Workspace Demo
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-terracotta-500 dark:hover:text-white transition-colors"
          >
            Architecture Specs
          </button>
          <button 
            onClick={() => scrollToSection('decisions')} 
            className="hover:text-terracotta-500 dark:hover:text-white transition-colors font-bold text-terracotta-500"
          >
            DECISIONS.md
          </button>
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg paper-badge hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </motion.button>

          <button
            onClick={() => scrollToSection('workspace')}
            className="px-4 py-2 rounded-lg bg-[#18181B] dark:bg-[#F4F2EB] text-white dark:text-[#18181B] font-mono text-xs font-semibold hover:bg-terracotta-500 dark:hover:bg-terracotta-500 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Launch Canvas</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
