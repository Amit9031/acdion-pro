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
    <section className="py-20 md:py-28 border-b border-[#E8E5DA] dark:border-[#282A30] bg-[#FAF9F5] dark:bg-[#111215]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-terracotta-500 mb-3 block">
          EARLY ACCESS
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#18181B] dark:text-[#F4F2EB] tracking-tight leading-tight mb-4">
          Know what to do next. <br />
          <span className="italic text-terracotta-500">Every single morning.</span>
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-sans">
          Experience a clean, focused queue built for high-performance engineers and product creators.
        </p>

        {/* Input Form */}
        <div className="max-w-md mx-auto mb-8">
          {submitted ? (
            <div className="p-4 rounded-xl bg-terracotta-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-md">
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
                className="px-4 py-3 rounded-xl paper-card text-[#18181B] dark:text-[#F4F2EB] placeholder-zinc-400 focus:outline-none focus:border-terracotta-500 flex-1 text-xs font-mono"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-[#18181B] dark:bg-[#F4F2EB] text-white dark:text-[#18181B] font-mono text-xs font-bold hover:bg-terracotta-500 dark:hover:bg-terracotta-500 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Request Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        <div className="text-xs font-mono text-zinc-400">
          Acdyon Technologies Engineering Challenge Part 2
        </div>

      </div>
    </section>
  );
}
