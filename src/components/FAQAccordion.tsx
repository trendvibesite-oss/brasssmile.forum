"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  idPrefix?: string;
}

export default function FAQAccordion({ items, idPrefix = "faq" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idPrefix}-btn-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "border-amber-400/80 bg-white shadow-sm ring-1 ring-amber-400/20"
                : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white"
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-xl"
              >
                <span className="text-base sm:text-lg pr-4">{item.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-amber-50 text-amber-800 border-amber-300" : "bg-slate-50"
                  }`}
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
