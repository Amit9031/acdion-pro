import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Terminal, ArrowRight } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 transition-transform active:scale-95"
            title="Click 4 times for Secret Developer Console"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              📡
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-lg leading-tight flex items-center gap-1.5">
                SignalDesk
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-800/60">
                  PRO
                </span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:inline">
                Job Search Focus Engine
              </span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button 
            onClick={() => scrollToSection('problem')} 
            className="hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            Why SignalDesk
          </button>
          <button 
            onClick={() => scrollToSection('workspace')} 
            className="hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            Interactive Demo
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('decisions')} 
            className="hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono text-xs"
          >
            <Terminal className="w-3.5 h-3.5" />
            DECISIONS.md
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('workspace')}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-glow transition-all active:scale-95"
          >
            Try Interactive Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
