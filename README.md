# Laurence Magondu — Business Systems, Automation and Digital Experiences

A modern, high-performance, conversion-focused professional portfolio website for **Laurence Magondu**.

## Professional Positioning

I help businesses improve operations, make better use of their data, and build stronger digital experiences through practical technology, process improvement, and thoughtful design.

- **Manufacturing & Operations Experience**: Working in manufacturing operations since 2021 across quality, production, maintenance workflows, operational reporting, and IT support.
- **Continuous Improvement**: Kaizen, Lean activities, root-cause analysis (5-Whys), process standardization, and SOP development.
- **Data Analytics & Reporting**: Automated Excel reporting, KPI dashboards, reconciliation routines, and Python data analysis.
- **Digital Systems & Automation**: Practical digital tools, operational prototypes, and web portals through Opsloom.
- **Digital Presence & Design**: Responsive web development, e-commerce, and commercial brand identity design through Bluprint.

---

## Verified Contact Details

- **Professional Name**: Laurence Magondu
- **Email**: `laurencemureithi1999@gmail.com`
- **WhatsApp**: `+254 110 343757` (pre-filled automated message link)
- **LinkedIn**: [https://www.linkedin.com/in/laurence-magondu-a96ab2295/](https://www.linkedin.com/in/laurence-magondu-a96ab2295/)
- **Instagram**: [https://www.instagram.com/laurencemagondu/](https://www.instagram.com/laurencemagondu/)
- **Location**: Nairobi, Kenya · Working with local and international clients

---

## Website Structure & Key Sections

1. **Header & Navigation**: Laurence Magondu brand mark, responsive navigation links (Work, Services, About, Pricing, How I Work, FAQ, Contact), accessible mobile drawer, and functional dark/light theme toggle.
2. **Hero Section**: Confident, grounded headline and supporting statement, real portrait of Laurence Magondu (`/images/mur.jpg`), and dual CTAs ("View My Work" and "Discuss a Project").
3. **Services (2 Structured Categories)**:
   - **Category A**: Business Systems & Operational Improvement (Excel reporting, KPI dashboards, data reconciliation, SOPs, Lean problem-solving, maintenance tracking, web systems, practical automation).
   - **Category B**: Digital Presence & Creative Design (Logo design, marketing materials & print, business websites, e-commerce, landing pages, company profiles).
4. **Selected Work & Honest Case Studies**:
   - **Opsloom** (Personal Venture · Digital Solutions & Operational Systems)
   - **Bluprint** (Commercial Client Work · Brand Identity & Commercial Print Design)
   - **NexusPulse** (Personal Venture · E-Commerce & Digital Commerce)
   - **Wema Gardens** (Brand Concept · Event Identity & Spatial Collateral)
   - **EABC Operations** (Operational Prototype · Manufacturing Systems & Process Improvement)
5. **About Section**: Full narrative explaining 5 years of manufacturing operations, Kaizen/Lean discipline, and how practical problem-solving connects to digital execution.
6. **Pricing & Packages**: Indicative starting ranges in KES with optional USD reference:
   - Easily editable in `src/data/portfolio.ts` (`PRICING_PACKAGES`).
   - Clear disclosures regarding third-party hosting/domain exclusions and scope factors.
7. **How I Work**: 6-step methodology (Discovery & Requirements, Scope & Proposal, Design & Development, Review & Practical Testing, Delivery & Handover, Optional Ongoing Support).
8. **Standards & Accountability**: Replaces unverified quotes with 4 grounded operating standards (Manufacturing Quality Discipline, 100% Asset Ownership, Written Milestone Proposals, Documentation & Training).
9. **Frequently Asked Questions**: 7 practical answers covering cost, timing, budgets, international clients, existing spreadsheet fixes, support, and scope adjustments.
10. **Contact & Conversion**: Form with service and budget selectors, mailto email generation, direct prefilled WhatsApp integration, email copy button, and transparent instructions for connecting an automated form backend.

---

## Local Development & Build

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Run TypeScript type check
npm run lint

# Build production bundle
npm run build
```

## Connecting a Form Backend (Optional Action)

The website currently uses an honest static fallback: when a visitor submits the contact form, it launches their default email client with all fields pre-formatted for `laurencemureithi1999@gmail.com`, and provides a one-click WhatsApp button with the same pre-filled information.

To connect an automated form submission backend without requiring the visitor's mail client:
1. Register a free endpoint on [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
2. In `src/components/Contact.tsx`, replace the `window.location.href = mailto:...` handler with a standard `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: ... })`.
