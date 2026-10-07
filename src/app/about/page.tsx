import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import MedicalDisclaimerBanner from "@/components/MedicalDisclaimerBanner";
import { constructMetadata, getWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About BrassSmile: Our Editorial Mission, Standards & Philosophy",
  description:
    "Learn about BrassSmile, an independent multi-topic publication providing clear, evidence-informed guides on smile care, oral biology, technology, and modern living.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  const webPageSchema = getWebPageSchema(
    "https://brasssmile.forum/about",
    "About BrassSmile: Our Editorial Mission, Standards & Philosophy",
    "Editorial methodology, information literacy principles, and health information disclaimers at BrassSmile."
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb items={[{ label: "About", href: "/about" }]} />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          Editorial Independence &bull; Transparency
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          About BrassSmile
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          An authoritative digital publication and educational clearinghouse dedicated to clarity, empirical science, and responsible information literacy.
        </p>
      </header>

      {/* Mission Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Our Core Mission
        </h2>
        <div className="prose-custom max-w-none text-slate-700 space-y-4">
          <p>
            The modern internet contains immense volumes of information, yet finding clear, grounded, and non-commercial guidance has become harder than ever. Search results for terms like <a href="https://brasssmile.forum/" className="font-semibold text-amber-900 underline">BrassSmile</a> are often fragmented across competing domains, ambiguous marketing claims, and opaque affiliate sites.
          </p>
          <p>
            BrassSmile was established to serve as an independent, transparent knowledge platform. Our primary goal is to demystify complex subjects—from oral biology and tooth anatomy to computer vision smile algorithms and digital publishing models—translating technical and scientific concepts into clear, reader-focused explanations.
          </p>
        </div>
      </section>

      {/* Editorial Standards */}
      <section id="editorial-standards" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Editorial Philosophy &amp; Content Standards
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          We adhere to strict editorial guidelines designed to maintain high factual integrity and reader trust:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-800 text-xs font-bold">1</span>
              Evidence-Based Grounding
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Whenever we discuss anatomy, enamel mechanics, or oral wellness, our writers consult established peer-reviewed literature, American Dental Association (ADA) guidelines, and standard clinical textbooks rather than social media trends.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-800 text-xs font-bold">2</span>
              Editorial Independence
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We do not sell proprietary toothpaste formulations, cosmetic dental kits, or diagnostic hardware. Our content is not monetized through paywalled recommendations or hidden manufacturer sponsorships.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-800 text-xs font-bold">3</span>
              Transparent Disclaimers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We explicitly state the limitations of informational publishing. We never present general educational articles as individual clinical diagnoses or personal dental treatment prescriptions.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-800 text-xs font-bold">4</span>
              Timely Review &amp; Updates
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Because healthcare recommendations and digital tools evolve rapidly, our editorial desk regularly reviews and timestamps published guides to maintain currency.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Resource Is For */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Who BrassSmile Is For
        </h2>
        <div className="prose-custom max-w-none text-slate-700 space-y-3">
          <p>
            BrassSmile is written for curious, health-conscious readers who want to understand the <em>&ldquo;why&rdquo;</em> behind everyday questions:
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>&bull; Readers who have noticed changes in tooth shade and want to understand the biological difference between enamel wear and dentin color.</li>
            <li>&bull; Individuals evaluating at-home teeth whitening strips who want an honest breakdown of safety, peroxides, and enamel risks before purchasing.</li>
            <li>&bull; Patients preparing for a cosmetic or restorative dental appointment who want to understand clinical terminology and formulate informed questions.</li>
            <li>&bull; Researchers and consumers exploring artificial intelligence tools to understand how photo algorithms work and why 2D images cannot replace radiographs.</li>
          </ul>
        </div>
      </section>

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner />

      {/* Contact Section */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Get in Touch With Our Editorial Desk
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Have feedback on an existing guide, a research suggestion, or an editorial inquiry? We welcome constructive dialogue from readers, researchers, and healthcare professionals.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-colors"
        >
          Visit Contact Page &rarr;
        </Link>
      </section>
    </div>
  );
}
