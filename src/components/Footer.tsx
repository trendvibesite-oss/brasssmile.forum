import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { CATEGORIES } from "@/data/categories";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-amber-950/10 bg-slate-900 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main Multi-Column Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Editorial Identity */}
          <div className="space-y-4">
            <div className="inline-block bg-white/90 p-2 rounded-xl backdrop-blur-sm">
              <Logo size="md" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              <strong className="text-slate-200">BrassSmile</strong> is an authoritative digital publication and educational clearinghouse. We provide clear, evidence-informed guidance on smile care, oral biology, technology, and modern living.
            </p>
            <div className="rounded-lg border border-amber-900/40 bg-amber-950/20 p-3 text-xs text-amber-200/90 leading-relaxed">
              <strong className="font-semibold block text-amber-300 mb-1">Informational Notice:</strong>
              Content is for educational purposes only and does not substitute for personalized clinical diagnosis or advice from a licensed dental professional.
            </div>
          </div>

          {/* Col 2: Navigation / Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About BrassSmile
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="hover:text-amber-300 transition-colors">
                  Smile Care Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Contact Editorial Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Categories
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={cat.href} className="hover:text-amber-300 transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-xs text-slate-500 font-mono">({cat.articleCount})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Trust & Transparency
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              <li>
                <Link href="/disclaimer" className="hover:text-amber-300 transition-colors">
                  Health & Dental Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about#editorial-standards" className="hover:text-amber-300 transition-colors">
                  Editorial Methodology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 sm:flex sm:items-center sm:justify-between text-xs text-slate-400">
          <p>
            &copy; {currentYear} BrassSmile. All rights reserved. Primary domain:{" "}
            <a
              href="https://brasssmile.forum/"
              className="text-amber-400 font-semibold hover:underline"
            >
              brasssmile.forum
            </a>
          </p>
          <p className="mt-3 sm:mt-0">
            Independent informational publishing. No commercial clinical endorsement implied.
          </p>
        </div>
      </div>
    </footer>
  );
}
