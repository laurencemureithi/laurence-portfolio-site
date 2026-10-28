export interface Project {
  id: string;
  name: string;
  category: string;
  projectType: 'Commercial Client Work' | 'Personal Venture' | 'Brand Concept' | 'Operational Prototype';
  businessContext: string;
  myContribution: string;
  approachAndTools: string;
  deliverables: string[];
  statusOrOutcome: string;
  liveUrl?: string;
  linkText?: string;
  image: string;
  alt: string;
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  problemSolved: string;
  whatYouReceive: string[];
  suitableFor: string;
}

export interface ServiceCategory {
  id: string;
  categoryName: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
}

export interface PricingItem {
  id: string;
  name: string;
  priceKes: string;
  priceUsdApprox: string;
  billingType: 'project' | 'monthly' | 'starting';
  typicalScope: string;
  deliverables: string[];
  turnaround: string;
}

export interface PricingCategory {
  id?: string;
  categoryName: string;
  categoryDescription: string;
  items: PricingItem[];
}

export interface WorkStep {
  number: string;
  title: string;
  summary: string;
  description: string;
  keyDeliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PERSONAL_INFO = {
  fullName: 'Laurence Magondu',
  headline: 'Business Systems, Automation and Digital Experiences',
  supportingStatement:
    'I help businesses improve operations, make better use of their data, and build stronger digital experiences through practical technology, process improvement, and thoughtful design.',
  secondaryStatement:
    'Combining operational thinking, technology, data, and design to deliver practical business solutions.',
  email: 'laurencemureithi1999@gmail.com',
  whatsappNumber: '+254 110 343757',
  whatsappDisplay: '+254 110 343757',
  whatsappUrl:
    'https://wa.me/254110343757?text=Hi%20Laurence,%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.',
  linkedinUrl: 'https://www.linkedin.com/in/laurence-magondu-a96ab2295/',
  instagramUrl: 'https://www.instagram.com/laurencemagondu/',
  location: 'Nairobi, Kenya · Available for Local & International Clients',
  portraitImage: '/images/mur.jpg',
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'business-systems',
    categoryName: 'Category A: Business Systems & Operational Improvement',
    tagline: 'Streamlining manufacturing, operational workflows, and data decision-making.',
    description:
      'Rooted in manufacturing operations since 2021 across quality, production, maintenance workflows, and IT support. I build practical tools that eliminate manual busywork and bring visibility to daily operations.',
    services: [
      {
        id: 'excel-reporting-automation',
        title: 'Excel Reporting & Workflow Automation',
        problemSolved:
          'Teams waste hours each week copying and pasting data across spreadsheets, leading to formula errors, broken sheets, and delayed reports.',
        whatYouReceive: [
          'Standardized automated Excel workbooks with macro/VBA or Python scripts',
          'Single-click data aggregation and formatted executive summaries',
          'Error-checking validation rules and formula lock protection',
          'Clear user guidelines so your staff can run it independently',
        ],
        suitableFor: 'Operations managers, inventory supervisors, accountants, and SMEs tracking daily throughput.',
      },
      {
        id: 'operational-dashboards',
        title: 'Operational Dashboards & KPI Reporting',
        problemSolved:
          'Management cannot quickly see key operational metrics like production output, scrap rates, machine downtime, or stock levels without waiting for manual compilation.',
        whatYouReceive: [
          'Clean, visual dashboards with automated refresh capability',
          'Target vs. actual tracking with automated variance highlights',
          'Trend charts showing week-over-week and month-over-month performance',
          'Modular layout tailored to shop-floor or executive decision reviews',
        ],
        suitableFor: 'Plant heads, manufacturing supervisors, logistics hubs, and business owners.',
      },
      {
        id: 'data-cleaning-reconciliation',
        title: 'Data Cleaning, Reconciliation & Analysis',
        problemSolved:
          'Discrepancies between physical inventory, invoices, and sales sheets create confusion and audit issues.',
        whatYouReceive: [
          'Automated reconciliation routines identifying mismatches and missing entries',
          'Cleaned and consolidated datasets ready for reporting or software migration',
          'Root-cause summary report detailing where discrepancies originated',
          'Standardized data input templates to prevent future dirty data',
        ],
        suitableFor: 'Businesses preparing for financial year-end, stock audits, or system transitions.',
      },
      {
        id: 'process-mapping-sops',
        title: 'Process Mapping & SOP Documentation',
        problemSolved:
          'Critical business procedures exist only in staff members’ heads. When employees leave or fall sick, work stalls and errors multiply.',
        whatYouReceive: [
          'Visual swimlane process flowcharts mapping inputs, decisions, and handoffs',
          'Detailed, easy-to-read Standard Operating Procedures (SOPs) with step-by-step instructions',
          'Quality control checklists and verification forms',
          'Digital templates accessible to new hires and training leads',
        ],
        suitableFor: 'Growing companies, manufacturing lines, service departments, and teams standardizing for quality.',
      },
      {
        id: 'lean-continuous-improvement',
        title: 'Lean & Continuous Improvement Support',
        problemSolved:
          'Recurrent quality defects, hidden bottlenecks, and wasted materials eat into profit margins without a structured framework to solve them.',
        whatYouReceive: [
          'Root cause analysis (5-Whys, Fishbone diagrams) for chronic operational defects',
          'Kaizen action plans targeting quick-win waste reduction',
          '5S workplace organization guidance for tools, parts, and workspaces',
          'Practical shift hand-over protocols and daily gemba tracking',
        ],
        suitableFor: 'Production lines, fabrication workshops, packaging facilities, and maintenance teams.',
      },
      {
        id: 'maintenance-asset-tracking',
        title: 'Maintenance & Asset Tracking Solutions',
        problemSolved:
          'Unscheduled machinery breakdowns occur because preventive maintenance servicing dates and spare parts inventories are tracked informally or forgotten.',
        whatYouReceive: [
          'Digital preventive maintenance scheduling calendar and reminder logs',
          'Asset register tracking machine specifications, serial numbers, and service history',
          'Spare parts min-max stock level tracker with reorder alerts',
          'Downtime log capturing root causes (electrical, mechanical, operator, material)',
        ],
        suitableFor: 'Maintenance technicians, workshop heads, factory engineers, and facility managers.',
      },
      {
        id: 'web-business-systems',
        title: 'Web-Based Business Systems & Operational Prototypes',
        problemSolved:
          'Commercial off-the-shelf software is bloated and costly, but multi-user spreadsheets get corrupted easily.',
        whatYouReceive: [
          'Custom lightweight web portal for shift logging, asset lookups, or internal data entry',
          'Multi-user form inputs connected to a central structured database or Google Sheets',
          'Role-based views allowing supervisors to review while staff input entries',
          'Full source code ownership with zero recurring vendor lock-in',
        ],
        suitableFor: 'SMEs ready to move beyond fragile spreadsheets without paying enterprise subscription costs.',
      },
      {
        id: 'automation-ai-workflows',
        title: 'Practical Automation & AI-Assisted Workflows',
        problemSolved:
          'Manual document reading, copy-paste between portals, and answering routine repetitive inquiries slow down customer and internal operations.',
        whatYouReceive: [
          'Automated data pipelines connecting forms, email alerts, and spreadsheets',
          'Practical AI-assisted document parsing or content summarization workflows',
          'Standardized prompts and verified output validation scripts',
          'Documentation explaining limits, operating costs, and manual fallback',
        ],
        suitableFor: 'Teams looking for grounded, cost-effective automation without speculative jargon.',
      },
    ],
  },
  {
    id: 'digital-creative',
    categoryName: 'Category B: Digital Presence & Creative Design',
    tagline: 'Professional visual branding and clear, responsive web platforms designed for purpose.',
    description:
      'Through Bluprint and bespoke web development, I create professional brand assets and modern digital platforms that establish credibility and help businesses look premium.',
    services: [
      {
        id: 'logo-brand-identity',
        title: 'Logo Design & Brand Identity',
        problemSolved:
          'A mismatched or amateur visual identity undermines business credibility when pitching corporate clients, partners, or investors.',
        whatYouReceive: [
          'Primary logo, secondary marks, and monochrome variations in all vector formats (SVG, PDF, PNG)',
          'Curated brand color palette (HEX, RGB, CMYK) and typographic system',
          'Brand guidelines sheet specifying correct usage, margins, and misuses',
          'Social media profile avatars and favicon assets',
        ],
        suitableFor: 'New ventures launching, and established companies refreshing their market appearance.',
      },
      {
        id: 'marketing-print-design',
        title: 'Marketing Materials & Print Design',
        problemSolved:
          'Low-quality flyers, unaligned banners, and poorly formatted print files waste printing budgets and damage brand perception.',
        whatYouReceive: [
          'Press-ready brochures, flyers, banners, and presentation folders',
          'Accurate CMYK color separation, bleed margins, and crop marks for error-free printing',
          'Digital versions optimized for WhatsApp sharing and email distribution',
          'Direct liaison with local commercial printers to verify proof prints',
        ],
        suitableFor: 'Retail businesses, event spaces, corporate conferences, and manufacturing catalogs.',
      },
      {
        id: 'business-websites',
        title: 'Business & Portfolio Websites',
        problemSolved:
          'Potential customers searching online find either no website or a slow, outdated page that does not explain what the business actually does.',
        whatYouReceive: [
          'Custom, responsive website built with clean code (React/TypeScript or semantic HTML)',
          'Clear, conversion-focused structure designed around your key service offerings',
          'Mobile optimization, fast load speeds, and integrated WhatsApp / email contact triggers',
          'Clear hosting setup documentation and full source code handover',
        ],
        suitableFor: 'Consultants, engineering firms, service companies, and professionals.',
      },
      {
        id: 'ecommerce-websites',
        title: 'E-Commerce Websites',
        problemSolved:
          'Selling products through social media DMs alone is disorganized, drops orders, and limits growth to manual messaging.',
        whatYouReceive: [
          'Organized product catalog with search, category filtering, and product variations',
          'Mobile-first checkout flow with local payment options (e.g. M-Pesa / card integration)',
          'Order notification system via email or automated messaging',
          'Admin instructions for adding products, updating inventory, and viewing orders',
        ],
        suitableFor: 'Independent retailers, product brands, and digital merchants.',
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages & Digital Experiences',
        problemSolved:
          'Marketing promotions and paid campaigns send traffic to a generic homepage, causing visitors to bounce without taking action.',
        whatYouReceive: [
          'High-conversion, single-purpose landing page focused on one action',
          'Fast-loading hero section, clear proof points, and prominent call to action',
          'Mobile-tested form or direct messaging integration',
          'Analytics-ready structure for campaign tracking',
        ],
        suitableFor: 'Product launches, seasonal promotions, workshop registrations, and targeted campaigns.',
      },
      {
        id: 'company-profiles',
        title: 'Company Profiles & Brand Collateral',
        problemSolved:
          'Bidding for tenders, corporate contracts, or vendor approvals requires a polished corporate profile that presents capabilities credibly.',
        whatYouReceive: [
          'Executive multi-page corporate PDF profile formatted for digital sharing and print',
          'Structured sections for company background, leadership, services, and past projects',
          'Matching corporate letterhead, business card templates, and invoice headers',
          'Editable source files for future team updates',
        ],
        suitableFor: 'Contractors, B2B suppliers, tender bidders, and corporate service providers.',
      },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'opsloom',
    name: 'Opsloom',
    category: 'Digital Solutions & Operational Systems',
    projectType: 'Personal Venture',
    businessContext:
      'Small and growing businesses in Kenya often face a gap between fragile Excel sheets and overpriced enterprise software. Opsloom was founded to explore and develop practical digital systems, operational reporting dashboards, and workflow automation for real business problems.',
    myContribution:
      'Conceived, designed, and developed the platform. Defined the service offerings, built the web application, developed workflow prototypes, and structured the digital presence.',
    approachAndTools:
      'Built with modern web technologies (React, Next.js, TypeScript, Tailwind CSS) with a focus on responsiveness, clear visual hierarchy, and fast load times.',
    deliverables: [
      'Live responsive web platform',
      'Operational systems service architecture',
      'Dashboard prototypes and automation proof-of-concepts',
    ],
    statusOrOutcome:
      'Active personal venture and digital presence. Ongoing development for manufacturing and business clients.',
    liveUrl: 'https://opsloomke-website.vercel.app/',
    linkText: 'Visit Opsloom Platform',
    image: '/images/logoo.png',
    alt: 'Opsloom digital solutions platform logo and interface',
    featured: true,
  },
  {
    id: 'bluprint',
    name: 'Bluprint',
    category: 'Brand Identity & Commercial Print Design',
    projectType: 'Commercial Client Work',
    businessContext:
      'Local businesses and startups frequently struggle to obtain professional brand identities and print-ready marketing materials with accurate production specifications. Bluprint provides brand design, marketing collateral, and pre-press graphics.',
    myContribution:
      'Lead designer and project manager. Handled client discovery, logo design, stationery layouts, promotional flyer design, and direct coordination with commercial print shops.',
    approachAndTools:
      'Vector illustration in Adobe Illustrator, layout composition in InDesign, digital color management (CMYK, Pantone matching), and press-ready PDF export.',
    deliverables: [
      'Visual identity suites and master vector logos',
      'Commercial flyers, banners, and business stationery',
      'Pre-press production files with bleed and crop marks',
      'Bluprint website and portfolio showcase',
    ],
    statusOrOutcome:
      'Commercial brand studio with delivered projects for local businesses and organizations.',
    liveUrl: 'https://laurencemureithi.github.io/bluprint-website/',
    linkText: 'Explore Bluprint Studio',
    image: '/images/card1.png',
    alt: 'Bluprint branding and print design materials showcase',
    featured: true,
  },
  {
    id: 'nexuspulse',
    name: 'NexusPulse',
    category: 'E-Commerce & Digital Commerce',
    projectType: 'Personal Venture',
    businessContext:
      'An e-commerce initiative created to test and run an online consumer store for quality tech accessories and lifestyle products, featuring straightforward navigation and localized payment considerations.',
    myContribution:
      'Configured and structured the e-commerce storefront, curated product listings, managed supplier integration workflows, and set up customer ordering and shipping communication channels.',
    approachAndTools:
      'Online store platform, payment gateway integration, mobile-first product catalog design, and conversion optimization.',
    deliverables: [
      'Full e-commerce store with product categorization',
      'Automated checkout and customer order notifications',
      'Mobile-optimized product imagery and descriptions',
    ],
    statusOrOutcome:
      'Live e-commerce venture operating online with active product catalog.',
    liveUrl: 'https://nexuspulse-ke.company.site/',
    linkText: 'Explore NexusPulse Store',
    image: '/images/nexus.jpg',
    alt: 'NexusPulse online store products and storefront preview',
    featured: true,
  },
  {
    id: 'wema-gardens',
    name: 'Wema Gardens',
    category: 'Event Identity & Spatial Collateral',
    projectType: 'Brand Concept',
    businessContext:
      'An event space concept and launch asset suite designed for an outdoor venue catering to weddings, family celebrations, and corporate retreats requiring an elegant, welcoming identity.',
    myContribution:
      'Designed the visual identity system, botanical emblem, typography pairing, promotional signage concepts, and event invitation collateral templates.',
    approachAndTools:
      'Concept sketches, vector identity design, spatial signage mockups, and layout templates.',
    deliverables: [
      'Emblem mark and responsive logo variations',
      'Event signage and wayfinding concepts',
      'Invitation templates and promotional print layouts',
    ],
    statusOrOutcome:
      'Brand identity concept completed; project materials prepared for venue launch and promotional use.',
    image: '/images/wemacard.png',
    alt: 'Wema Gardens event branding and identity preview card',
    featured: true,
  },
  {
    id: 'eabc-operations',
    name: 'EABC Operational Systems & Digitization',
    category: 'Manufacturing Systems & Process Improvement',
    projectType: 'Operational Prototype',
    businessContext:
      'Manufacturing lines and maintenance teams often encounter operational delays due to paper-based shift handover books, manual downtime recording, and disconnected maintenance logs. This project was developed as a structured solution framework.',
    myContribution:
      'Mapped manufacturing workflow steps, drafted SOP documentation, built automated Excel shift handover and downtime log sheets, and prototyped a unified maintenance tracking model.',
    approachAndTools:
      'Kaizen/Lean root cause methodologies, advanced Excel automation, VBA scripts, Python data scripts, and process swimlane diagrams.',
    deliverables: [
      'Automated shift reporting workbook with downtime categorization',
      'Equipment preventive maintenance schedule framework',
      'Root cause analysis templates and machine trouble-shooting logs',
      'Standard Operating Procedure (SOP) documentation',
    ],
    statusOrOutcome:
      'Operational prototype and practical framework derived from hands-on manufacturing operations experience since 2021.',
    image: '/images/logoh-dark.png',
    alt: 'EABC operational systems and process digitization overview',
    featured: true,
  },
];

export const PRICING_PACKAGES: PricingCategory[] = [
  {
    categoryName: 'Branding & Design',
    categoryDescription:
      'Clear, professional visual assets for businesses seeking credible market positioning.',
    items: [
      {
        id: 'logo-design',
        name: 'Logo Design',
        priceKes: 'KES 3,500 – 7,500',
        priceUsdApprox: '~$27 – $60 USD',
        billingType: 'starting',
        turnaround: '3–5 Business Days',
        typicalScope: 'Core brand logo for new businesses or clean modernization of existing marks.',
        deliverables: [
          '2–3 initial distinct concept directions',
          'Up to 3 revision rounds on chosen concept',
          'Master vector files (AI, SVG, PDF) + high-res PNG/JPG',
          'Monochrome, dark, and light background variations',
        ],
      },
      {
        id: 'starter-brand-identity',
        name: 'Starter Brand Identity',
        priceKes: 'KES 8,000 – 18,000',
        priceUsdApprox: '~$60 – $140 USD',
        billingType: 'starting',
        turnaround: '1–2 Weeks',
        typicalScope: 'Cohesive visual foundation for businesses establishing professional market credibility.',
        deliverables: [
          'Master logo suite (primary mark, horizontal, submark, favicon)',
          'Curated color palette with exact HEX, RGB, and CMYK values',
          'Typography pairing rules and hierarchy guide',
          '1-page Brand Guideline sheet for staff and printers',
          'Business card and letterhead layout template',
        ],
      },
      {
        id: 'flyer-poster-design',
        name: 'Flyer or Poster Design',
        priceKes: 'KES 1,500 – 3,500',
        priceUsdApprox: '~$12 – $27 USD',
        billingType: 'starting',
        turnaround: '2–3 Business Days',
        typicalScope: 'Single or double-sided promotional asset for a product, campaign, or event.',
        deliverables: [
          'Press-ready CMYK PDF with bleed and crop marks',
          'Web-optimized JPG/PNG for WhatsApp and social sharing',
          'Up to 2 revision rounds',
        ],
      },
      {
        id: 'company-profile-design',
        name: 'Company Profile Design',
        priceKes: 'KES 5,000 – 15,000',
        priceUsdApprox: '~$40 – $115 USD',
        billingType: 'starting',
        turnaround: '5–8 Business Days',
        typicalScope: 'Executive multi-page presentation (4 to 12 pages) tailored for tenders, clients, and partners.',
        deliverables: [
          'Structured editorial layout matching your brand identity',
          'Services breakdown, company background, and leadership page',
          'Print-ready high-res PDF + lightweight email-friendly PDF',
          'Editable source file package',
        ],
      },
    ],
  },
  {
    categoryName: 'Web Development',
    categoryDescription:
      'Responsive, clear, and professional websites designed around real business purpose rather than appearance alone.',
    items: [
      {
        id: 'single-page-website',
        name: 'Single-Page Business Website',
        priceKes: 'KES 15,000 – 25,000',
        priceUsdApprox: '~$115 – $195 USD',
        billingType: 'starting',
        turnaround: '1–2 Weeks',
        typicalScope: 'Focused one-page site covering who you are, what you offer, past work, and clear contact links.',
        deliverables: [
          'Responsive design tested on mobile, tablet, and desktop',
          'Hero section, services breakdown, about section, and contact form/WhatsApp trigger',
          'Fast load speed and semantic SEO structure',
          'Full source code and deployment assistance',
        ],
      },
      {
        id: 'multi-page-website',
        name: 'Business Website (5–7 Pages)',
        priceKes: 'KES 30,000 – 55,000',
        priceUsdApprox: '~$230 – $425 USD',
        billingType: 'starting',
        turnaround: '3–4 Weeks',
        typicalScope: 'Comprehensive digital home for established businesses, institutions, or consulting firms.',
        deliverables: [
          '5–7 distinct pages (Home, About, Services, Case Studies/Gallery, FAQ, Contact)',
          'Modular component architecture with type-safe modern framework',
          'Inquiry form with email routing or WhatsApp integration',
          'Google Search Console setup and standard on-page SEO meta tags',
          'Handoff documentation and staff guide for updating text/images',
        ],
      },
      {
        id: 'ecommerce-website',
        name: 'E-Commerce Website',
        priceKes: 'From KES 60,000',
        priceUsdApprox: 'From ~$460 USD',
        billingType: 'starting',
        turnaround: '4–6 Weeks',
        typicalScope: 'Online store tailored for catalog management, secure checkout, and local payment gateways.',
        deliverables: [
          'Structured product catalog with categories, search, and variants',
          'Shopping cart and streamlined checkout flow',
          'Integration with local payment gateways (e.g. M-Pesa / card gateway)',
          'Automated order confirmation emails and admin order manager',
          'Staff training on adding products and updating inventory',
        ],
      },
    ],
  },
  {
    id: 'business-systems-pricing',
    categoryName: 'Business Systems & Automation',
    categoryDescription:
      'Practical tools that save time, eliminate reporting errors, and improve business visibility.',
    items: [
      {
        id: 'excel-automation-pricing',
        name: 'Excel Reporting & Automation',
        priceKes: 'KES 5,000 – 20,000',
        priceUsdApprox: '~$40 – $155 USD',
        billingType: 'starting',
        turnaround: '3–7 Business Days',
        typicalScope: 'Eliminating repetitive manual data entry, formatting, and calculation across workbooks.',
        deliverables: [
          'Custom formulas, macro/VBA routines, or Python data scripts',
          'Single-click data aggregation from multiple input sheets',
          'Data validation rules preventing manual input typos',
          'Short video walkthrough or visual guide on using the sheet',
        ],
      },
      {
        id: 'operational-dashboard-pricing',
        name: 'Operational Dashboards',
        priceKes: 'KES 12,000 – 40,000',
        priceUsdApprox: '~$95 – $310 USD',
        billingType: 'starting',
        turnaround: '1–2 Weeks',
        typicalScope: 'Visual KPI tracking for daily production, inventory movement, sales, or downtime.',
        deliverables: [
          'Interactive dashboard with automated charts and summary scorecards',
          'Daily, weekly, and monthly comparison views',
          'Automated variance and threshold alert formatting',
          'Executive printable or PDF export layout',
        ],
      },
      {
        id: 'workflow-automation-pricing',
        name: 'Workflow Automation or Prototype',
        priceKes: 'KES 20,000 – 75,000+',
        priceUsdApprox: '~$155 – $580+ USD',
        billingType: 'starting',
        turnaround: '2–4 Weeks',
        typicalScope: 'Custom digitisation of an internal process or custom web-based data entry tool.',
        deliverables: [
          'Process requirement breakdown and system architecture diagram',
          'Working web-based prototype or multi-app integration workflow',
          'Database setup or structured spreadsheet integration',
          'User testing, bug fixing, and admin documentation',
        ],
      },
      {
        id: 'maintenance-support-pricing',
        name: 'Ongoing Maintenance & Support',
        priceKes: 'KES 3,000 – 10,000 / month',
        priceUsdApprox: '~$25 – $80 USD/mo',
        billingType: 'monthly',
        turnaround: 'Continuous Support',
        typicalScope: 'Reliable technical support, content updates, and sheet maintenance.',
        deliverables: [
          'Priority bug fixing and formula troubleshooting',
          'Monthly backups and website dependency updates',
          'Minor content additions and report formatting updates',
          'Direct WhatsApp/email support channel during working hours',
        ],
      },
    ],
  },
];

export const WORK_PROCESS_STEPS: WorkStep[] = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    summary: 'Understanding the real problem before suggesting tools.',
    description:
      'We start with a conversation to understand your business context, current operational pain points, audience, and exact goals. I don’t recommend unnecessary tech—only what genuinely serves your business outcome.',
    keyDeliverable: 'Clear requirement summary and agreed objective.',
  },
  {
    number: '02',
    title: 'Scope & Proposal',
    summary: 'Transparent deliverables, timelines, and payment milestones.',
    description:
      'You receive a written proposal outlining the exact scope of work, timeline, deliverables, and payment schedule. Everything is agreed upon in advance so there are no surprise costs or hidden scope creep.',
    keyDeliverable: 'Detailed project proposal and milestone agreement.',
  },
  {
    number: '03',
    title: 'Design & Development',
    summary: 'Structured execution with regular milestone updates.',
    description:
      'Work proceeds in structured stages—whether drafting brand identities, building web pages, or writing automation scripts. I share working previews for feedback so you remain in control of the direction.',
    keyDeliverable: 'Working drafts, prototypes, or code preview.',
  },
  {
    number: '04',
    title: 'Review & Practical Testing',
    summary: 'Rigorous quality checks before anything goes live.',
    description:
      'Drawing on 5 years of manufacturing quality assurance: spreadsheets are tested with edge-case data, print layouts are proofed for color fidelity, and websites are tested across mobile, tablet, and desktop screens.',
    keyDeliverable: 'Testing verification and client sign-off.',
  },
  {
    number: '05',
    title: 'Delivery & Handover',
    summary: 'Complete source assets and user documentation.',
    description:
      'You receive all final assets: vector design files, full website source code, or unlocked Excel workbooks. Every project includes straightforward instructions or a short walkthrough so your team can work independently.',
    keyDeliverable: 'Final deliverables package, source files, and instructions.',
  },
  {
    number: '06',
    title: 'Optional Ongoing Support',
    summary: 'Reliable assistance whenever your business evolves.',
    description:
      'After handover, I remain available for scheduled maintenance, report updates, feature additions, or technical guidance as your business grows.',
    keyDeliverable: 'On-demand or monthly support agreement.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How much does a typical project cost?',
    answer:
      'Project costs depend on the specific scope, complexity, and turnaround required. Our starting ranges are transparent: logo design begins from KES 3,500, business websites start from KES 15,000, and Excel reporting automation starts from KES 5,000. Every project receives an itemized quote before work begins, with no unexpected fees.',
  },
  {
    question: 'How long does a website take to build and launch?',
    answer:
      'A single-page business website typically takes 1 to 2 weeks from content approval. A 5–7 page business website usually requires 3 to 4 weeks. E-commerce sites and custom systems generally take 4 to 6 weeks. Timelines depend heavily on prompt feedback and having your business content (text and photos) ready.',
  },
  {
    question: 'Can I request a service within a specific or limited budget?',
    answer:
      'Yes. If you have a specific budget in mind, share it honestly during discovery. In many cases, we can phase the project—delivering the most critical core features first (such as a starter single-page site or core reporting workbook) and adding advanced features later as revenue permits.',
  },
  {
    question: 'Do you work with clients outside Kenya?',
    answer:
      'Yes. I work with clients both in Kenya and internationally. For international engagements, communication is conducted via WhatsApp, Google Meet, and email. Pricing can be referenced in USD, and payments can be handled securely through international transfer or card options.',
  },
  {
    question: 'Can you improve an existing website or messy spreadsheet?',
    answer:
      'Absolutely. You do not always need to start from scratch. I regularly help businesses clean and automate existing Excel spreadsheets, fix formula errors, or modernize an existing outdated website to improve its credibility and mobile responsiveness.',
  },
  {
    question: 'Do you provide ongoing technical support after the project is delivered?',
    answer:
      'Yes. Every delivered project includes a standard 14-day warranty period for bug fixes and questions related to the agreed scope. For ongoing support, monthly maintenance packages are available starting from KES 3,000/month covering backups, updates, and minor adjustments.',
  },
  {
    question: 'What happens if my project requirements change mid-way?',
    answer:
      'Changes happen as businesses learn. If you need additions or changes beyond the agreed proposal, we pause, discuss the adjustment, agree on the cost and timeline impact in writing, and then proceed. You are never billed for unexpected extras without prior agreement.',
  },
];
