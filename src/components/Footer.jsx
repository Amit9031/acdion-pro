import React from 'react';

export default function Footer({ easterEggUnlocked, onTriggerEasterEgg }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 text-xs font-mono">
      
      {/* DECISIONS.md Preview */}
      <div id="decisions" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-b border-zinc-900">
        <div className="rounded-lg bg-[#09090B] border border-zinc-800 p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
            <div className="font-bold text-white text-xs">
              DECISIONS.md — Written Rationale & Architecture
            </div>
            <span className="text-[10px] uppercase bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
              1-PAGE MAX
            </span>
          </div>

          <div className="space-y-6 text-zinc-400 text-xs leading-relaxed font-sans">
            
            {/* Q1 */}
            <div>
              <h4 className="font-mono font-bold text-white mb-1 text-xs">
                1. Why this ingestion strategy over the obvious alternative you rejected?
              </h4>
              <p className="pl-3 border-l border-zinc-700 text-zinc-400">
                We prioritized a <strong>decoupled queue with user-agent header randomization and structured RSS/API payload normalization</strong> over launching direct headless Puppeteer browser clusters. Direct browser scraping against platforms like LinkedIn/Indeed carries severe fingerprint risk (TLS JA3 fingerprinting, Canvas/WebGL entropy detection, IP rate-walling) and violates ToS. Our strategy uses lightweight endpoint ingestion with exponential retry backoff and local DOM/JSON parsing, ensuring zero account burn risk and sustainable client health.
              </p>
            </div>

            {/* Q2 */}
            <div>
              <h4 className="font-mono font-bold text-white mb-1 text-xs">
                2. One trade-off made under the time limit, and what you'd do with a real week?
              </h4>
              <p className="pl-3 border-l border-zinc-700 text-zinc-400">
                <strong>Trade-off:</strong> Client-side state persistence vs multi-tenant backend DB sync. Under the prompt's focus on frontend craft and immediate responsiveness, candidate data state is stored in React memory with optimistic state handlers instead of a live WebSockets server.<br />
                <strong>With a real week:</strong> We would ship a serverless SQLite/D1 edge database with WebSockets real-time multi-device sync, OAuth calendar integration (Google Calendar/Outlook auto-syncing interview stages), and automated email parser webhooks for inbound recruiter responses.
              </p>
            </div>

            {/* Q3 */}
            <div>
              <h4 className="font-mono font-bold text-white mb-1 text-xs">
                3. Where did you use AI tools, and what did you personally verify or change afterward?
              </h4>
              <p className="pl-3 border-l border-zinc-700 text-zinc-400">
                <strong>AI Usage:</strong> Leveraged AI for scaffolding component architecture schemas, generating realistic candidate state mocks in <code className="text-zinc-200">demoData.js</code>, and styling Tailwind color system tokens.<br />
                <strong>Manual Verifications:</strong> Manually verified viewport responsiveness across exact breakpoint thresholds (390px mobile, 1440px desktop), audited all dark-mode contrast ratios to meet WCAG AA standards, ensured zero fake testimonials or invented client logos were introduced, and engineered custom micro-interactions (Konami code listener & focus queue state transitions).
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white">SignalDesk</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-500 text-[11px]">Acdyon Technologies Engineering Challenge</span>
        </div>

        <div className="text-[11px] text-zinc-500">
          {easterEggUnlocked ? '⚡ Easter Egg Active (Acdyon Dev Mode)' : 'Hint: Konami Code or 4-click logo secret'}
        </div>

        <button onClick={scrollToTop} className="hover:text-white transition-colors text-[11px]">
          [ Top ↑ ]
        </button>
      </div>
    </footer>
  );
}
