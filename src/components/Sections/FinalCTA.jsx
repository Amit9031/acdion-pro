import React, { useState } from 'react';
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
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800/80 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          READY TO TAKE CONTROL?
        </span>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto uppercase leading-tight mb-6">
          Know what to do next. <br />
          <span className="text-blue-400">Every single morning.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Stop scrolling job boards in circles. Experience a clean, focused queue built for high-performance engineers and product creators.
        </p>

        {/* Interactive Access Form */}
        <div className="max-w-md mx-auto mb-10">
          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 flex items-center justify-center gap-3 font-semibold text-sm animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Access granted! Scroll up to test the workspace demo.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your engineer email..."
                className="px-4 py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 text-sm font-medium"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Secondary Links */}
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <button onClick={() => scrollToSection('workspace')} className="hover:text-white transition-colors">
            ↑ Return to Interactive Demo
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
