export const INITIAL_DEMO_DATA = [
  {
    id: 'role-1',
    title: 'Senior Backend Engineer',
    company: 'Stripe',
    logo: '⚡',
    location: 'Remote · San Francisco, CA',
    salary: '$185,000 – $220,000 + Equity',
    priority: 'HIGH PRIORITY',
    priorityType: 'high',
    status: 'System Design Interview Tomorrow (10:00 AM PST)',
    statusType: 'urgent',
    daysIdle: 1,
    nextAction: 'Prepare distributed caching & idempotent API idempotency questions',
    actionButtonText: 'Prepare →',
    completed: false,
    notes: [
      'Recruiter Sarah emphasized deep knowledge of Postgres locking & Redis cluster architecture.',
      'Review Stripe system design interview guide & idempotency key patterns.'
    ],
    checklist: [
      { id: 'c1', text: 'Review 2PC vs Sagas for distributed payments', done: true },
      { id: 'c2', text: 'Prepare 2 past projects on high-throughput queueing', done: true },
      { id: 'c3', text: 'Simulate system design mock on rate limiter design', done: false }
    ],
    timeline: [
      { date: 'Aug 12', event: 'Applied via referral', done: true },
      { date: 'Aug 15', event: 'Recruiter Screen Completed', done: true },
      { date: 'Aug 19', event: 'System Design Technical Interview', current: true }
    ]
  },
  {
    id: 'role-2',
    title: 'Product Engineer (Full Stack)',
    company: 'Vercel',
    logo: '▲',
    location: 'Remote · New York, NY',
    salary: '$170,000 – $200,000',
    priority: 'FOLLOW UP',
    priorityType: 'warning',
    status: 'No response for 6 days after Onsite presentation',
    statusType: 'warning',
    daysIdle: 6,
    nextAction: 'Send gentle check-in email to hiring manager Alex',
    actionButtonText: 'Review →',
    completed: false,
    notes: [
      'Onsite panel went very smoothly on Thursday.',
      'Hiring manager mentioned decisions usually take 3-5 business days. Time to ping!'
    ],
    checklist: [
      { id: 'c4', text: 'Draft polite follow-up email focusing on recent Vercel Ship updates', done: false },
      { id: 'c5', text: 'Link updated portfolio demo repo', done: false }
    ],
    timeline: [
      { date: 'Aug 04', event: 'Technical Take-home Submitted', done: true },
      { date: 'Aug 11', event: 'Final Onsite Panel Completed', done: true },
      { date: 'Aug 19', event: 'Follow-up Email Window Active', current: true }
    ]
  },
  {
    id: 'role-3',
    title: 'Staff Systems Infrastructure Lead',
    company: 'Linear',
    logo: '◈',
    location: 'Remote · London / NYC',
    salary: '$210,000 – $250,000',
    priority: 'HIGH PRIORITY',
    priorityType: 'high',
    status: 'Take-home assessment due in 48 hours',
    statusType: 'urgent',
    daysIdle: 2,
    nextAction: 'Complete real-time sync mechanism implementation',
    actionButtonText: 'Prepare →',
    completed: false,
    notes: [
      'Focus on minimal bundle size, zero-dependency sync engine, CRDT conflict resolution.',
      'Check benchmarks before submitting PR link.'
    ],
    checklist: [
      { id: 'c6', text: 'Implement WebSockets reconnection backoff', done: true },
      { id: 'c7', text: 'Write integration test suite with 90%+ coverage', done: false }
    ],
    timeline: [
      { date: 'Aug 14', event: 'Recruiter Call', done: true },
      { date: 'Aug 17', event: 'Received Take-Home Prompt', done: true },
      { date: 'Aug 20', event: 'Submission Deadline', current: true }
    ]
  },
  {
    id: 'role-4',
    title: 'Frontend Architect',
    company: 'Framer',
    logo: '❖',
    location: 'Hybrid · Amsterdam / Remote',
    salary: '€120,000 – €145,000',
    priority: 'SAVED ROLE',
    priorityType: 'neutral',
    status: 'Saved role — High alignment with Canvas Engine experience',
    statusType: 'info',
    daysIdle: 3,
    nextAction: 'Tailor resume for WebGL / WebGPU experience',
    actionButtonText: 'Review →',
    completed: false,
    notes: [
      'Role opened 3 days ago. Mutual connections on LinkedIn: 2 senior engineers.',
      'Reach out to Dave regarding team growth.'
    ],
    checklist: [
      { id: 'c8', text: 'Customize cover letter highlighting WebGL canvas renderer', done: false }
    ],
    timeline: [
      { date: 'Aug 16', event: 'Discovered & Saved', done: true },
      { date: 'Aug 19', event: 'Target Application Date', current: true }
    ]
  }
];

export const WORKSPACE_METRICS = {
  activeCount: 4,
  actionRequired: 3,
  interviewsThisWeek: 2,
  avgResponseDays: 4.2
};
