import React from "react";
import Link from "next/link";

interface MedicalDisclaimerBannerProps {
  compact?: boolean;
}

export default function MedicalDisclaimerBanner({ compact = false }: MedicalDisclaimerBannerProps) {
  if (compact) {
    return (
      <aside aria-label="Health Information Disclaimer" className="rounded-xl border border-amber-300/80 bg-amber-50/70 p-4 text-xs text-amber-950 leading-relaxed">
        <strong className="font-semibold text-amber-900">Health Information Disclaimer: </strong>
        BrassSmile provides educational, research-informed overviews. This material does not constitute dental diagnosis, clinical treatment advice, or individual medical recommendations. Always consult a licensed dental professional for personal diagnosis.{" "}
        <Link href="/disclaimer" className="font-bold underline text-amber-900 hover:text-amber-700">
          Read full disclaimer
        </Link>
      </aside>
    );
  }

  return (
    <aside aria-label="Health Information Disclaimer" className="my-8 rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-50/80 via-white to-amber-50/50 p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 border border-amber-300">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div className="text-sm text-slate-700 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-base mb-1">
            Professional Healthcare &amp; Dental Guidance Disclaimer
          </h4>
          <p>
            The informational guides, anatomical diagrams, and product discussions published by <strong>BrassSmile</strong> are designed solely for educational, research, and literacy purposes. They are not intended as a substitute for individualized clinical examination, diagnosis, or treatment planning by a qualified and licensed dental or healthcare provider.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Never disregard professional medical or dental advice or delay seeking care because of something you have read on this website.{" "}
            <Link href="/disclaimer" className="font-semibold text-amber-800 hover:underline">
              Review our complete Health Disclaimer &amp; Editorial Ethics &rarr;
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
