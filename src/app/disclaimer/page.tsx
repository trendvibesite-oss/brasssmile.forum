import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { constructMetadata, getWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Health & Medical Information Disclaimer",
  description:
    "Official health and clinical information disclaimer for BrassSmile. Clarifying our informational scope and the necessity of licensed dental consultation.",
  canonicalPath: "/disclaimer",
});

export default function DisclaimerPage() {
  const webPageSchema = getWebPageSchema(
    "https://brasssmile.forum/disclaimer",
    "Health & Medical Information Disclaimer | BrassSmile",
    "Legal and clinical disclaimer explaining informational boundaries and patient safety guidance."
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb items={[{ label: "Disclaimer", href: "/disclaimer" }]} />

      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          Legal &amp; Clinical Safety Policy
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Health &amp; Informational Disclaimer
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Last Updated: October 2, 2026
        </p>
      </header>

      {/* Prominent Safety Callout */}
      <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-6 sm:p-8 space-y-3">
        <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2">
          <span>⚠️</span> Important Notice: Not Medical or Dental Advice
        </h2>
        <p className="text-sm text-amber-950/90 leading-relaxed">
          The content published on <strong>BrassSmile</strong> (accessible via <code>brasssmile.forum</code> and associated pages)—including all text, graphics, anatomical diagrams, product discussions, and answers to reader queries—is provided strictly for general educational and informational purposes.
        </p>
        <p className="text-sm text-amber-950/90 leading-relaxed font-semibold">
          This material is NOT intended to be, and MUST NOT be construed as, professional dental advice, medical diagnosis, clinical evaluation, or treatment recommendation.
        </p>
      </div>

      <div className="prose-custom max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            1. No Doctor-Patient or Dentist-Patient Relationship
          </h2>
          <p>
            Your access to or use of <Link href="/" className="font-semibold text-amber-900 underline">BrassSmile</Link>, including contacting our editorial desk via email or web forms, does not create a doctor-patient, dentist-patient, or confidential healthcare relationship between you and BrassSmile, its authors, editors, or contributors.
          </p>
          <p>
            An informational article cannot evaluate your personal medical history, systemic risk factors, prescription drug interactions, biological bone density, or oral microbiology. Only an in-person physical examination conducted by a licensed dental professional (DDS or DMD) equipped with appropriate diagnostic instrumentation (radiographs, periodontal probes) can establish a clinical diagnosis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            2. Never Disregard Professional Clinical Guidance
          </h2>
          <p>
            You should never disregard advice from a qualified healthcare practitioner, or delay seeking professional medical or dental evaluation, because of something you have read, watched, or inferred from BrassSmile.
          </p>
          <p>
            If you suspect you have a dental condition—such as a cracked tooth, deep caries, progressive tooth discoloration, swelling, or persistent gum bleeding—contact a licensed dental practice promptly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            3. Acute Dental Emergencies
          </h2>
          <p>
            If you are experiencing severe oral facial swelling that impairs breathing or swallowing, continuous bleeding following trauma, acute excruciating tooth pain, or systemic fever accompanying an oral abscess, seek immediate emergency medical care or visit the nearest hospital emergency department. Do not rely on digital articles or email correspondence for emergency conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. DIY Remedies &amp; Product Discussions
          </h2>
          <p>
            Discussions of over-the-counter products, whitening agents, toothpastes, or home oral hygiene regimens reflect scientific literature reviews and public health consensus. BrassSmile explicitly cautions against unverified home remedies (such as abrasive scrubbing with household acids, baking soda, or charcoal powders) that risk permanent enamel demineralization.
          </p>
          <p>
            Mention of specific consumer products, active ingredients, or scientific studies does not constitute an endorsement, clinical guarantee, or warranty of individual outcomes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            5. Independent Educational Status
          </h2>
          <p>
            BrassSmile is an independent digital publication. It is not affiliated with commercial dental clinics, orthodontic manufacturers, pharmaceutical companies, or third-party websites operating similar domain names.
          </p>
        </section>
      </div>
    </div>
  );
}
