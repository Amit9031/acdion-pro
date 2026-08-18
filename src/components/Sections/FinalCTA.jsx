import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#28282D] bg-[#0D0D0E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#CCFF00] mb-3 block">
          EARLY ACCESS
        </span>

        <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
          Know what to do next. <br />
          <span className="text-[#CCFF00]">Every single morning.</span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-sans">
          Experience a clean, focused queue built for high-performance engineers and product creators.
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto mb-8">
          {submitted ? (
            <div className="p-4 rounded-full bg-[#CCFF00] text-black font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg">
              <CheckCircle2 className="w-4 h-4" />
              <span>Access registered. Test the workspace above.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter candidate email..."
                className="px-4 py-3 rounded-full aww-card text-white placeholder-zinc-500 focus:outline-none focus:border-[#CCFF00] flex-1 text-xs font-mono"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#CCFF00] text-black font-mono text-xs font-extrabold uppercase hover:bg-white transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-[#CCFF00]/20"
              >
                <span>Request Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        <div className="text-xs font-mono text-zinc-500">
          Acdyon Technologies Engineering Challenge Part 2
        </div>

      </div>
    </section>
  );
}
