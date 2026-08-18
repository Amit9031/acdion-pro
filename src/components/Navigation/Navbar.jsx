import React, { useState } from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
            title="Click 4 times to unlock dev console"
          >
            <div className="w-6 h-6 rounded bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 font-mono text-xs font-bold tracking-tighter group-hover:bg-blue-600 dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors">
              SD
            </div>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm tracking-tight">
              SignalDesk
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <button 
              onClick={() => scrollToSection('problem')} 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Why SignalDesk
            </button>
            <button 
              onClick={() => scrollToSection('workspace')} 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Workspace Demo
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Architecture
            </button>
            <button 
              onClick={() => scrollToSection('decisions')} 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-mono text-[11px]"
            >
              DECISIONS.md
            </button>
          </nav>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => scrollToSection('workspace')}
            className="px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-medium text-xs transition-colors flex items-center gap-1.5"
          >
            Try Workspace
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
