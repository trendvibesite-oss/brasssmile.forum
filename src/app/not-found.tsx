import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 text-center space-y-8">
      {/* 404 Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-xs font-mono font-bold text-amber-900">
        ERROR 404 &bull; PAGE NOT LOCATED
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Looks like this page took a wrong turn.
        </h1>
        <p className="mx-auto max-w-xl text-base text-slate-600 leading-relaxed">
          The guide or resource you were seeking may have been reorganized, renamed, or updated. Use the shortcuts below to explore the BrassSmile library.
        </p>
      </div>

      {/* Helpful Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/"
          className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-colors"
        >
          Return to Homepage
        </Link>
        <Link
          href="/healthcare"
          className="rounded-xl border border-amber-300 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-950 hover:bg-amber-100 transition-colors"
        >
          Browse Smile Care Guides
        </Link>
        <Link
          href="/about"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          About BrassSmile
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Contact Desk
        </Link>
      </div>

      {/* Categories Fast Jump */}
      <div className="pt-10 border-t border-slate-200 text-left max-w-2xl mx-auto space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
          Jump to an Editorial Vertical:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center text-sm font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50/50 transition-all shadow-sm"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
