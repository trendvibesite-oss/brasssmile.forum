import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import HeroBrassSmileGraphic from "@/components/visuals/HeroBrassSmileGraphic";
import ToothStructureGraphic from "@/components/visuals/ToothStructureGraphic";
import DiscolorationFactorsGraphic from "@/components/visuals/DiscolorationFactorsGraphic";
import AiVsClinicalGraphic from "@/components/visuals/AiVsClinicalGraphic";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import MedicalDisclaimerBanner from "@/components/MedicalDisclaimerBanner";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/articles";
import { constructMetadata, getFAQSchema, getWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrassSmile: What It Is, What the Website Covers & What You Should Know",
  description:
    "An authoritative guide to BrassSmile. Understand what the website publishes, navigate multiple similar domains, explore smile science and tooth anatomy, and evaluate online resources effectively.",
  canonicalPath: "",
});

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "What is BrassSmile?",
    answer:
      "BrassSmile is a recognizable digital name associated with several web properties, most prominently multi-topic informational publishing covering subjects like business, education, finance, healthcare, technology, and travel. It serves as an educational resource and information clearinghouse rather than a commercial dental practice.",
  },
  {
    question: "What does the BrassSmile publishing ecosystem cover?",
    answer:
      "The BrassSmile editorial ecosystem spans five foundational categories: Technology (AI analysis, digital health tools), Business (publishing models, domain strategy), Services (provider verification, consultation navigation), Home Decor (grooming ergonomics, vanity lighting), and Healthcare (oral biology, enamel preservation, smile aesthetics).",
  },
  {
    question: "Is BrassSmile a dental clinic or product store?",
    answer:
      "No. BrassSmile does not provide clinical patient treatment, sell dental appliances, or manufacture toothpastes. It operates strictly as an independent informational publisher providing research-based articles and educational guides.",
  },
  {
    question: "Why do search results show multiple similar domains like BrassSmile.info and BrassSmiles.org?",
    answer:
      "Different independent entities have registered similar domain names with varying focuses. For example, brasssmile.info centers on AI smile assessments and cosmetic care, brasssmiles.org focuses on clinical dental discoloration, while BrassSmile.com and brasssmile.forum operate broader multi-topic editorial platforms. Users should verify the exact domain to understand each site's specific scope.",
  },
  {
    question: "Why do teeth often appear yellow even when brushed thoroughly every day?",
    answer:
      "Daily brushing cleans the outer pellicle surface, but tooth color is largely dictated by internal anatomy. Enamel is semi-translucent, meaning the naturally yellow or amber dentin beneath shines through. Additionally, enamel naturally thins over time while dentin thickens, which can make smiles appear darker regardless of surface hygiene.",
  },
  {
    question: "Can AI smile analysis replace an in-person dental checkup?",
    answer:
      "No. Smartphone AI tools analyze only visible 2D surface pixels for aesthetic symmetry and estimated shade. They cannot examine bone levels, inspect interproximal decay between tight teeth, detect subgingival periodontal pockets, or evaluate nerve vitality—all of which require clinical radiographs, physical instrumentation, and an examination by a licensed dentist.",
  },
  {
    question: "Are at-home whitening products safe for tooth enamel?",
    answer:
      "Products bearing the American Dental Association (ADA) Seal of Acceptance use controlled concentrations of neutral-pH peroxides that do not dissolve mineral enamel when used according to instructions. However, unregulated high-abrasion DIY pastes (such as baking soda and lemon juice or abrasive charcoal) can wear away enamel and permanently increase tooth sensitivity.",
  },
  {
    question: "How should readers evaluate health or financial information found online?",
    answer:
      "Apply the BrassSmile Six-Vector Framework: inspect author transparency, verify recent publication dates, check for primary peer-reviewed citations, evaluate commercial bias, check for clear scope disclaimers, and cross-reference high-stakes claims with licensed healthcare or financial professionals.",
  },
  {
    question: "What is the primary difference between extrinsic stains and intrinsic discoloration?",
    answer:
      "Extrinsic stains reside on the outer enamel pellicle from food pigments, coffee, tea, and tobacco, and typically respond to professional dental cleanings. Intrinsic discoloration resides within the enamel matrix or dentin from aging, trauma, or developmental exposure, requiring oxidative bleaching or restorative dental procedures.",
  },
  {
    question: "Is BrassSmile.forum free and safe to access?",
    answer:
      "Yes. BrassSmile.forum is an open educational publication accessible without subscriptions or paywalls. It follows strict privacy practices, uses modern HTTPS encryption, and does not require personal credentials or payment details for reading.",
  },
];

export default function HomePage() {
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);
  const webPageSchema = getWebPageSchema(
    "https://brasssmile.forum",
    "BrassSmile: What It Is, What the Website Covers & What You Should Know",
    "Authoritative editorial guide to BrassSmile, smile science, tooth anatomy, and multi-topic digital publishing."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden border-b border-amber-950/10 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/20 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 space-y-6">
              {/* Entity Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                <span>Primary Entity Authority &bull; Educational Guide</span>
              </div>

              {/* H1 Primary Title */}
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
                <span className="text-amber-800">BrassSmile</span>: What It Is, What the Website Covers &amp; What You Should Know
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
                Clear, evidence-informed guidance explaining the multi-topic digital publishing model of BrassSmile, navigating search ambiguity, exploring the biological science of smile aesthetics, and empowering readers with practical source-verification frameworks.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#what-is-brasssmile"
                  className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-all hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600"
                >
                  Explore BrassSmile Guide
                </a>
                <Link
                  href="/healthcare"
                  className="rounded-xl border border-amber-300 bg-amber-50/80 px-6 py-3.5 text-sm font-semibold text-amber-950 hover:bg-amber-100 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600"
                >
                  Smile Care &amp; Biology
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-slate-600 hover:text-amber-800 transition-colors py-2 px-1"
                >
                  Editorial Methodology &rarr;
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs text-slate-500">
                <div>
                  <strong className="block text-slate-900 font-semibold">Independent</strong>
                  Non-commercial editorial review
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Evidence-Based</strong>
                  Biological &amp; anatomical rigor
                </div>
                <div>
                  <strong className="block text-slate-900 font-semibold">Transparent</strong>
                  Zero unverified clinical claims
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5">
              <HeroBrassSmileGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 2 — WHAT IS BRASSSMILE? */}
        <section id="what-is-brasssmile" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Foundational Definition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              What Is BrassSmile?
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <div className="prose-custom max-w-none text-slate-700 space-y-4">
            <p>
              If you have searched for <strong>brasssmile</strong>, you may have noticed something unusual: the search engine results do not all seem to agree about what the name means. Some websites associate BrassSmile with dental care, smile improvement, or oral-health education. Others use the name for general-interest publishing spanning business, technology, and lifestyle. There are also multiple domains with similar spelling, making it surprisingly easy to assume that they all belong to the same parent organization.
            </p>
            <p>
              The most essential distinction is this: <a href="https://brasssmile.forum/" className="font-semibold text-amber-900 underline hover:text-amber-700">BrassSmile</a> is primarily associated in the modern digital sphere with a multi-topic informational publishing website rather than a dedicated private dental practice, clinical hospital, or single-purpose dental product store. Recent examinations of live web properties describe content spanning business, education, finance, healthcare, insurance, technology, travel, and everyday consumer topics.
            </p>
            <p>
              Rather than confining itself to one narrow subject, BrassSmile publishes articles crafted to explain complex ideas in accessible language. Its web presence is structured similarly to an editorial magazine or curated digital publication. That distinction matters because the word <em>&ldquo;smile&rdquo;</em> naturally triggers thoughts of teeth, cosmetic dentistry, and dental checkups. But publishing an informative article about tooth enamel does not automatically transform a general editorial publication into a licensed dental surgery.
            </p>
          </div>

          {/* Callout box */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              BrassSmile Is Not Necessarily a Dental Brand
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              One of the largest sources of confusion around the keyword is the assumption that every digital property using the BrassSmile moniker represents the exact same commercial company. It does not. For instance, <code>brasssmile.info</code> presents itself as an educational resource centered on AI smile analysis and cosmetic dentistry basics, explicitly stating its independent status. Meanwhile, <code>brasssmiles.org</code> presents a clinical-style editorial perspective discussing tooth discoloration. Therefore, careful readers should always inspect the exact URL before attributing published claims.
            </p>
          </div>
        </section>

        {/* SECTION 3 — WHY BRASSSMILE MATTERS & DOMAIN AMBIGUITY */}
        <section id="why-it-matters" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Search Intent &amp; Ecosystem Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why BrassSmile Matters &amp; How to Navigate the Ecosystem
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Search engines can surface multiple websites with similar naming patterns, and each may describe its mission completely differently. For someone searching solely for <em>&ldquo;BrassSmile&rdquo;</em>, this creates competing interpretations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                Interpretation 1
              </span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">BrassSmile.com / .forum</h3>
              <p className="text-xs text-slate-500 mb-3 font-medium">Multi-Topic Editorial Publisher</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Broad informational resource covering business, education, tech, healthcare, home decor, and consumer guidance.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                Interpretation 2
              </span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">BrassSmile.info</h3>
              <p className="text-xs text-slate-500 mb-3 font-medium">AI Smile Analysis Focus</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specialized educational resource explaining how consumer computer vision analyzes selfie photos for cosmetic smile features.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                Interpretation 3
              </span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">BrassSmiles.org</h3>
              <p className="text-xs text-slate-500 mb-3 font-medium">Dental Discoloration Resource</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Editorial resource addressing tooth discoloration terminology, enamel wear, and clinical whitening considerations.
              </p>
            </div>
          </div>

          {/* Distinct Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mt-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 font-semibold text-slate-900">Domain Property</th>
                  <th className="py-3 px-4 font-semibold text-slate-900">Current Scope &amp; Positioning</th>
                  <th className="py-3 px-4 font-semibold text-slate-900">Primary Audience Intent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-semibold text-amber-900">brasssmile.forum</td>
                  <td className="py-3 px-4 text-slate-700">Official digital destination, multi-category knowledge hub, entity authority guide</td>
                  <td className="py-3 px-4 text-slate-600">Educational research, source verification, broad topical discovery</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">brasssmile.com</td>
                  <td className="py-3 px-4 text-slate-700">Multi-topic informational magazine across general-interest verticals</td>
                  <td className="py-3 px-4 text-slate-600">General article reading, search query discovery</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">brasssmile.info</td>
                  <td className="py-3 px-4 text-slate-700">Educational site for AI-assisted image analysis and smile aesthetics</td>
                  <td className="py-3 px-4 text-slate-600">Exploring computer vision limits &amp; cosmetic dentistry basics</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">brasssmiles.org</td>
                  <td className="py-3 px-4 text-slate-700">Clinical-style articles addressing tooth discoloration and shade changes</td>
                  <td className="py-3 px-4 text-slate-600">Investigating yellowing teeth, enamel loss, and whitening safety</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4 — UNDERSTANDING SMILE APPEARANCE */}
        <section id="understanding-smile-appearance" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Oral Biology &amp; Anatomy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Understanding Smile Appearance: The Science of Enamel and Dentin
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <div className="prose-custom max-w-none text-slate-700 space-y-4">
            <p>
              To appreciate why smiles vary naturally in shade, luminosity, and warm undertones, one must look at the biological anatomy of human teeth. A common misconception popularized by aggressive cosmetic advertising is that healthy teeth are naturally bright, opaque paper-white. In reality, human teeth are living, multi-layered structures governed by complex optical dynamics.
            </p>
            <p>
              The outermost layer is the <strong>enamel</strong>. Measuring between 1.5 and 2.5 millimeters in thickness over the incisal edges of teeth, enamel is the hardest biological substance in nature, composed of approximately 96% mineralized hydroxyapatite crystals. Crucially, enamel is <em>semi-translucent</em>. Rather than blocking light like opaque ceramic, it allows ambient light waves to pass through its crystalline prisms.
            </p>
            <p>
              Directly beneath the enamel lies the <strong>dentin</strong>, which makes up the bulk of the anatomical tooth. Dentin is living, porous, and organic, honeycombed with millions of microscopic dentinal tubules leading inward toward the central dental pulp. Unlike translucent enamel, dentin has a pronounced natural chromatic hue ranging from pale warm yellow to amber or light brown.
            </p>
            <p>
              When light strikes a tooth, it passes through the translucent enamel, interacts with the yellow dentin, and reflects back out. Consequently, what the human eye perceives as &ldquo;tooth color&rdquo; is primarily the natural warmth of the underlying dentin showing through the translucent mineral enamel.
            </p>
          </div>

          {/* Visual 2: Tooth Structure Diagram */}
          <ToothStructureGraphic />
        </section>

        {/* SECTION 5 — COMMON CAUSES & DISCOLORATION FACTORS */}
        <section id="common-causes" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Etiology &amp; Staining Mechanisms
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Common Causes &amp; Factors Affecting Smile Color
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <div className="prose-custom max-w-none text-slate-700 space-y-4">
            <p>
              When an individual notices their smile shifting toward a warmer or darker hue—sometimes colloquially referred to in search queries as a &ldquo;brass smile&rdquo; or yellowing—dental pathology separates the underlying causes into two distinct categories: <strong>extrinsic stains</strong> and <strong>intrinsic discoloration</strong>.
            </p>
          </div>

          {/* Visual 3: Discoloration Factors Infographic */}
          <DiscolorationFactorsGraphic />

          <div className="prose-custom max-w-none text-slate-700 space-y-4 pt-4">
            <h3 className="text-xl font-bold text-slate-900">Why Aging Naturally Darkens Teeth</h3>
            <p>
              Many adults express surprise when their teeth look noticeably yellower in their 40s or 50s despite meticulous daily brushing. This is a completely normal physiological phenomenon. Over decades of chewing, grinding, and exposure to mild dietary acids (citrus, salad dressings, carbonated drinks), the outer enamel gradually undergoes microscopic wear and thinning.
            </p>
            <p>
              At the same time, the pulp inside the tooth recedes, depositing denser, more saturated <em>secondary dentin</em> throughout adult life. Thinner translucent enamel sitting on top of deeper yellow dentin makes the tooth appear darker. This is an internal optical shift, not a failure of oral hygiene.
            </p>
          </div>
        </section>

        {/* SECTION 6 & 7 — SMILE CARE, IMPROVEMENT & LIFESTYLE FACTORS */}
        <section id="smile-care-improvement" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Evidence-Informed Habits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Smile Care &amp; Improvement: Practical, Safe Approaches
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <div className="prose-custom max-w-none text-slate-700 space-y-4">
            <p>
              Achieving and sustaining a healthy, vibrant smile does not require extreme DIY home hacks or harsh chemical abrasives. In fact, clinical evidence consistently shows that steady, protective habits preserve enamel far more effectively than aggressive intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  ✓
                </span>
                <h3 className="font-bold text-slate-900 text-base">Beneficial Smile Care Habits</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>&bull; <strong>Soft-Bristled Toothbrushes:</strong> Prevents micro-scratching of enamel prisms and gingival recession.</li>
                <li>&bull; <strong>Fluoride or Nano-Hydroxyapatite:</strong> Rebuilds microscopic mineral loss from daily dietary acid attacks.</li>
                <li>&bull; <strong>Rinsing After Tannins:</strong> Swishing plain water after coffee or black tea minimizes chromogen binding to the surface pellicle.</li>
                <li>&bull; <strong>Interdental Cleaning Daily:</strong> Flossing or interdental brushes prevent interproximal biofilm stains between teeth.</li>
                <li>&bull; <strong>Hydration &amp; Saliva Flow:</strong> Saliva contains calcium and phosphate ions that naturally remineralize enamel.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-rose-800 font-bold text-xs">
                  ✕
                </span>
                <h3 className="font-bold text-slate-900 text-base">Risky Home Trends to Avoid</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>&bull; <strong>Acidic DIY Scrubs:</strong> Mixing lemon juice or apple cider vinegar with baking soda dissolves protective enamel.</li>
                <li>&bull; <strong>High-RDA Charcoal Pastes:</strong> Highly abrasive particles scrub away irreplaceable enamel, permanently exposing yellow dentin.</li>
                <li>&bull; <strong>Brushing Immediately After Acid:</strong> Brushing right after citrus or soda scrubs weakened, softened enamel. Wait 30 minutes.</li>
                <li>&bull; <strong>Hard-Bristled Scrubbing:</strong> Aggressive mechanical pressure creates wedge-shaped cervical notches at the gumline.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 8 & 9 — AT-HOME CONSIDERATIONS VS PROFESSIONAL CARE */}
        <section id="at-home-vs-professional" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Treatment Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              At-Home Considerations vs. Professional Dental Care
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <div className="prose-custom max-w-none text-slate-700 space-y-4">
            <p>
              When considering options to brighten tooth appearance, it is vital to distinguish between cosmetic surface maintenance and clinical dental treatment. Over-the-counter (OTC) whitening strips and whitening toothpastes operate at modest chemical concentrations to safeguard consumer health. When carrying the American Dental Association (ADA) Seal of Acceptance, they have demonstrated safe efficacy for mild extrinsic and minor intrinsic staining.
            </p>
            <p>
              However, OTC products have distinct biological boundaries. They cannot lighten synthetic materials such as composite bonding, dental crowns, or porcelain veneers. Furthermore, applying bleaching gels to teeth with undiagnosed active cavities, receded gums with exposed roots, or cracked enamel can trigger excruciating pulp inflammation.
            </p>
          </div>

          {/* Visual 4: AI & Smartphone vs Clinical Diagnostics */}
          <AiVsClinicalGraphic />

          {/* Professional Care Checklist */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm mt-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              When Should You Consult a Licensed Dentist?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Schedule a clinical dental examination if you experience any of the following signs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-amber-800 font-bold">&rarr;</span>
                <span>A single tooth turning dark or gray following a sports injury or fall</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-800 font-bold">&rarr;</span>
                <span>Sudden sharp sensitivity to cold drinks, hot soup, or sweets</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-800 font-bold">&rarr;</span>
                <span>Localized chalky-white or brown spots near the gum margin (early decay)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-800 font-bold">&rarr;</span>
                <span>Gums that bleed regularly when brushing or flossing (gingivitis/periodontitis)</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FEATURED BRASSSMILE GUIDES */}
        <section id="featured-guides" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Editorial Publications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Foundational BrassSmile Guides
              </h2>
              <div className="h-1 w-16 bg-amber-500 rounded mt-2" />
            </div>
            <Link
              href="/healthcare"
              className="text-sm font-semibold text-amber-900 hover:text-amber-700 flex items-center gap-1"
            >
              Browse all library guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {ARTICLES.slice(0, 3).map((article, idx) => (
              <ArticleCard key={article.slug} article={article} featured={idx === 0} />
            ))}
          </div>
        </section>

        {/* SECTION 11 — CATEGORIES ARCHITECTURE */}
        <section id="categories" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Content Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore Our Core Editorial Verticals
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base">
              BrassSmile organizes complex knowledge into five focused pillars, delivering verified guides across technology, business, professional services, home design, and health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>

        {/* SECTION 12 — WHY EXPLORE BRASSSMILE & VERIFICATION METHODOLOGY */}
        <section id="verification-framework" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Information Literacy &amp; Trust
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why Explore BrassSmile? Our Six-Vector Source Framework
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
          </div>

          <div className="prose-custom max-w-none text-slate-700 space-y-4">
            <p>
              In an era crowded with AI-generated content farms, affiliate review spam, and conflicting medical advice, <strong>BrassSmile</strong> exists to restore clarity. We do not claim clinical licensure or manufacture proprietary cures. Instead, we uphold a transparent editorial standard designed to help readers evaluate high-stakes information responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-amber-800 font-mono font-bold text-sm mb-1">Vector 01</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Authorship &amp; Attribution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear editorial accountability. Articles identify responsible research desks and editorial review processes without invented personas.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-amber-800 font-mono font-bold text-sm mb-1">Vector 02</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Currency &amp; Updates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear timestamping with both publication and last-modified dates so readers know whether information reflects current consensus.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-amber-800 font-mono font-bold text-sm mb-1">Vector 03</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Primary Citations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Health and scientific statements are referenced against peer-reviewed journals, professional associations (ADA), and public agencies.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-amber-800 font-mono font-bold text-sm mb-1">Vector 04</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Commercial Independence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict separation between editorial guidance and commercial product promotion. No hidden affiliate sales funnels.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-amber-800 font-mono font-bold text-sm mb-1">Vector 05</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Scope &amp; Disclaimers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Honest acknowledgment of clinical boundaries. Clear distinction between general educational concepts and individualized diagnosis.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-amber-800 font-mono font-bold text-sm mb-1">Vector 06</div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Consensus Alignment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Grounded in biological consensus and established anatomical science rather than dangerous viral trends or abrasive home remedies.
              </p>
            </div>
          </div>
        </section>

        {/* HEALTH INFORMATION DISCLAIMER BANNER */}
        <MedicalDisclaimerBanner />

        {/* SECTION 13 — FAQ ACCORDION */}
        <section id="faq" className="scroll-mt-24 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions About BrassSmile
            </h2>
            <div className="h-1 w-16 bg-amber-500 rounded mt-2 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base">
              Got questions regarding the BrassSmile platform, our editorial scope, or smile care guidance? Review our comprehensive answers below.
            </p>
          </div>

          <FAQAccordion items={HOMEPAGE_FAQS} idPrefix="home-faq" />
        </section>

        {/* SECTION 14 & 15 — FINAL CONCLUSION & CTA */}
        <section className="rounded-3xl border border-amber-950/10 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Final Thoughts &amp; Exploration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Navigating BrassSmile With Clarity &amp; Confidence
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong>BrassSmile</strong> is a memorable digital entity that connects several interrelated concepts online—from multi-topic informational journalism across technology and business to the essential biological science of oral wellness. By understanding what each domain represents, verifying sources with clinical diligence, and consulting qualified dental practitioners for individualized care, you can use digital resources to make truly informed decisions for your life and health.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/healthcare"
                className="rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-md"
              >
                Read Healthcare &amp; Smile Guides
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                Learn About Our Editorial Mission
              </Link>
              <Link
                href="/contact"
                className="rounded-xl text-sm font-semibold text-slate-300 hover:text-white px-4 py-3.5 transition-colors"
              >
                Contact Editorial Desk &rarr;
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
