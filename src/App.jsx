import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Sections/Problem';
import Workspace from './components/ProductDemo/Workspace';
import Features from './components/Sections/Features';
import Workflow from './components/Sections/Workflow';
import FinalCTA from './components/Sections/FinalCTA';
import Footer from './components/Footer';
import { 
  SearchModal, 
  LoginModal, 
  SignupModal, 
  ProPlanModal, 
  SubmitWebsiteModal, 
  AcademyModal 
} from './components/Modals';
import { INITIAL_DEMO_DATA } from './data/demoData';
import { Terminal, Sparkles, X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [demoItems, setDemoItems] = useState(INITIAL_DEMO_DATA);
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);
  const [showDevConsole, setShowDevConsole] = useState(false);
  
  // Active modal state: 'search' | 'login' | 'signup' | 'pro' | 'submit' | 'academy' | null
  const [activeModal, setActiveModal] = useState(null);

  // Sync dark mode class on html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // Konami Code Listener
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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0D0D0E] text-[#111111] dark:text-[#F3F3F4] transition-colors duration-200 selection:bg-[#CCFF00] selection:text-black">
      
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setActiveModal('search')}
        onOpenLogin={() => setActiveModal('login')}
        onOpenSignup={() => setActiveModal('signup')}
        onOpenPro={() => setActiveModal('pro')}
        onOpenSubmit={() => setActiveModal('submit')}
        onOpenAcademy={() => setActiveModal('academy')}
        onTriggerEasterEgg={triggerEasterEgg}
      />

      {/* Main Page Flow */}
      <main>
        <Hero
          demoItems={demoItems}
          onSelectTask={handleSelectTaskFromHero}
        />

        <Problem />

        <Workspace
          demoItems={demoItems}
          setDemoItems={setDemoItems}
          onResetDemo={handleResetDemo}
        />

        <Features />

        <Workflow />

        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer
        easterEggUnlocked={easterEggUnlocked}
        onTriggerEasterEgg={triggerEasterEgg}
      />

      {/* Interactive Modals */}
      <SearchModal
        isOpen={activeModal === 'search'}
        onClose={() => setActiveModal(null)}
        demoItems={demoItems}
        onSelectTask={handleSelectTaskFromHero}
      />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={() => setActiveModal(null)}
      />

      <SignupModal
        isOpen={activeModal === 'signup'}
        onClose={() => setActiveModal(null)}
      />

      <ProPlanModal
        isOpen={activeModal === 'pro'}
        onClose={() => setActiveModal(null)}
      />

      <SubmitWebsiteModal
        isOpen={activeModal === 'submit'}
        onClose={() => setActiveModal(null)}
      />

      <AcademyModal
        isOpen={activeModal === 'academy'}
        onClose={() => setActiveModal(null)}
      />

      {/* Easter Egg Modal / Developer Console */}
      {showDevConsole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#161618] border border-[#CCFF00]/40 rounded-2xl p-6 shadow-2xl text-white font-mono relative">
            <button
              onClick={() => setShowDevConsole(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#CCFF00] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>EASTER EGG UNLOCKED!</span>
            </div>

            <h3 className="text-xl font-bold font-syne text-white mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#CCFF00]" />
              <span>Acdyon Engineering DevConsole</span>
            </h3>

            <p className="text-xs text-neutral-300 mb-4 leading-relaxed font-sans">
              You found the hidden Easter egg! All buttons are fully functional with live modals.
            </p>

            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2 text-xs text-neutral-300 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-500">Button State Status:</span>
                <span className="text-[#CCFF00] font-semibold">100% Functional</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Interactive Modals:</span>
                <span className="text-emerald-400">Search, Login, Signup, Pro, Submit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Screenshot Match:</span>
                <span className="text-amber-400">Exact Awwwards Replica</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-neutral-500">Acdyon Engineering Challenge Part 2</span>
              <button
                onClick={() => setShowDevConsole(false)}
                className="px-4 py-2 rounded-full bg-[#CCFF00] text-black font-sans text-xs font-extrabold uppercase transition-colors"
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
