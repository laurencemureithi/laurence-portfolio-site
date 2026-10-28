export interface Project {
  id: string;
  name: string;
  category: string;
  projectType: 'Commercial Client Work' | 'Personal Venture' | 'Brand Concept' | 'Operational Case Study';
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
  startingPriceKes?: string;
  suitableFor: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  categoryName: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
}

export interface PricingPackageItem {
  id: string;
  service: string;
  indicativePriceKes: string;
  typicalScope: string;
  whatIsIncluded: string[];
  category: 'Design' | 'Web' | 'Data & Operations';
}

export interface OperationsCaseStudy {
  id: string;
  theme: string;
  title: string;
  problem: string;
  methodology: string[];
  deliverableAndValue: string;
  toolsUsed: string[];
}

export interface WorkStep {
  number: string;
  title: string;
  summary: string;
  description: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PERSONAL_INFO = {
  fullName: 'Laurence Magondu',
  headline: 'I turn business problems into better systems, smarter operations, and digital experiences that work.',
  subheadline:
    'A practical multidisciplinary professional combining manufacturing operations, continuous improvement, data analytics, automation, and creative digital execution.',
  email: 'laurencemureithi1999@gmail.com',
  whatsappNumber: '+254 110 343757',
  whatsappDisplay: '+254 110 343757',
  whatsappUrl:
    'https://wa.me/254110343757?text=Hi%20Laurence,%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.',
  linkedinUrl: 'https://www.linkedin.com/in/laurence-magondu-a96ab2295/',
  instagramUrl: 'https://www.instagram.com/laurencemagondu/',
  location: 'Nairobi, Kenya · Local & International Engagements',
  portraitImage: '/images/mur.jpg',
  credentials: [
    'Diploma in IT',
    'CQP Foundation-Level Training (Pursuing Intermediate)',
    'Manufacturing Operations Experience Across Quality, Production, Engineering & IT',
    'Kaizen & Lean Implementation with Japanese Consultants',
  ],
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'brand-design',
    number: '01',
    categoryName: 'Brand & Graphic Design',
    tagline: 'Distinctive, credible visual communication that commands trust.',
    description:
      'Helping businesses and entrepreneurs present themselves with authority and visual consistency across all customer touchpoints.',
    services: [
      {
        id: 'logo-design',
        title: 'Logo Design',
        problemSolved:
          'Inconsistent, amateur, or low-resolution logos that make a business look less credible when pitching clients or investors.',
        whatYouReceive: [
          'Multiple distinct concept directions based on your business market positioning',
          'Primary mark, horizontal lockup, submark, and monochrome variations',
          'Vector master files (AI, SVG, PDF) and optimized raster files (PNG, JPG)',
          'Clear minimum size and margin specifications',
        ],
        startingPriceKes: 'KES 5,000 – 12,000',
        suitableFor: 'New ventures, corporate startups, and established firms modernizing their visual identity.',
      },
      {
        id: 'starter-brand-identity',
        title: 'Starter Brand Identity',
        problemSolved:
          'Staff and marketing partners use conflicting fonts, colors, and layouts because no single visual standard exists.',
        whatYouReceive: [
          'Full logo suite with complete color hierarchy (HEX, RGB, CMYK values)',
          'Typography pairing rules and headline/body font hierarchy guide',
          'Core brand guideline sheet for printers, developers, and team members',
          'Business card, letterhead, and digital social media asset templates',
        ],
        startingPriceKes: 'KES 15,000 – 35,000',
        suitableFor: 'Growing SMEs, consulting practices, and businesses preparing for formal launch.',
      },
      {
        id: 'marketing-print-collateral',
        title: 'Posters, Flyers & Marketing Materials',
        problemSolved:
          'Poorly composed marketing materials that print with blurry text, distorted colors, or cropped edges.',
        whatYouReceive: [
          'High-impact promotional layouts for physical print and WhatsApp/social sharing',
          'Press-ready CMYK PDFs prepared with proper bleeds, trims, and crop marks',
          'Direct liaison with local commercial printers to verify proof prints',
        ],
        startingPriceKes: 'KES 2,000 – 5,000',
        suitableFor: 'Retail shops, product launches, event organizers, and sales teams.',
      },
      {
        id: 'brand-guidelines',
        title: 'Basic Brand Guidelines',
        problemSolved:
          'Brand dilution caused by inconsistent external vendor work and improper asset usage.',
        whatYouReceive: [
          'Reference document outlining logo clearance zones, color codes, and acceptable uses',
          'Typography rules and imagery styling recommendations',
          'Digital PDF format easy to distribute to internal staff and external agencies',
        ],
        startingPriceKes: 'Scoped with identity package',
        suitableFor: 'Organizations standardizing their communications across teams.',
      },
    ],
  },
  {
    id: 'web-digital',
    number: '02',
    categoryName: 'Websites & Digital Experiences',
    tagline: 'Fast, responsive web solutions designed around real business purpose.',
    description:
      'Custom websites and digital experiences built to explain your offerings clearly, earn customer trust, and drive actionable inquiries.',
    services: [
      {
        id: 'business-websites',
        title: 'Business Websites (4–6 Pages)',
        problemSolved:
          'A business has either no web presence or an outdated, slow site that does not convey its actual capability or generate leads.',
        whatYouReceive: [
          '4 to 6 structured pages (Home, About, Services/Capabilities, Case Studies, FAQ, Contact)',
          'Fully responsive design optimized for mobile, tablet, and desktop screens',
          'Direct WhatsApp chat integration and structured inquiry email routing',
          'Clean semantic code, search-engine metadata, and source file ownership',
        ],
        startingPriceKes: 'KES 30,000 – 65,000',
        suitableFor: 'Contractors, consulting firms, manufacturers, and professional service providers.',
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        problemSolved:
          'Marketing campaigns waste ad spend when sending visitors to a generic, distracted homepage.',
        whatYouReceive: [
          'Focused single-page layout centered around one clear value proposition and call to action',
          'Fast load speed, mobile-first responsiveness, and conversion-focused copy hierarchy',
          'Lead capture form or direct WhatsApp consultation link',
        ],
        startingPriceKes: 'KES 15,000 – 30,000',
        suitableFor: 'Specific product promotions, workshop registrations, seasonal campaigns, and service launches.',
      },
      {
        id: 'ecommerce-storefronts',
        title: 'Basic E-Commerce Storefronts',
        problemSolved:
          'Managing orders entirely through direct messages leads to missed orders and payment confirmation delays.',
        whatYouReceive: [
          'Structured product catalog with categories, search, and variants',
          'Frictionless mobile shopping cart and checkout flow',
          'Integration with local payment gateways (e.g. M-Pesa / card gateway)',
          'Admin guidance for updating stock and tracking orders',
        ],
        startingPriceKes: 'From KES 65,000',
        suitableFor: 'Boutique retailers, lifestyle brands, and product merchants selling online.',
      },
      {
        id: 'website-redesign-ux',
        title: 'Website Redesign & User Experience Improvements',
        problemSolved:
          'Existing website looks dated, loads slowly, or confuses visitors on mobile devices.',
        whatYouReceive: [
          'UX audit identifying navigation confusion, broken flows, and slow assets',
          'Modernized visual interface with improved typography and mobile layouts',
          'Performance optimization for rapid loading across mobile networks',
        ],
        startingPriceKes: 'KES 20,000 – 45,000',
        suitableFor: 'Businesses with existing web presence needing a modern, professional refresh.',
      },
    ],
  },
  {
    id: 'data-systems',
    number: '03',
    categoryName: 'Data, Reporting & Business Systems',
    tagline: 'Transforming raw operational data into actionable management clarity.',
    description:
      'Eliminating repetitive spreadsheet tasks, identifying discrepancies, and building practical visibility tools for operational decision-makers.',
    services: [
      {
        id: 'excel-reporting-dashboards',
        title: 'Excel Reporting & Dashboard Development',
        problemSolved:
          'Supervisors and managers waste hours compiling manual sheets with high risk of formula errors and broken links.',
        whatYouReceive: [
          'Automated Excel workbooks using advanced formulas, macros/VBA, or Python data routines',
          'Single-click data aggregation and executive visual summary cards',
          'Locked formulas and validation dropdowns preventing data-entry corruption',
          'User guide and short walkthrough so internal staff operate it independently',
        ],
        startingPriceKes: 'KES 10,000 – 30,000',
        suitableFor: 'Plant managers, inventory controllers, finance officers, and small business operators.',
      },
      {
        id: 'data-cleaning-analysis',
        title: 'Data Cleaning & Discrepancy Analysis',
        problemSolved:
          'Inconsistent records across production sheets, warehouse counts, and invoices make audits and planning painful.',
        whatYouReceive: [
          'Reconciliation routines identifying mismatches, duplicate entries, and missing values',
          'Cleaned, structured datasets formatted for reporting or migration',
          'Analysis summary highlighting operational variance and root cause patterns',
        ],
        startingPriceKes: 'KES 10,000 – 25,000',
        suitableFor: 'Businesses conducting stock reconciliations, operational audits, or system cleanups.',
      },
      {
        id: 'asset-machine-tracking',
        title: 'Asset & Machine Tracking Tools',
        problemSolved:
          'Unscheduled machinery downtime because maintenance schedules and machine service logs are kept on paper or forgotten.',
        whatYouReceive: [
          'Digital preventive maintenance scheduling calendar and service interval alerts',
          'Machine downtime logger categorizing electrical, mechanical, and operational stoppages',
          'Critical spare parts min-max stock tracker with reorder alerts',
        ],
        startingPriceKes: 'KES 15,000 – 35,000',
        suitableFor: 'Maintenance supervisors, workshop engineers, factory supervisors, and equipment owners.',
      },
      {
        id: 'business-system-prototypes',
        title: 'Practical Business-System Prototypes',
        problemSolved:
          'Multi-user spreadsheets break when shared, but enterprise ERP software costs thousands of dollars monthly.',
        whatYouReceive: [
          'Custom lightweight web portal for shift logging, asset lookup, or internal requests',
          'Structured database or cloud spreadsheet backbone with multi-user form entry',
          'Full source code ownership with zero recurring vendor lock-in',
        ],
        startingPriceKes: 'From KES 25,000',
        suitableFor: 'Operations ready to move beyond fragile spreadsheets without enterprise software costs.',
      },
    ],
  },
  {
    id: 'operations-improvement',
    number: '04',
    categoryName: 'Operations & Process Improvement',
    tagline: 'Practical Lean thinking, process standardization, and waste reduction.',
    description:
      'Grounded in manufacturing operations since 2021. Helping teams eliminate bottlenecks, standardize workflows, and build repeatable quality.',
    services: [
      {
        id: 'process-mapping-workflow',
        title: 'Process Mapping & Workflow Analysis',
        problemSolved:
          'Handoffs between departments are chaotic, causing delayed orders, redundant steps, and finger-pointing.',
        whatYouReceive: [
          'Visual swimlane process flowcharts mapping inputs, decision gates, and handoffs',
          'Bottleneck analysis identifying delays and non-value-adding operational steps',
          'Streamlined workflow proposal with clear roles and accountability checkpoints',
        ],
        startingPriceKes: 'KES 12,000 – 30,000',
        suitableFor: 'Manufacturing lines, logistics teams, service companies, and scaling startups.',
      },
      {
        id: 'sop-documentation',
        title: 'SOP & Procedure Documentation Package',
        problemSolved:
          'When key employees are absent, operations slow down or quality drops because procedures exist only in memory.',
        whatYouReceive: [
          'Detailed, step-by-step Standard Operating Procedures (SOPs) written in clear language',
          'Quality control checklists, machine startup/shutdown protocols, and verification sheets',
          'Digital template package ready for training new hires and internal audits',
        ],
        startingPriceKes: 'KES 8,000 – 25,000',
        suitableFor: 'Workshops, packaging plants, processing facilities, and quality departments.',
      },
      {
        id: 'lean-kaizen-support',
        title: 'Lean & Kaizen Support',
        problemSolved:
          'Recurrent operational waste, cluttered workstations, and high scrap rates that eat into profit margins.',
        whatYouReceive: [
          'Kaizen action plans targeting prioritized waste elimination (Muda)',
          '5S workplace organization guidance for tools, parts, and workstations',
          'Practical shift handover protocols and daily Gemba tracking boards',
        ],
        startingPriceKes: 'KES 15,000 – 40,000',
        suitableFor: 'Production lines, fabrication workshops, packaging facilities, and maintenance teams.',
      },
      {
        id: 'root-cause-analysis',
        title: 'Root-Cause Analysis & Quality Improvement',
        problemSolved:
          'Teams repeatedly fix the same defect on the surface instead of permanently eliminating the underlying cause.',
        whatYouReceive: [
          'Structured investigation using 5-Whys and Ishikawa (Fishbone) methodology',
          'Corrective and Preventive Action (CAPA) tracking documentation',
          'Defect trend analysis tracking repeat breakdown occurrences',
        ],
        startingPriceKes: 'KES 10,000 – 25,000',
        suitableFor: 'Quality assurance teams, maintenance engineers, and plant supervisors.',
      },
    ],
  },
];

export const PRICING_PACKAGES: PricingPackageItem[] = [
  {
    id: 'single-logo',
    service: 'Single Logo Design Package',
    indicativePriceKes: 'KES 5,000 – 12,000',
    typicalScope: 'Core brand logo for new businesses or clean modernization of existing marks.',
    whatIsIncluded: [
      '2–3 initial distinct concept directions',
      'Up to 3 revision rounds on chosen concept',
      'Vector master files (AI, SVG, PDF) and high-res PNG/JPG',
      'Monochrome, dark, and light background variations',
    ],
    category: 'Design',
  },
  {
    id: 'flyer-poster',
    service: 'Flyer or Poster Design',
    indicativePriceKes: 'KES 2,000 – 5,000',
    typicalScope: 'Single or double-sided promotional asset for a product, campaign, or event.',
    whatIsIncluded: [
      'Press-ready CMYK PDF with bleed and crop marks',
      'Web-optimized JPG/PNG for WhatsApp and social sharing',
      'Up to 2 revision rounds',
    ],
    category: 'Design',
  },
  {
    id: 'starter-identity',
    service: 'Starter Brand Identity',
    indicativePriceKes: 'KES 15,000 – 35,000',
    typicalScope: 'Cohesive visual foundation for businesses establishing professional market credibility.',
    whatIsIncluded: [
      'Master logo suite (primary mark, horizontal, submark, favicon)',
      'Curated color palette with exact HEX, RGB, and CMYK values',
      'Typography pairing rules and hierarchy guide',
      '1-page Brand Guideline sheet for staff and printers',
      'Business card and letterhead layout template',
    ],
    category: 'Design',
  },
  {
    id: 'landing-page',
    service: 'Landing Page',
    indicativePriceKes: 'KES 15,000 – 30,000',
    typicalScope: 'Focused one-page site covering who you are, what you offer, and clear conversion triggers.',
    whatIsIncluded: [
      'Responsive design tested on mobile, tablet, and desktop',
      'Hero section, capabilities, social proof, and contact form/WhatsApp trigger',
      'Fast load speed and semantic SEO structure',
      'Full source code and deployment assistance',
    ],
    category: 'Web',
  },
  {
    id: 'business-website',
    service: 'Business Website (4–6 Pages)',
    indicativePriceKes: 'KES 30,000 – 65,000',
    typicalScope: 'Comprehensive digital home for established businesses, institutions, or consulting firms.',
    whatIsIncluded: [
      '4–6 distinct pages (Home, About, Services, Case Studies, FAQ, Contact)',
      'Modular component architecture with type-safe modern framework',
      'Inquiry form with email routing and direct WhatsApp integration',
      'Standard on-page SEO meta tags and social sharing previews',
      'Handoff documentation and staff guide for updating text and imagery',
    ],
    category: 'Web',
  },
  {
    id: 'basic-online-store',
    service: 'Basic Online Store',
    indicativePriceKes: 'From KES 65,000',
    typicalScope: 'Online store tailored for catalog management, secure checkout, and local payment gateways.',
    whatIsIncluded: [
      'Structured product catalog with categories, search, and variants',
      'Shopping cart and streamlined checkout flow',
      'Integration with local payment gateways (e.g. M-Pesa / card gateway)',
      'Automated order confirmation emails and admin order manager',
      'Staff training on adding products and updating inventory',
    ],
    category: 'Web',
  },
  {
    id: 'excel-dashboard',
    service: 'Excel Report or Dashboard',
    indicativePriceKes: 'KES 10,000 – 30,000',
    typicalScope: 'Eliminating repetitive manual data entry, formatting, and calculation across workbooks.',
    whatIsIncluded: [
      'Custom formulas, macro/VBA routines, or Python data scripts',
      'Single-click data aggregation from multiple input sheets',
      'Data validation rules preventing manual input typos',
      'Short walkthrough or visual guide on using the sheet',
    ],
    category: 'Data & Operations',
  },
  {
    id: 'sop-package',
    service: 'SOP or Process Documentation Package',
    indicativePriceKes: 'KES 8,000 – 25,000',
    typicalScope: 'Standardizing critical procedures to prevent mistakes, ensure quality, and onboard staff.',
    whatIsIncluded: [
      'Documented Standard Operating Procedures for 2–5 core workflows',
      'Visual flowcharts illustrating inputs, steps, and handoff points',
      'Quality verification checklists and shift handover logs',
      'Editable digital master templates for internal updates',
    ],
    category: 'Data & Operations',
  },
  {
    id: 'workflow-prototype',
    service: 'Workflow or Automation Prototype',
    indicativePriceKes: 'From KES 25,000',
    typicalScope: 'Custom digitisation of an internal process or custom web-based data entry tool.',
    whatIsIncluded: [
      'Process requirement breakdown and system architecture diagram',
      'Working web-based prototype or multi-app integration workflow',
      'Database setup or structured spreadsheet integration',
      'User testing, bug fixing, and admin documentation',
    ],
    category: 'Data & Operations',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'opsloom',
    name: 'Opsloom',
    category: 'Digital Solutions & Operational Systems',
    projectType: 'Personal Venture',
    businessContext:
      'Growing businesses frequently struggle with a gap between fragile Excel sheets and bloated, expensive software. Opsloom was created to develop practical digital systems, operational reporting dashboards, and workflow automation for real business problems.',
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
    name: 'Bluprint Graphics Design',
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
    id: 'ultravetis-operations',
    name: 'Manufacturing Systems & Operational Improvement',
    category: 'Operational Systems & Quality Experience',
    projectType: 'Operational Case Study',
    businessContext:
      'Manufacturing operations require strict alignment between production throughput, machine maintenance, quality control, and operational reporting. Without automated tracking, shift handovers suffer from data gaps and delayed downtime analysis.',
    myContribution:
      'Hands-on operational reporting, Excel-based machine-status tracking, process documentation, Kaizen and Lean improvement activities, and data-led problem-solving with cross-functional manufacturing teams.',
    approachAndTools:
      'Lean & Kaizen methodologies, root-cause analysis (5-Whys, Fishbone), advanced Excel modeling, VBA scripts, SOP documentation, and machine status tracking logs.',
    deliverables: [
      'Automated machine-status and downtime reporting models',
      'Standardized shift handover protocols and operational log sheets',
      'Root-cause investigation procedures and corrective action logs',
      'Departmental SOP documentation and internal audit checklists',
    ],
    statusOrOutcome:
      'Operational experience gained in active manufacturing environment since 2021, respecting employer confidentiality.',
    image: '/images/logoh-dark.png',
    alt: 'Manufacturing systems and operational improvement case study overview',
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
    featured: false,
  },
];

export const OPERATIONS_CASE_STUDIES: OperationsCaseStudy[] = [
  {
    id: 'machine-status',
    theme: 'Asset & Machine Tracking',
    title: 'Machine-Status & Downtime Log Modeling',
    problem:
      'Unscheduled machinery stoppages were recorded informally in paper logbooks, making it difficult to analyze whether recurring downtime stemmed from electrical faults, mechanical wear, operator delays, or raw material bottlenecks.',
    methodology: [
      'Mapped machine stoppage categories (Mechanical, Electrical, Setup, Material)',
      'Built a structured Excel tracking model capturing machine ID, shift, duration, and root cause',
      'Automated Pareto analysis to identify the top 20% of failure modes causing 80% of lost hours',
    ],
    deliverableAndValue:
      'Standardized downtime log with automated summary charts, enabling maintenance teams to prioritize preventive part replacements before catastrophic failure.',
    toolsUsed: ['Advanced Excel', 'VBA Data Validation', 'Pareto Analysis', 'Maintenance Logs'],
  },
  {
    id: 'operational-reporting',
    theme: 'Management Reporting',
    title: 'Turning Raw Daily Shift Logs into Executive Management Summaries',
    problem:
      'Compiling weekly and monthly operational reports consumed over 8 hours of manual data entry, cutting into actual shop-floor supervision time and introducing calculation errors.',
    methodology: [
      'Consolidated multiple isolated shift forms into a single standardized master workbook',
      'Created automated formula pipelines linking daily logs to weekly and monthly summaries',
      'Built a visual KPI dashboard tracking output vs. target, scrap percentages, and efficiency',
    ],
    deliverableAndValue:
      'Executive dashboard updated in minutes rather than hours, giving leadership immediate visibility into weekly production trends.',
    toolsUsed: ['Advanced Excel', 'Dynamic Array Formulas', 'KPI Scorecards', 'Operational Metrics'],
  },
  {
    id: 'discrepancy-analysis',
    theme: 'Data Reconciliation',
    title: 'Investigating Process & Inventory Discrepancies',
    problem:
      'Recurring discrepancies between physical floor stock counts and central system records caused stockouts, delayed production orders, and audit friction.',
    methodology: [
      'Constructed automated reconciliation sheets using conditional matching and variance flags',
      'Traced discrepancies across production input, scrap reporting, and finished goods handoffs',
      'Identified root-cause failure points where operators bypassed standardized log entries',
    ],
    deliverableAndValue:
      'Reconciliation routine that quickly pinpoints where numbers diverge, reducing audit preparation time and improving inventory accuracy.',
    toolsUsed: ['Excel Reconciliation Routines', 'Variance Analysis', 'Audit Checklists', 'Python Scripts'],
  },
  {
    id: 'sop-structuring',
    theme: 'Standardization',
    title: 'Structuring Standard Operating Procedures (SOPs)',
    problem:
      'Critical machine setup and quality inspection procedures were stored only in the memory of senior operators, leading to high defect rates whenever new staff worked a shift.',
    methodology: [
      'Shadowed experienced operators to document exact sequence of preparation, operation, and safety checks',
      'Created visual swimlane workflow diagrams depicting inputs, decisions, and required checks',
      'Drafted clear, jargon-free SOPs formatted with visual step-by-step guidance and sign-off criteria',
    ],
    deliverableAndValue:
      'Standardized documentation package adopted across teams, accelerating new operator onboarding and reducing human setup errors.',
    toolsUsed: ['SOP Documentation', 'Swimlane Mapping', 'Visual Quality Controls', 'Kaizen Standardization'],
  },
  {
    id: 'root-cause-lean',
    theme: 'Lean & Continuous Improvement',
    title: 'Applying 5-Whys & Root-Cause Analysis to Recurring Defects',
    problem:
      'Production lines experienced chronic packaging seal defects that were treated as random occurrences rather than systematically investigated.',
    methodology: [
      'Participated in Lean improvement activities alongside Japanese consultants and manufacturing leads',
      'Applied 5-Whys methodology and Fishbone diagrams to drill past symptoms to the root temperature sensor failure',
      'Formulated corrective and preventive action (CAPA) plan and recalibrated temperature inspection logs',
    ],
    deliverableAndValue:
      'Eliminated recurring seal defects, demonstrating that structured root-cause investigation permanently prevents recurring operational scrap.',
    toolsUsed: ['5-Whys Analysis', 'Ishikawa Fishbone', 'Kaizen Principles', 'CAPA Tracking'],
  },
  {
    id: 'python-excel-performance',
    theme: 'Data Analytics',
    title: 'Operational Performance Analysis using Python & Excel',
    problem:
      'Large multi-month operational datasets exceeded standard spreadsheet usability, freezing computers and slowing deep trend analysis.',
    methodology: [
      'Wrote clean Python data scripts (Pandas) to clean, filter, and aggregate multi-file production records',
      'Analyzed correlation between machine running speeds, ambient temperatures, and defect occurrences',
      'Exported clean summarized tables directly into lightweight, presentation-ready Excel sheets',
    ],
    deliverableAndValue:
      'Deep operational insight into machine operating parameters without requiring expensive analytics software.',
    toolsUsed: ['Python (Pandas)', 'Data Cleansing', 'Automated Export', 'Statistical Correlation'],
  },
];

export const WORK_PROCESS_STEPS: WorkStep[] = [
  {
    number: '01',
    title: 'Understand the Business Problem',
    summary: 'Diagnosing the root challenge before recommending tools.',
    description:
      'We start with an honest conversation about what is actually causing friction—whether it is a bottlenecked manual reporting sheet, an unconvincing brand identity, or a messy handoff. I focus on the outcome your business needs, not unnecessary technology.',
    deliverable: 'Agreed problem statement and objective.',
  },
  {
    number: '02',
    title: 'Define Scope & Expected Result',
    summary: 'Clear written boundaries, timelines, and milestones.',
    description:
      'You receive an itemized proposal detailing the exact deliverables, turnaround schedule, and payment milestones. Everything is transparent upfront with zero unexpected costs or unagreed additions.',
    deliverable: 'Written scope proposal and milestone agreement.',
  },
  {
    number: '03',
    title: 'Analyse Requirements & Information',
    summary: 'Auditing available data, assets, and constraints.',
    description:
      'I inspect your existing spreadsheets, brand files, workflow steps, or content. If data is dirty or content is missing, we address it here so development proceeds on solid ground.',
    deliverable: 'Information audit and architecture plan.',
  },
  {
    number: '04',
    title: 'Develop the Solution',
    summary: 'Structured execution with regular preview updates.',
    description:
      'Work proceeds in structured stages—whether writing clean React/TypeScript code, building automated Excel formulas, or vectorizing brand identity assets. You receive working previews to ensure alignment.',
    deliverable: 'Working drafts, prototypes, or code preview.',
  },
  {
    number: '05',
    title: 'Test, Refine & Deliver',
    summary: 'Rigorous verification before anything goes live.',
    description:
      'Drawing on 5 years of manufacturing quality assurance: workbooks are stress-tested with edge cases, websites are tested across mobile and desktop browsers, and print files are verified for color separation and bleeds.',
    deliverable: 'Tested solution and client sign-off.',
  },
  {
    number: '06',
    title: 'Handover & Ongoing Support',
    summary: 'Complete source assets and user instructions.',
    description:
      'You receive all final assets—unlocked spreadsheets, vector files, or clean source code—along with straightforward user guides. I explain the handover clearly and remain available for scheduled ongoing support.',
    deliverable: 'Full source handoff, user guide, and support options.',
  },
];

export const WHY_WORK_WITH_ME: { title: string; desc: string }[] = [
  {
    title: 'I consider the business problem, not only the requested deliverable',
    desc: 'If a client asks for a new website when their real bottleneck is internal order tracking, I help identify what will actually drive commercial value.',
  },
  {
    title: 'I connect process thinking with data and technology',
    desc: 'Drawing on 5 years of manufacturing operations, Kaizen, and IT discipline, I build tools that operate reliably in real-world conditions.',
  },
  {
    title: 'I value clarity, usability, and practical outcomes',
    desc: 'No speculative jargon, no bloated software subscriptions, and no over-engineered solutions. I build what your team can comfortably maintain.',
  },
  {
    title: 'I work across both analytical and creative tasks',
    desc: 'You do not need to hire one person for spreadsheet automation and another for your brand identity. I bridge both sides of the problem.',
  },
  {
    title: 'I aim for solutions that fit your needs and budget',
    desc: 'With transparent starting prices in KES, clear milestone payments, and modular scopes, businesses get exceptional value without financial surprises.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How much does a typical project cost?',
    answer:
      'Project costs depend on the specific scope, complexity, and turnaround required. All prices are transparently displayed in KES: logo design begins from KES 5,000, business websites start from KES 30,000, and Excel reporting automation starts from KES 10,000. Every project receives an itemized quote before work begins, with no unexpected fees.',
  },
  {
    question: 'How long does a website take to build and launch?',
    answer:
      'A landing page or single-page site typically takes 1 to 2 weeks from content approval. A 4–6 page business website usually requires 3 to 4 weeks. E-commerce storefronts and custom systems generally take 4 to 6 weeks. Timelines depend heavily on prompt feedback and having your business content (text and photos) ready.',
  },
  {
    question: 'Can I request a service within a specific or limited budget?',
    answer:
      'Yes. If you have a specific budget in mind, share it honestly during discovery. In many cases, we can phase the project—delivering the most critical core features first (such as a starter single-page site or core reporting workbook) and adding advanced features later as revenue permits.',
  },
  {
    question: 'Do you work with clients outside Kenya?',
    answer:
      'Yes. I work with clients both in Kenya and internationally. Communication is conducted via WhatsApp, Google Meet, and email. While primary prices are in KES, international agreements can be quoted with an equivalent USD reference, and payments can be handled securely through international transfer or card options.',
  },
  {
    question: 'Can you improve an existing website or messy spreadsheet?',
    answer:
      'Absolutely. You do not always need to start from scratch. I regularly help businesses clean and automate existing Excel spreadsheets, fix formula errors, or modernize an existing outdated website to improve its credibility and mobile responsiveness.',
  },
  {
    question: 'Do you provide ongoing technical support after delivery?',
    answer:
      'Yes. Every delivered project includes a standard 14-day warranty period for bug fixes and questions related to the agreed scope. For ongoing support, monthly maintenance agreements are available covering backups, updates, minor additions, and priority troubleshooting.',
  },
  {
    question: 'What happens if my project requirements change mid-way?',
    answer:
      'Changes happen as businesses learn. If you need additions or changes beyond the agreed proposal, we pause, discuss the adjustment, agree on the cost and timeline impact in writing, and then proceed. You are never billed for unexpected extras without prior agreement.',
  },
];
