import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import MedicalDisclaimerBanner from "@/components/MedicalDisclaimerBanner";
import { Category } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import { getWebPageSchema } from "@/lib/seo";

interface CategoryTemplateProps {
  category: Category;
}

export default function CategoryTemplate({ category }: CategoryTemplateProps) {
  const articles = getArticlesByCategory(category.slug);
  const webPageSchema = getWebPageSchema(
    `https://brasssmile.forum${category.href}`,
    `${category.name} | BrassSmile`,
    category.description
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb items={[{ label: category.name, href: category.href }]} />

      {/* Category Hero Banner */}
      <section className="rounded-3xl border border-amber-950/10 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-900">
            <span className="font-mono uppercase">{category.slug}</span> &bull; Editorial Category
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {category.name}
          </h1>

          <p className="text-lg font-medium text-amber-900">
            {category.tagline}
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            {category.longDescription}
          </p>

          {/* Featured topics pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Core Topics:
            </span>
            {category.featuredTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Health notice if in healthcare section */}
      {category.slug === "healthcare" && (
        <MedicalDisclaimerBanner compact={false} />
      )}

      {/* Articles Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Published Guides &amp; Research ({articles.length})
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            Updated for 2026
          </span>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            <p className="font-medium text-slate-700">New guides currently in peer editorial review.</p>
            <p className="text-xs text-slate-400 mt-1">Check back shortly or explore our healthcare library.</p>
            <Link
              href="/healthcare"
              className="mt-4 inline-block text-xs font-bold text-amber-800 underline"
            >
              Browse Healthcare &rarr;
            </Link>
          </div>
        )}
      </section>

      {/* Category Deep Dive Editorial Explanation */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Our Editorial Philosophy for {category.name}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          At <Link href="/" className="font-semibold text-amber-900 hover:underline">BrassSmile</Link>, our coverage of {category.name.toLowerCase()} is guided by evidence, technical accuracy, and clear prose. Rather than generating high-volume superficial listicles, our editorial team dissects underlying biological mechanisms, software engineering realities, and consumer decision matrices.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Every guide published in this hub undergoes cross-verification to ensure factual accuracy, transparent source citations, and clear separation between educational explanations and commercial product claims.
        </p>
      </section>
    </div>
  );
}
