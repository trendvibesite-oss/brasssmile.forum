import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { constructMetadata, getWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of BrassSmile (brasssmile.forum). Editorial access, intellectual property, and acceptable use guidelines.",
  canonicalPath: "/terms",
});

export default function TermsPage() {
  const webPageSchema = getWebPageSchema(
    "https://brasssmile.forum/terms",
    "Terms of Service | BrassSmile",
    "Terms and conditions governing the access and reading of BrassSmile guides."
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb items={[{ label: "Terms", href: "/terms" }]} />

      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          User Agreement &bull; Editorial Use
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Effective Date: October 2, 2026
        </p>
      </header>

      <div className="prose-custom max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          Welcome to <strong>BrassSmile</strong> (accessible at <code>https://brasssmile.forum</code>). By accessing and reading our platform, you acknowledge and agree to comply with the following Terms of Service.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            1. Informational Scope Only
          </h2>
          <p>
            BrassSmile provides non-clinical educational articles, anatomical guides, and technology analysis. All content is provided for informational and literacy purposes only and does not constitute dental, medical, financial, or legal advice. Please review our full <Link href="/disclaimer" className="font-semibold text-amber-900 underline">Medical Disclaimer</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            2. Intellectual Property Rights
          </h2>
          <p>
            All original text, custom anatomical graphics, vector illustrations, layouts, and code on BrassSmile are protected by intellectual property laws. You may read, print, and reference excerpts for personal, non-commercial educational use with clear attribution and a link back to <code>brasssmile.forum</code>. Wholesale scraping or commercial syndication without prior written permission is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            3. Disclaimer of Warranties
          </h2>
          <p>
            BrassSmile is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. While our editorial desk strives for rigorous factual accuracy and currency, we make no representations or warranties regarding completeness, timeliness, or absence of errors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, BrassSmile, its authors, and editorial contributors shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of your access to, use of, or inability to use this platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            5. Modifications to Terms
          </h2>
          <p>
            We reserve the right to revise these Terms of Service at any time. Updates will be reflected by the &ldquo;Last Updated&rdquo; timestamp at the top of this document.
          </p>
        </section>
      </div>
    </div>
  );
}
