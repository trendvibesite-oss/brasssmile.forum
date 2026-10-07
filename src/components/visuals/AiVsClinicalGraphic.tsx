import React from "react";

export default function AiVsClinicalGraphic() {
  return (
    <div className="rounded-2xl border border-amber-950/10 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
          Technology &amp; Clinical Reality
        </span>
        <h4 className="text-xl font-bold text-slate-900 mt-1">
          Consumer AI Smile Analysis vs. Clinical Dental Diagnostics
        </h4>
        <p className="text-sm text-slate-600">
          Why image-based machine learning apps can offer aesthetic visualization, but can never substitute for in-person dental examinations.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="py-3 px-4 font-semibold text-slate-900">Diagnostic Dimension</th>
              <th className="py-3 px-4 font-semibold text-amber-900">Consumer AI Smartphone Tool (2D)</th>
              <th className="py-3 px-4 font-semibold text-slate-900">Licensed Clinical Dental Exam</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3.5 px-4 font-medium text-slate-900">Aesthetic Alignment &amp; Symmetry</td>
              <td className="py-3.5 px-4 text-emerald-800">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-600">✓</span> Visual landmark estimation
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-700 font-medium">3D occlusal &amp; cephalometric analysis</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-slate-900">Tooth Shade Benchmarking</td>
              <td className="py-3.5 px-4 text-amber-800">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="text-amber-600">▲</span> Approximate (distorted by lighting)
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-700 font-medium">Calibrated spectrophotometry &amp; shade guide tabs</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-slate-900">Subgingival Bone &amp; Roots</td>
              <td className="py-3.5 px-4 text-rose-700">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="text-rose-600">✗</span> Blind (2D photos cannot penetrate tissue)
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-700 font-medium">Digital bitewing X-rays &amp; 3D CBCT scans</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-slate-900">Periodontal Disease &amp; Gum Pockets</td>
              <td className="py-3.5 px-4 text-rose-700">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="text-rose-600">✗</span> Cannot measure pocket depth
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-700 font-medium">Millimeter periodontal probing (PSR)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-medium text-slate-900">Pulp Vitality &amp; Hidden Decay</td>
              <td className="py-3.5 px-4 text-rose-700">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="text-rose-600">✗</span> Cannot evaluate nerve or tight contacts
                </span>
              </td>
              <td className="py-3.5 px-4 text-slate-700 font-medium">Tactile explorer, thermal tests &amp; radiographic imaging</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 rounded-xl bg-amber-50/70 border border-amber-200/60 p-4 text-xs text-amber-900">
        <strong>Key Takeaway:</strong> Algorithms can be enjoyable for cosmetic previews, but the human oral cavity requires clinical medical oversight. Over 70% of dental pathology exists below the surface or between teeth where cameras cannot see.
      </div>
    </div>
  );
}
