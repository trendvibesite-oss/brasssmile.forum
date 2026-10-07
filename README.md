# BrassSmile Platform (`brasssmile.forum`)

A production-ready, SEO-first, high-performance editorial publication and educational knowledge clearinghouse built for **BrassSmile** (`https://brasssmile.forum/`).

---

## 1. Project Overview & Brand Positioning

**BrassSmile** is designed to establish topical relevance and entity association around the branded keyword **brasssmile**.

Rather than presenting as a commercial dental clinic or generic affiliate site, the platform operates as an **authoritative, independent multi-topic publication and educational resource**. It resolves SERP ambiguity by explaining the multi-topic digital publishing model while grounding smile-aesthetics content in biological oral science (enamel vs. dentin optics, extrinsic vs. intrinsic discoloration, and clinical boundaries of AI smile tools).

### Health & Clinical Disclaimer Policy
The platform strictly maintains informational integrity. All health-related content is accompanied by prominent medical disclaimers explaining that general educational guides never substitute for personalized diagnosis or treatment by a licensed dental professional (DDS/DMD).

---

## 2. Information Architecture & URL Hierarchy

```
BrassSmile (https://brasssmile.forum/)
├── / (Homepage: 2,500+ word comprehensive entity guide)
├── /about/ (Mission, research desk, editorial ethics, and standards)
├── /contact/ (Accessible contact form with honeypot spam protection)
│
├── Content Verticals / Category Hubs:
│   ├── /healthcare/ (Enamel & dentin biology, discoloration etiology, clinical care)
│   ├── /tech/ (Computer vision algorithms, AI smile analysis limits, imaging)
│   ├── /business/ (Publishing economics, domain strategy, entity SEO)
│   ├── /services/ (Consultation standards, finding verified providers)
│   └── /home-decor/ (Task lighting CRI, vanity ergonomics, sanitary design)
│
├── Article Knowledge Base (/articles/[slug]/):
│   ├── /articles/understanding-tooth-discoloration-enamel-dentin/
│   ├── /articles/ai-smile-analysis-technology-capabilities-limits/
│   ├── /articles/evaluating-online-health-information-credibility-guide/
│   ├── /articles/at-home-teeth-whitening-vs-professional-dental-care/
│   ├── /articles/smart-lighting-ergonomics-daily-smile-care-routines/
│   └── /articles/digital-publishing-models-in-specialized-wellness/
│
├── Trust & Legal Pages:
│   ├── /disclaimer/ (Comprehensive Health & Medical Information Disclaimer)
│   ├── /privacy-policy/ (Data privacy standards, zero tracking cookies)
│   └── /terms/ (Terms of Service, non-commercial educational use)
│
└── Technical SEO Infrastructure:
    ├── /sitemap.xml (Dynamically generated via app/sitemap.ts)
    ├── /robots.txt (Dynamically generated via app/robots.ts)
    └── /manifest.webmanifest (PWA-ready manifest via app/manifest.ts)
```

---

## 3. Brand Design System & Color Tokens

- **Primary**: Deep Charcoal / Near-Black (`#0F172A`)
- **Accent (Brass)**: Warm Refined Brass (`#C59B27`, hover: `#B0891F`, light tint: `#FDF8EA`)
- **Background**: Warm Editorial Off-White (`#FAF9F5`)
- **Surface**: Clean Card White (`#FFFFFF`) / Warm Surface Alt (`#F4F1EA`)
- **Text**: High-contrast Slate (`#1E293B`) / Subdued Muted Slate (`#64748B`)
- **Borders**: Warm Neutral Tone (`#E5E0D3`)
- **Accessibility**: 100% WCAG AA/AAA compliant color contrast, visible focus rings, and screen-reader skip links.

---

## 4. Technical SEO & Schema.org Implementation

- **Strict Heading Hierarchy**: Single semantic `<h1>` per page, followed by logical `<h2>`, `<h3>`, and `<h4>` structures.
- **Canonical URLs**: Self-referencing canonical tags on every route pointing to `https://brasssmile.forum/...`.
- **OpenGraph & Twitter Cards**: Branded 1200×630 metadata (`/og-default.png`) pre-configured for social sharing.
- **Structured Data (JSON-LD)**:
  - `Organization` & `WebSite` in root layout.
  - `WebPage` on all indexable pages.
  - `BreadcrumbList` in all breadcrumb components.
  - `FAQPage` schema on the homepage and article templates.
  - `Article` schema with author attribution and ISO timestamps.

---

## 5. Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Rendering**: Static Site Generation (SSG) with Partial Prefetching and Component Caching
- **Icons & Graphics**: Pure inline SVG vectors (Zero runtime JavaScript bundle cost)
- **Deployment Target**: Vercel with Custom Domain (`brasssmile.forum`)

---

## 6. Local Development & Production Build

### Prerequisites
- Node.js 18+ (tested on Node.js 24)
- npm 9+

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Start production server locally
npm start

# 5. Run linter
npm run lint
```

---

## 7. Deployment Instructions

### A. Deploy to GitHub

```bash
# Initialize git if not already present
git add .
git commit -m "feat: complete production-ready BrassSmile platform"
git branch -M main

# Add your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/brasssmile-platform.git

# Push to GitHub
git push -u origin main
```

### B. Deploy to Vercel

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New Project** &rarr; **Import Git Repository**.
3. Select your `brasssmile-platform` repository.
4. Vercel will automatically detect the **Next.js** framework with default build settings (`npm run build`, output `.next`).
5. Click **Deploy**.
6. Once deployed, navigate to **Project Settings &rarr; Domains**:
   - Add your custom domain: `brasssmile.forum` (and optionally `www.brasssmile.forum`).
   - Configure DNS settings at your domain registrar:
     - **A Record**: `76.76.21.21` pointing `@` to Vercel.
     - **CNAME Record**: `cname.vercel-dns.com` pointing `www` to Vercel.
7. Vercel will automatically issue and provision a free SSL/TLS certificate.
