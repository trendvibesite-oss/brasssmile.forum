import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const articleHref =
    article.slug === "techtrendery-com-usa"
      ? "/techtrendery-com-usa"
      : `/articles/${article.slug}`;

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-950/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <div>
        {/* Featured Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <Image
            src={article.featuredImage}
            alt={article.heroImageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority={featured}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Category Badge overlay on image */}
          <div className="absolute top-3 left-3 z-10">
            <Link
              href={`/${article.categorySlug}`}
              className="inline-block rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/40 shadow hover:bg-slate-900 transition-colors"
            >
              {article.categoryName}
            </Link>
          </div>

          {/* Reading Time Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-block rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-mono text-slate-200 border border-white/10 shadow">
              {article.readingTime}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Date */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
            <svg
              className="h-3.5 w-3.5 text-amber-700"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <time dateTime={article.publishedDate} className="font-medium text-slate-600">
              {new Date(article.publishedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          {/* Title */}
          <h3
            className={`font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2 ${
              featured ? "text-xl sm:text-2xl mb-3" : "text-lg mb-2"
            }`}
          >
            <Link href={articleHref}>
              <span className="absolute inset-0" aria-hidden="true" />
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer: Author & Read Link */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="font-medium text-slate-700 truncate max-w-[180px]">
          {article.author.name}
        </span>
        <span className="inline-flex items-center gap-1 font-bold text-amber-800 group-hover:translate-x-0.5 transition-transform">
          Read Guide &rarr;
        </span>
      </div>
    </article>
  );
}
