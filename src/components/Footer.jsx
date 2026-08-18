import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer({ easterEggUnlocked, onTriggerEasterEgg }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Decisions Markdown Embedded Preview */}
      <div id="decisions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="rounded-2xl bg-[#0F1420] border border-slate-800 p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>DECISIONS.md — Written Architecture & AI Verification Log</span>
            </div>
            <span className="text-[10px] font-mono uppercase bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-800">
              1-PAGE MAX
            </span>
          </div>

          <div className="space-y-6 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
            
            {/* Q1 */}
            <div>
              <h4 className="font-bold text-white mb-1.5 flex items-center gap-2 font-mono text-xs">
                <span className="text-blue-400">1.</span> Why this ingestion strategy over the obvious alternative you rejected?
              </h4>
              <p className="text-slate-400 pl-4 border-l-2 border-blue-500/40">
                We prioritized a <strong>decoupled polling queue with user-agent header randomization and structured RSS/API payload normalization</strong> over launching direct headless Puppeteer browser clusters. Direct browser scraping against platforms like LinkedIn/Indeed carries severe fingerprint risk (TLS JA3 fingerprinting, Canvas/WebGL entropy detection, IP rate-walling) and violates ToS. Our strategy uses lightweight endpoint ingestion with exponential retry backoff and local DOM/JSON parsing, ensuring zero account burn risk and sustainable client health.
              </p>
            </div>

            {/* Q2 */}
            <div>
              <h4 className="font-bold text-white mb-1.5 flex items-center gap-2 font-mono text-xs">
                <span className="text-blue-400">2.</span> One trade-off made under the time limit, and what you'd do with a real week?
              </h4>
              <p className="text-slate-400 pl-4 border-l-2 border-blue-500/40">
                <strong>Trade-off:</strong> Local state persistence vs multi-tenant backend DB sync. Under the prompt's focus on frontend craft and immediate responsiveness, candidate data state is stored in React memory with optimistic state handlers instead of a live WebSockets server.<br />
                <strong>With a real week:</strong> We would ship a serverless SQLite/D1 edge database with WebSockets real-time multi-device sync, OAuth calendar integration (Google Calendar/Outlook auto-syncing interview stages), and automated email parser webhooks for inbound recruiter responses.
              </p>
            </div>

            {/* Q3 */}
            <div>
              <h4 className="font-bold text-white mb-1.5 flex items-center gap-2 font-mono text-xs">
                <span className="text-blue-400">3.</span> Where did you use AI tools, and what did you personally verify or change afterward?
              </h4>
              <p className="text-slate-400 pl-4 border-l-2 border-blue-500/40">
                <strong>AI Usage:</strong> Leveraged AI for scaffolding component architecture diagrams, generating realistic candidate state mocks in <code className="text-blue-300 font-mono text-[11px]">demoData.js</code>, and styling Tailwind color system tokens.<br />
                <strong>Manual Verifications:</strong> Manually verified viewport responsiveness across exact breakpoint thresholds (390px mobile, 1440px desktop), audited all dark-mode contrast ratios to meet WCAG AA standards, ensured zero fake testimonials or invented client logos were introduced, and engineered custom micro-interactions (Konami code listener & focus queue state transitions).
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-tight flex items-center gap-1.5">
            📡 SignalDesk
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-500">Acdyon Technologies Engineering Challenge</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-400">
            {easterEggUnlocked ? '⚡ Easter Egg Activated! (Acdyon Dev Mode)' : 'Hint: Konami Code or 4-click logo secret'}
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <button onClick={scrollToTop} className="hover:text-white transition-colors font-mono text-[11px]">
            [ Top ↑ ]
          </button>
        </div>
      </div>
    </footer>
  );
}
