import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles, ArrowRight, Activity } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo with Motion Ring */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-3 group text-left focus:outline-none"
            title="Click 4 times to unlock Developer Console"
          >
            <motion.div 
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold shadow-lg shadow-blue-500/25"
            >
              <Activity className="w-5 h-5 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
            </motion.div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-lg leading-none flex items-center gap-2">
                SignalDesk
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  PRO
                </span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
                Job Search Focus Engine
              </span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <button 
            onClick={() => scrollToSection('problem')} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Why SignalDesk
          </button>
          <button 
            onClick={() => scrollToSection('workspace')} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            Interactive Demo
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('decisions')} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-xs text-slate-400"
          >
            DECISIONS.md
          </button>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </motion.button>

          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('workspace')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition-all"
          >
            Launch Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </div>
    </header>
  );
}
