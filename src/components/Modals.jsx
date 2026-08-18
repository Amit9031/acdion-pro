import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, CheckCircle2, Lock, Sparkles, Send, Award, BookOpen, ShieldCheck } from 'lucide-react';

// 1. Search Modal
export function SearchModal({ isOpen, onClose, demoItems, onSelectTask }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = demoItems.filter(item => 
    item.company.toLowerCase().includes(query.toLowerCase()) ||
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.nextAction.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-[#161618] border border-[#28282D] rounded-2xl shadow-2xl overflow-hidden font-sans text-white"
      >
        <div className="p-4 border-b border-[#28282D] flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles, companies, or prep tasks..."
            className="w-full bg-transparent border-none text-sm text-white placeholder-neutral-500 focus:outline-none font-mono"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-4 space-y-2 font-mono text-xs">
          {filtered.length > 0 ? (
            filtered.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectTask(item);
                  onClose();
                }}
                className="p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] hover:border-[#CCFF00] cursor-pointer flex items-center justify-between transition-colors"
              >
                <div>
                  <div className="font-bold text-white text-sm">{item.company} — <span className="font-sans text-xs text-neutral-300">{item.title}</span></div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">→ {item.nextAction}</div>
                </div>
                <span className="px-2 py-1 rounded bg-[#CCFF00] text-black font-extrabold text-[10px]">
                  VIEW
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-neutral-500">No matching search results found.</div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// 2. Login Modal
export function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-md bg-[#161618] border border-[#28282D] rounded-2xl p-6 shadow-2xl text-white relative font-sans"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {loggedIn ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#CCFF00] mx-auto" />
            <h3 className="text-xl font-bold font-syne">Welcome Back, Candidate!</h3>
            <p className="text-xs text-neutral-400 font-mono">Your SignalDesk focus workspace session is authenticated.</p>
            <button onClick={onClose} className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase">
              Continue to Workspace
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#CCFF00] font-bold">
              <Lock className="w-4 h-4" />
              CANDIDATE PORTAL LOGIN
            </div>
            <h3 className="text-2xl font-bold font-syne mb-6">Log in to SignalDesk</h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="candidate@engineer.io"
                  className="w-full p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] text-white focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] text-white focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Log In Now
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// 3. Signup Modal
export function SignupModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Senior Backend Engineer');
  const [created, setCreated] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-md bg-[#161618] border border-[#28282D] rounded-2xl p-6 shadow-2xl text-white relative font-sans"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {created ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#CCFF00] mx-auto" />
            <h3 className="text-xl font-bold font-syne">Account Created!</h3>
            <p className="text-xs text-neutral-400 font-mono">Your SignalDesk candidate queue is initialized and ready.</p>
            <button onClick={onClose} className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase">
              Launch Workspace
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#CCFF00] font-bold">
              <Sparkles className="w-4 h-4" />
              CREATE FREE CANDIDATE ACCOUNT
            </div>
            <h3 className="text-2xl font-bold font-syne mb-6">Sign Up for SignalDesk</h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@domain.com"
                  className="w-full p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] text-white focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Target Engineering Role</label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] text-white focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Create Account & Access Queue
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// 4. Be Pro Plan Modal
export function ProPlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-[#161618] border border-[#28282D] rounded-2xl p-6 shadow-2xl text-white relative font-sans"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#CCFF00] font-bold">
          <Award className="w-4 h-4" />
          SIGNALDESK PRO EDITION
        </div>
        <h3 className="text-2xl font-bold font-syne mb-3">Upgrade to SignalDesk Pro</h3>
        <p className="text-xs text-neutral-400 font-mono mb-6">Unlock automated recruiter follow-ups, interview prep generators, and edge synchronization.</p>

        <div className="grid grid-cols-2 gap-4 font-mono text-xs mb-6">
          <div className="p-4 rounded-xl bg-[#1C1C1F] border border-[#28282D]">
            <div className="text-neutral-400 font-bold mb-1">FREE TIER</div>
            <div className="text-xl font-bold text-white mb-2">$0</div>
            <ul className="space-y-2 text-[11px] text-zinc-400">
              <li>✓ Interactive Focus Queue</li>
              <li>✓ Basic Preparation Checklists</li>
              <li>✓ Client State Sync</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/40 relative">
            <span className="absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#CCFF00] text-black">POPULAR</span>
            <div className="text-[#CCFF00] font-bold mb-1">PRO ENGINEER</div>
            <div className="text-xl font-bold text-white mb-2">$12/mo</div>
            <ul className="space-y-2 text-[11px] text-zinc-200">
              <li>✓ Multi-device Edge DB Sync</li>
              <li>✓ Gmail/Outlook Webhooks</li>
              <li>✓ AI Interview Prep Generator</li>
            </ul>
          </div>
        </div>

        <button onClick={onClose} className="w-full py-3 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors">
          Start 14-Day Free Pro Trial
        </button>
      </motion.div>
    </div>
  );
}

// 5. Submit Website / Application Modal
export function SubmitWebsiteModal({ isOpen, onClose }) {
  const [url, setUrl] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-md bg-[#161618] border border-[#28282D] rounded-2xl p-6 shadow-2xl text-white relative font-sans"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#CCFF00] mx-auto" />
            <h3 className="text-xl font-bold font-syne">Role / Portfolio Submitted!</h3>
            <p className="text-xs text-neutral-400 font-mono">SignalDesk signal ingestion pipeline will parse and normalize your listing.</p>
            <button onClick={onClose} className="px-6 py-2.5 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase">
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#CCFF00] font-bold">
              <Send className="w-4 h-4" />
              SUBMIT TARGET ROLE OR WEBSITE
            </div>
            <h3 className="text-2xl font-bold font-syne mb-6">Submit Job / Portfolio Link</h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Company / Product Name</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Stripe, Linear, Vercel"
                  className="w-full p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] text-white focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Target Job / Portfolio URL</label>
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://company.com/careers/role"
                  className="w-full p-3 rounded-xl bg-[#1C1C1F] border border-[#28282D] text-white focus:outline-none focus:border-[#CCFF00]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Submit For Signal Ingestion
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// 6. Academy Modal
export function AcademyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-[#161618] border border-[#28282D] rounded-2xl p-6 shadow-2xl text-white relative font-sans"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#CCFF00] font-bold">
          <BookOpen className="w-4 h-4" />
          SIGNALDESK ACADEMY
        </div>
        <h3 className="text-2xl font-bold font-syne mb-3">Engineering Interview Academy</h3>
        <p className="text-xs text-neutral-400 font-mono mb-6">Master technical system design and coding panel interviews with curated guides.</p>

        <div className="space-y-3 font-mono text-xs mb-6">
          <div className="p-3.5 rounded-xl bg-[#1C1C1F] border border-[#28282D] flex items-center justify-between">
            <div>
              <div className="font-bold text-white text-sm">System Design Playbook 2026</div>
              <div className="text-[11px] text-neutral-400">Idempotency, distributed queues & caching</div>
            </div>
            <span className="px-2 py-1 rounded bg-[#CCFF00] text-black font-bold text-[10px]">FREE</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1C1C1F] border border-[#28282D] flex items-center justify-between">
            <div>
              <div className="font-bold text-white text-sm">Recruiter Negotiation Strategy</div>
              <div className="text-[11px] text-neutral-400">Handling multiple counter-offers & equity</div>
            </div>
            <span className="px-2 py-1 rounded bg-[#CCFF00] text-black font-bold text-[10px]">FREE</span>
          </div>
        </div>

        <button onClick={onClose} className="w-full py-3 rounded-full bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors">
          Close Academy
        </button>
      </motion.div>
    </div>
  );
}
