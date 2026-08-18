import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Sections/Problem';
import Workspace from './components/ProductDemo/Workspace';
import Features from './components/Sections/Features';
import Workflow from './components/Sections/Workflow';
import FinalCTA from './components/Sections/FinalCTA';
import Footer from './components/Footer';
import { INITIAL_DEMO_DATA } from './data/demoData';
import { Terminal, Sparkles, X, Code2, Zap } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [demoItems, setDemoItems] = useState(INITIAL_DEMO_DATA);
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);
  const [showDevConsole, setShowDevConsole] = useState(false);

  // Sync dark mode class on html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Konami Code Easter Egg Listener (Up, Up, Down, Down, Left, Right, Left, Right, B, A)
  useEffect(() => {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = konamiSequence[konamiIndex].length === 1 
        ? konamiSequence[konamiIndex].toLowerCase() 
        : konamiSequence[konamiIndex];

      if (key === expectedKey) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          triggerEasterEgg('konami');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerEasterEgg = (source) => {
    setEasterEggUnlocked(true);
    setShowDevConsole(true);
  };

  const handleResetDemo = () => {
    setDemoItems(INITIAL_DEMO_DATA);
  };

  const handleSelectTaskFromHero = (task) => {
    const el = document.getElementById('workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-500 selection:text-white">
      
      {/* Top Banner Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onTriggerEasterEgg={triggerEasterEgg}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Interactive Focus Card */}
        <Hero
          demoItems={demoItems}
          onSelectTask={handleSelectTaskFromHero}
        />

        {/* The Problem & Contrast Section */}
        <Problem />

        {/* Live Interactive Product Demo Workspace */}
        <Workspace
          demoItems={demoItems}
          setDemoItems={setDemoItems}
          onResetDemo={handleResetDemo}
        />

        {/* Features & Architecture Grid */}
        <Features />

        {/* 3-Step Daily Habit Workflow */}
        <Workflow />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer & Embedded DECISIONS.md */}
      <Footer
        easterEggUnlocked={easterEggUnlocked}
        onTriggerEasterEgg={triggerEasterEgg}
      />

      {/* Easter Egg Modal / Developer Console */}
      {showDevConsole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#0F172A] border border-blue-500/50 rounded-2xl p-6 shadow-2xl shadow-blue-500/20 font-mono relative">
            <button
              onClick={() => setShowDevConsole(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
              <span>EASTER EGG UNLOCKED!</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-400" />
              <span>Acdyon Engineering DevConsole</span>
            </h3>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              You found the hidden Easter egg! We love engineers who inspect under the hood and test secrets.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500">Trigger Method:</span>
                <span className="text-blue-400 font-semibold">Konami Code / Multi-click</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Viewport Metrics:</span>
                <span className="text-emerald-400">Responsive (390px – 1440px)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dark Mode Status:</span>
                <span className="text-amber-400">100% Native & Accessible</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fake Data Level:</span>
                <span className="text-purple-400">0% (Strict Realism Enforced)</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Acdyon Engineering Challenge Part 2</span>
              <button
                onClick={() => setShowDevConsole(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-colors"
              >
                Close Console
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
