import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleCard from "@/components/ArticleCard";
import MedicalDisclaimerBanner from "@/components/MedicalDisclaimerBanner";
import ToothStructureGraphic from "@/components/visuals/ToothStructureGraphic";
import DiscolorationFactorsGraphic from "@/components/visuals/DiscolorationFactorsGraphic";
import AiVsClinicalGraphic from "@/components/visuals/AiVsClinicalGraphic";
import { ARTICLES, getArticleBySlug } from "@/data/articles";
import { constructMetadata, getArticleSchema, getFAQSchema, SITE_URL } from "@/lib/seo";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return constructMetadata({
      title: "Article Not Found",
      description: "The requested article could not be located.",
    });
  }

  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    canonicalPath: `/articles/${article.slug}`,
    type: "article",
    publishedTime: article.publishedDate,
    modifiedTime: article.modifiedDate,
    authorName: article.author.name,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${SITE_URL}/articles/${article.slug}`;
  const articleSchema = getArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: articleUrl,
    publishedDate: article.publishedDate,
    modifiedDate: article.modifiedDate,
    authorName: article.author.name,
  });

  const faqSchema = article.faqs.length > 0 ? getFAQSchema(article.faqs) : null;
  const relatedArticles = article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is typeof article => Boolean(a));

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: article.categoryName, href: `/${article.categorySlug}` },
          { label: article.title, href: `/articles/${article.slug}` },
        ]}
      />

      {/* Article Header */}
      <header className="space-y-5 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Link
            href={`/${article.categorySlug}`}
            className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-900 border border-amber-300 hover:bg-amber-100 transition-colors"
          >
            {article.categoryName}
          </Link>
          <span className="text-slate-400">&bull;</span>
          <span className="font-mono text-slate-500">{article.readingTime}</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          {article.excerpt}
        </p>

        {/* Author & Timestamp Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs text-slate-500 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-amber-300 font-bold text-xs">
              BS
            </div>
            <div>
              <p className="font-semibold text-slate-900">{article.author.name}</p>
              <p className="text-[11px] text-slate-500">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-500 font-mono">
            <span>
              Published:{" "}
              <time dateTime={article.publishedDate}>
                {new Date(article.publishedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </span>
            <span>
              Updated:{" "}
              <time dateTime={article.modifiedDate}>
                {new Date(article.modifiedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </span>
          </div>
        </div>
      </header>

      {/* Key Takeaways Box */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
            i
          </span>
          Key Takeaways &amp; Summary
        </h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {article.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-amber-800 font-bold shrink-0 mt-0.5">&bull;</span>
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Table of Contents */}
      {article.toc.length > 0 && (
        <nav aria-label="Table of contents" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Table of Contents
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {article.toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-slate-700 hover:text-amber-800 hover:underline transition-colors block py-0.5"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Inline Graphic based on slug */}
      {article.slug === "understanding-tooth-discoloration-enamel-dentin" && (
        <ToothStructureGraphic />
      )}
      {article.slug === "ai-smile-analysis-technology-capabilities-limits" && (
        <AiVsClinicalGraphic />
      )}
      {article.slug === "at-home-teeth-whitening-vs-professional-dental-care" && (
        <DiscolorationFactorsGraphic />
      )}

      {/* Health Disclaimer Banner */}
      <MedicalDisclaimerBanner compact={true} />

      {/* Article Body */}
      <div className="prose-custom max-w-none text-slate-800 space-y-5 text-base sm:text-lg leading-relaxed">
        {article.body.map((paragraph, index) => {
          // If there's a corresponding TOC item, wrap in an anchor
          const tocItem = article.toc[index];
          return (
            <div key={index} id={tocItem?.id} className={tocItem ? "scroll-mt-24" : ""}>
              {tocItem && (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3">
                  {tocItem.title}
                </h2>
              )}
              <p>{paragraph}</p>
            </div>
          );
        })}
      </div>

      {/* Editorial Citations & Trust Box */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          Editorial Review &amp; Citations
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          This educational guide was compiled by the <Link href="/about" className="font-semibold text-amber-900 hover:underline">BrassSmile Research Desk</Link>. Information is cross-referenced with peer-reviewed literature from the Journal of the American Dental Association (JADA), American Dental Association (ADA) clinical guidelines, and standard craniofacial anatomy texts.
        </p>
        <p className="text-xs text-slate-500 font-mono">
          Entity Anchor: <a href="https://brasssmile.forum/" className="text-amber-800 underline font-semibold">BrassSmile</a> Knowledge Clearinghouse.
        </p>
      </section>

      {/* Article FAQs */}
      {article.faqs.length > 0 && (
        <section className="space-y-5 border-t border-slate-200 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={article.faqs} idPrefix={`article-${article.slug}`} />
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 border-t border-slate-200 pt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Related Guides in BrassSmile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
