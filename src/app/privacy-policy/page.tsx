import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { constructMetadata, getWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for BrassSmile (brasssmile.forum). Explaining our commitment to privacy, data handling, and transparent reader protection.",
  canonicalPath: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const webPageSchema = getWebPageSchema(
    "https://brasssmile.forum/privacy-policy",
    "Privacy Policy | BrassSmile",
    "Official privacy policy and data governance practices at BrassSmile."
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          Data Governance &amp; Reader Privacy
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Effective Date: October 2, 2026
        </p>
      </header>

      <div className="prose-custom max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          At <strong>BrassSmile</strong> (&ldquo;brasssmile.forum&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take reader privacy seriously. This Privacy Policy outlines what information is collected when you visit our website, how that data is managed, and the measures we employ to protect your rights.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            1. Information We Do Not Collect
          </h2>
          <p>
            BrassSmile is an open educational publication. We do not require accounts, user logins, financial transactions, credit card numbers, or biometric data to read our guides. We do not sell, rent, or trade reader information to commercial data brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            2. Information You Voluntarily Provide
          </h2>
          <p>
            If you choose to contact our editorial desk via our <Link href="/contact" className="font-semibold text-amber-900 underline">Contact Form</Link>, we collect the name, email address, and message content you transmit. This information is used strictly to respond to your specific editorial inquiry or factual feedback.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            3. Server Log Files &amp; Technical Metrics
          </h2>
          <p>
            Like virtually all modern web servers, standard non-identifying technical metrics may be recorded automatically by hosting infrastructure (such as Vercel). This includes your IP address, browser user-agent, operating system, referring URL, and the timestamp of page requests. This aggregated diagnostic data is utilized solely to monitor site reliability, prevent DDoS attacks, and diagnose infrastructure issues.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. Cookies &amp; Local Storage
          </h2>
          <p>
            BrassSmile avoids invasive third-party cross-site tracking cookies. Essential cookies or local session storage may be utilized exclusively for basic site functionality, such as remembering your accessibility or interface preferences.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            5. External Links
          </h2>
          <p>
            Our articles may include outbound hyperlinks to authoritative external scientific resources, government bodies (CDC, NIH, FDA), or academic journals. We have no control over the privacy practices of external third-party sites and encourage readers to review their respective privacy notices upon leaving our platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            6. Inquiries Regarding This Policy
          </h2>
          <p>
            For questions or requests concerning your privacy rights, please reach out via our <Link href="/contact" className="font-semibold text-amber-900 underline">editorial contact desk</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
