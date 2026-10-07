import React from "react";
import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-amber-950/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md ${
        featured ? "md:col-span-2 lg:p-8" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <Link
            href={`/${article.categorySlug}`}
            className="rounded-full bg-amber-50 px-2.5 py-1 font-semibold text-amber-900 border border-amber-200/60 hover:bg-amber-100 transition-colors"
          >
            {article.categoryName}
          </Link>
          <span className="font-mono text-xs">{article.readingTime}</span>
        </div>

        <h3 className={`font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors ${
          featured ? "text-xl sm:text-2xl mb-3" : "text-lg mb-2"
        }`}>
          <Link href={`/articles/${article.slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {article.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="font-medium text-slate-700">{article.author.name}</span>
        <time dateTime={article.publishedDate}>
          {new Date(article.publishedDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </article>
  );
}
