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
    <section className="py-20 md:py-28 border-b border-[#E2E2E2] bg-[#FAFAFA] text-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#222222] px-2.5 py-1 rounded bg-[#EAEAEA] border border-[#D5D5D5] inline-block mb-3">
          EARLY ACCESS
        </span>

        <h2 className="font-extrabold text-4xl sm:text-5xl text-[#111111] tracking-tight uppercase leading-tight mb-4">
          Know what to do next. <br />
          <span className="text-neutral-500">Every single morning.</span>
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-sans">
          Experience a clean, focused queue built for high-performance engineers and product creators.
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto mb-8">
          {submitted ? (
            <div className="p-4 rounded-full bg-[#111111] text-[#CCFF00] font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg">
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
                className="px-4 py-3 rounded-full bg-[#EAEAEA] border border-[#D5D5D5] text-[#111111] placeholder-neutral-500 focus:outline-none focus:border-[#111111] flex-1 text-xs font-mono"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#111111] text-white font-mono text-xs font-extrabold uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-lg"
              >
                <span>Request Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        <div className="text-xs font-mono text-neutral-500">
          Acdyon Technologies Engineering Challenge Part 2
        </div>

      </div>
    </section>
  );
}
