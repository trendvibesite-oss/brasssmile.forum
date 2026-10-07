"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { CATEGORIES } from "@/data/categories";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on path change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
  }

  // Close dropdown on click outside & ESC key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isCurrent = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-amber-950/10 bg-white/95 backdrop-blur-md transition-shadow">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                pathname === "/"
                  ? "text-amber-900 bg-amber-50 font-bold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                isCurrent("/about")
                  ? "text-amber-900 bg-amber-50 font-bold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                onMouseEnter={() => setCategoriesOpen(true)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  CATEGORIES.some((c) => pathname.startsWith(c.href))
                    ? "text-amber-900 bg-amber-50 font-bold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
                id="categories-menu-button"
              >
                <span>Categories</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${categoriesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {categoriesOpen && (
                <div
                  onMouseLeave={() => setCategoriesOpen(false)}
                  className="absolute left-0 mt-1.5 w-72 origin-top-left rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/10 focus:outline-none animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="categories-menu-button"
                >
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-amber-800 border-b border-slate-100">
                    Content Categories
                  </div>
                  <div className="mt-1 space-y-1">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={cat.href}
                        className={`flex flex-col rounded-lg px-3 py-2 text-sm transition-colors ${
                          pathname === cat.href
                            ? "bg-amber-50 text-amber-950 font-bold"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                        role="menuitem"
                        onClick={() => setCategoriesOpen(false)}
                      >
                        <span className="font-semibold">{cat.name}</span>
                        <span className="text-xs text-slate-500 line-clamp-1">{cat.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                isCurrent("/contact")
                  ? "text-amber-900 bg-amber-50 font-bold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/healthcare"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Explore Guides
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-amber-950/10 bg-white px-4 pt-3 pb-6 shadow-xl" id="mobile-menu">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block rounded-lg px-3 py-2 text-base font-medium ${
                  pathname === "/" ? "bg-amber-50 text-amber-950 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block rounded-lg px-3 py-2 text-base font-medium ${
                  isCurrent("/about") ? "bg-amber-50 text-amber-950 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                About
              </Link>

              {/* Mobile Categories Accordion */}
              <div className="pt-2 pb-1 border-t border-slate-100 my-2">
                <p className="px-3 text-xs font-bold uppercase tracking-wider text-amber-800">
                  Categories
                </p>
                <div className="mt-1 space-y-1 pl-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={cat.href}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                        pathname === cat.href ? "bg-amber-50 text-amber-950 font-bold" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`block rounded-lg px-3 py-2 text-base font-medium ${
                  isCurrent("/contact") ? "bg-amber-50 text-amber-950 font-bold" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link
                  href="/healthcare"
                  className="block w-full text-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800"
                >
                  Explore BrassSmile Guides
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
