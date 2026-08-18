# DECISIONS.md — SignalDesk Architecture & Engineering Rationale
**Candidate Track**: Part 2 — The Premium Home Page  
**Company**: Acdyon Technologies Engineering Challenge  

---

### 1. Why this ingestion strategy over the obvious alternative you rejected?

For job listing data aggregation, the obvious alternative is launching **headless browser clusters (Puppeteer / Playwright)** to scrape platforms like LinkedIn, Indeed, or Wellfound directly. 

**Why we rejected direct browser scraping:**
1. **High Detection Surface:** Modern platforms active-detect headless Chrome instances through TLS JA3/QUIC fingerprinting, Canvas entropy tests, navigator object anomalies (`navigator.webdriver`), and missing HTTP/2 headers.
2. **Account & IP Burn Risk:** Automated login routines rapidly trigger CAPTCHA challenges or hard IP bans, making scraping fragile and high-risk.
3. **ToS Violations:** Automated scraping against logged-in platforms violates site Terms of Service.

**Our Preferred Strategy (Decoupled Queue & Normalized Feed Ingestion):**
We utilize a **rate-limit aware ingestion pattern** operating against low-risk public RSS feeds, API endpoints, or user-approved webhooks. Requests pass through a proxy rotator with randomized headers, exponential backoff, and strict request pacing. Incoming payloads pass through a normalizer that standardizes job titles, salaries, and application dates into a unified `PriorityCard` schema. If a source starts rate-limiting, the pipeline falls back gracefully to cached signals without crashing the workspace.

---

### 2. One trade-off made under the time limit, and what you’d do with a real week.

**The Trade-off:**
To maximize UI polish, micro-interaction craft, and instant responsiveness within the time budget, we implemented **client-side state synchronization with optimistic UI updates** rather than building a full multi-tenant backend with WebSockets and persistent database tables.

**What we would build with a full week:**
1. **Real-time Edge Persistence:** Deploy Cloudflare D1 / Supabase PostgreSQL with real-time WebSockets synchronization across desktop and mobile devices.
2. **Automated Recruiter Email Webhooks:** Ingest interview updates automatically from Gmail/Outlook OAuth webhooks to advance application stages without manual candidate entry.
3. **AI Interview Prep Generator:** Dynamically generate company-specific technical interview question checklists based on recent public engineering blog posts and job description requirements.

---

### 3. Where did you use AI tools, and what did you personally verify or change afterward?

**Where AI Tools Were Used:**
- Generated candidate data structures in `demoData.js` to ensure realistic job titles, timelines, and interview context notes.
- Drafted initial Tailwind CSS layout classes for responsive breakpoint transitions.

**What Was Personally Verified and Refined:**
- **Zero Fake Traps Audit:** Personally audited all visual elements to ensure **zero fabricated testimonials, zero fake user count badges, and zero fake client logos** were present, maintaining complete honesty.
- **Viewport Engineering:** Tested responsive layouts at **390px mobile** (stacked vertical layout, touch targets ≥44px) and **1440px desktop** (side-by-side workspace) to guarantee zero horizontal scroll.
- **Dark Mode Contrast:** Verified dark mode color variables (`#0B0F17` base, `#131926` cards) against WCAG AA accessibility contrast standards.
- **Easter Egg Implementation:** Authored custom Konami Code event listeners (`↑ ↑ ↓ ↓ ← → ← → B A`) and logo multi-click handlers to unlock the secret Acdyon Developer Console.
