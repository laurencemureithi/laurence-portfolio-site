# Laurence Magondu — Business Systems, Automation & Digital Experiences

> **Production Portfolio Website & Commercial Client Acquisition Engine**  
> Modern, high-performance, conversion-engineered web application built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## 1. Verified Identity & Official Contact Details

- **Professional Name**: Laurence Magondu
- **Email**: `laurencemureithi1999@gmail.com`
- **WhatsApp**: `+254 110 343757` ([Open Direct Chat](https://wa.me/254110343757?text=Hi%20Laurence,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.))
- **LinkedIn**: [https://www.linkedin.com/in/laurence-magondu-a96ab2295/](https://www.linkedin.com/in/laurence-magondu-a96ab2295/)
- **Instagram**: [https://www.instagram.com/laurencemagondu/](https://www.instagram.com/laurencemagondu/)
- **Location**: Nairobi, Kenya (Serving clients across East Africa & Internationally)

---

## 2. Professional Positioning & Verified Background

- **Manufacturing Operations Experience**: Working in manufacturing operations since 2021 (Ultravetis) across quality, production, maintenance workflows, operational reporting, and IT support.
- **Continuous Improvement & Kaizen**: Practical experience in 5S, Kaizen activities with Japanese management consultants, 5-Whys root cause analysis, process standardization, and SOP development.
- **Formal Training**: Diploma in Information Technology & CQI | IRCA Certified Quality Practitioner (CQP) Foundation / Intermediate training.
- **Data Analytics & Reporting**: Advanced operational reporting in Excel (dynamic lookups, automated reconciliation routines, shift KPI summaries) and Python-based data cleaning/analysis.
- **Digital Systems & Automation**: Opsloom digital platforms, internal tools, and operational prototypes.
- **Brand & Web Execution**: Bluprint brand identity, commercial print design, high-converting business websites, and digital storefronts.

---

## 3. GitHub Pages Deployment Guide

This project is pre-configured with **`base: './'`** in `vite.config.ts` and includes a dedicated automated GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Step-by-Step Instructions:

#### Step 1: Push Code to Your GitHub Repository
If you haven't pushed your latest repository changes yet:
```bash
git add .
git commit -m "Upgrade portfolio to modern Laurence Magondu site"
git push origin main
```
*(If your default branch is `master`, push to `master` — the workflow listens to both `main` and `master`).*

#### Step 2: Enable GitHub Pages with GitHub Actions
1. Open your repository on GitHub: `https://github.com/laurencemureithi/laurence-portfolio-site` (or your repo name).
2. Go to **Settings** > **Pages** (in the left sidebar under "Code and automation").
3. Under **Build and deployment**:
   - Change **Source** from `Deploy from a branch` to **`GitHub Actions`**.
4. That's it! GitHub will automatically trigger the workflow inside `.github/workflows/deploy.yml`.

#### Step 3: Verify the Live Deployment
1. Go to the **Actions** tab in your repository.
2. You will see the workflow `Deploy Laurence Magondu Portfolio to GitHub Pages` running.
3. Once completed (usually 1–2 minutes), it outputs the public URL:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```
4. Because `base: './'` is enabled in `vite.config.ts`, all assets (CSS, JS, images, fonts) resolve correctly on any subpath without 404 errors.

---

## 4. Local Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:3000)
npm run dev

# 3. Type check & lint code
npm run lint

# 4. Build optimized production bundle
npm run build
```

---

## 5. Site Architecture & Directory Overview

```
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD workflow
├── images/                        # Real brand assets & portrait
│   ├── mur.jpg                    # Laurence Magondu authentic portrait
│   ├── card1.png                  # Bluprint project asset
│   ├── logoo.png                  # Opsloom project asset
│   ├── nexus.jpg                  # NexusPulse project asset
│   ├── wemacard.png               # Wema Gardens project asset
│   └── favicon.svg                # Geometric vector favicon
├── src/
│   ├── components/                # Modular React UI components
│   │   ├── Header.tsx             # Sticky navbar, mobile drawer, theme toggle
│   │   ├── Hero.tsx               # High-impact editorial hero with portrait & CTAs
│   │   ├── Services.tsx           # 4 distinct commercial service categories
│   │   ├── SelectedWork.tsx       # 5 featured commercial & venture case studies
│   │   ├── OperationsCaseStudies.tsx # 6 deep manufacturing & data operations cards
│   │   ├── About.tsx              # Authentic professional narrative & credentials
│   │   ├── Pricing.tsx            # Transparent KES pricing guide & scope factors
│   │   ├── Process.tsx            # 6-stage structured engagement methodology
│   │   ├── WhyWorkWithMe.tsx      # 5 grounded differentiators & client guarantees
│   │   ├── FAQ.tsx                # Interactive 7-question accordion
│   │   ├── Contact.tsx            # Conversion form, prefilled WhatsApp, direct mail
│   │   └── Footer.tsx             # Professional footer & copyright
│   ├── data/
│   │   └── portfolio.ts           # MASTER DATA: Edit all content, prices & case studies here
│   ├── types/
│   │   └── portfolio.ts           # Clean TypeScript interfaces
│   ├── App.tsx                    # Root layout coordinator & dark/light theme state
│   ├── index.css                  # Tailwind CSS v4 design tokens & utilities
│   └── main.tsx                   # React 19 application mount
├── index.html                     # SEO & OpenGraph tags for Laurence Magondu
├── vite.config.ts                 # Relative base path for universal subpath hosting
└── package.json                   # Dependencies & build scripts
```

---

## 6. How to Edit Content & Pricing

All website content is centralized in **`src/data/portfolio.ts`**:

- **Update Pricing**: Modify the `PRICING_PACKAGES` array with updated KES rates or scope details.
- **Add / Edit Projects**: Update the `SELECTED_PROJECTS` array (titles, tags, problem statements, solutions, outcomes, and live links).
- **Edit Operations Case Studies**: Update the `OPERATIONS_CASE_STUDIES` array (methodologies, metrics, and tools used).
- **Update Contact Info**: Modify `PERSONAL_DETAILS` to adjust phone numbers or social links.

---

## 7. Connecting an Automated Form Service (Optional)

The contact section currently has an **honest, reliable static setup**:
1. When a client clicks "Send Enquiry via Email", it generates a pre-formatted message in their email client addressed directly to `laurencemureithi1999@gmail.com`.
2. A single click opens WhatsApp with all form details (service, budget, timeline, project description) pre-filled to `+254 110 343757`.
3. Visitors can copy your verified email with one click.

### If you want direct background email notifications without opening a mail client:
1. Sign up for free at [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
2. Create a new form endpoint (e.g. `https://formspree.io/f/mqkenzrw`).
3. In `src/components/Contact.tsx`, update the `handleSubmit` function to send the data via a `fetch` POST request to your endpoint:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## 8. License & Ownership

© 2026 Laurence Magondu. All rights reserved. Built for commercial client acquisition and professional representation.
