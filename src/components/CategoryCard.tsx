import React from "react";
import Link from "next/link";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-amber-950/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 font-bold text-base">
            {category.name.substring(0, 2).toUpperCase()}
          </div>
          <span className="text-xs font-mono font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
            {category.articleCount} Guides
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors mb-1">
          <Link href={category.href}>
            <span className="absolute inset-0" aria-hidden="true" />
            {category.name}
          </Link>
        </h3>

        <p className="text-xs font-medium text-amber-900 mb-2.5">
          {category.tagline}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {category.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100">
        <div className="flex flex-wrap gap-1.5">
          {category.featuredTopics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-[11px] rounded bg-slate-100 px-2 py-0.5 text-slate-600 font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
