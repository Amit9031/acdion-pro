import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-900 to-[#070A10] text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          READY TO TAKE CONTROL?
        </span>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto uppercase leading-tight mb-6">
          Know what to do next. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            Every single morning.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Stop scrolling job boards in circles. Experience a clean, focused queue built for high-performance engineers and product creators.
        </p>

        {/* Access Form */}
        <div className="max-w-md mx-auto mb-10">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 flex items-center justify-center gap-3 font-semibold text-sm shadow-xl"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Access granted! Scroll up to test the live workspace.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter candidate email..."
                className="px-4 py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 text-sm font-medium"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <button onClick={() => scrollToSection('workspace')} className="hover:text-white transition-colors">
            ↑ Return to Workspace Demo
          </button>
          <span>•</span>
          <button onClick={() => scrollToSection('decisions')} className="hover:text-white transition-colors flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            Read DECISIONS.md
          </button>
        </div>

      </div>
    </section>
  );
}
