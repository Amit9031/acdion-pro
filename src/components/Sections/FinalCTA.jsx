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
    <section className="py-20 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121215]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="font-mono text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
          EARLY ACCESS
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight uppercase leading-tight mb-4">
          Know what to do next. Every single morning.
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Experience a clean, focused queue built for high-performance engineers and product creators.
        </p>

        {/* Input Form */}
        <div className="max-w-md mx-auto mb-8">
          {submitted ? (
            <div className="p-3.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-mono text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
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
                className="px-3.5 py-2.5 rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 flex-1 text-xs font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shrink-0"
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
