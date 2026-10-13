import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import MedicalDisclaimerBanner from "@/components/MedicalDisclaimerBanner";
import { ARTICLES } from "@/data/articles";
import { CATEGORIES } from "@/data/categories";
import { constructMetadata, getWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "BrassSmile Blog: All Recent Published Guides & Research",
  description:
    "Explore all recent articles, smile science research, AI diagnostics analyses, provider guides, and daily care routines published by BrassSmile.",
  canonicalPath: "/blog",
});

export default function BlogPage() {
  const webPageSchema = getWebPageSchema(
    "https://brasssmile.forum/blog",
    "BrassSmile Blog: All Recent Published Guides & Research",
    "Complete library of published articles, research primers, and educational guides at BrassSmile."
  );

  // Sorted by most recent published date descending
  const sortedArticles = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

      {/* Hero Header */}
      <section className="rounded-3xl border border-amber-950/10 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-3.5 py-1 text-xs font-semibold text-amber-950">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
            <span>BrassSmile Knowledge Library &bull; {sortedArticles.length} Recent {sortedArticles.length === 1 ? "Guide" : "Guides"}</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Recent Blogs &amp; Editorial Guides
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Browse our complete repository of verified educational guides. From oral anatomy and enamel dynamics to artificial intelligence diagnostics, vanity ergonomics, and media literacy.
          </p>

          {/* Quick Category Jump Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Browse by Vertical:
            </span>
            <Link
              href="/blog"
              className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-sm"
            >
              All Articles ({sortedArticles.length})
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-200 hover:border-amber-300 hover:text-amber-900 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3x3 Articles Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              All Recent Publications
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing {sortedArticles.length} {sortedArticles.length === 1 ? "publication" : "publications"} in a 3-column editorial layout
            </p>
          </div>
          <span className="text-xs font-mono text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            Updated October 2026
          </span>
        </div>

        {/* 3x3 Grid Manner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner />

      {/* Editorial Methodology Box */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Our Research &amp; Publishing Process
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Every guide published on <Link href="/" className="font-semibold text-amber-900 hover:underline">BrassSmile</Link> is developed through systematic literature reviews, clinical cross-verification, and transparent source attribution. We do not accept sponsored placements or promote unverified medical cures.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          To learn more about our verification protocols or suggest a research topic, visit our{" "}
          <Link href="/about" className="font-semibold text-amber-800 underline">About page</Link> or{" "}
          <Link href="/contact" className="font-semibold text-amber-800 underline">contact our research desk</Link>.
        </p>
      </section>
    </div>
  );
}
