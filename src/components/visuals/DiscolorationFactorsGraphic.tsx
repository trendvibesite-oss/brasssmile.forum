import React from "react";

export default function DiscolorationFactorsGraphic() {
  return (
    <div className="rounded-2xl border border-amber-950/10 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
          Etiology Matrix
        </span>
        <h4 className="text-xl font-bold text-slate-900 mt-1">
          Extrinsic vs. Intrinsic Discoloration Factors
        </h4>
        <p className="text-sm text-slate-600">
          Understanding whether tooth discoloration originates on the outer surface or within the internal tooth structure determines effective, safe intervention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Extrinsic Box */}
        <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-sm">
              EX
            </span>
            <div>
              <h5 className="font-bold text-slate-900 text-base">Extrinsic (Surface) Stains</h5>
              <p className="text-xs text-amber-900 font-medium">Accumulates on outer enamel pellicle</p>
            </div>
          </div>

          <ul className="space-y-2.5 text-sm text-slate-700 mt-4">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>Chromogens &amp; Tannins:</strong> Dark pigments in black tea, coffee, berries, and dark sauces that bind to the acquired pellicle.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>Tobacco &amp; Nicotine:</strong> Tar and combustion byproducts that lodge into microscopic enamel porosities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">•</span>
              <span><strong>Plaque Biofilm:</strong> Unremoved bacterial colonies that absorb dietary pigments over time.</span>
            </li>
          </ul>

          <div className="mt-5 pt-3 border-t border-amber-200/80 text-xs text-amber-950 font-medium">
            <strong>Typical Management:</strong> Routine prophylactic dental cleanings, gentle daily brushing, low-abrasivity polishing toothpastes.
          </div>
        </div>

        {/* Intrinsic Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white font-bold text-sm">
              IN
            </span>
            <div>
              <h5 className="font-bold text-slate-900 text-base">Intrinsic (Internal) Changes</h5>
              <p className="text-xs text-slate-600 font-medium">Located within enamel matrix or dentin</p>
            </div>
          </div>

          <ul className="space-y-2.5 text-sm text-slate-700 mt-4">
            <li className="flex items-start gap-2">
              <span className="text-slate-700 font-bold">•</span>
              <span><strong>Natural Aging:</strong> Gradual wear of translucent enamel combined with thickening of deeper yellow secondary dentin.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-700 font-bold">•</span>
              <span><strong>Dental Trauma:</strong> Pulpal nerve damage causing blood degradation products to infuse dentinal tubules.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-700 font-bold">•</span>
              <span><strong>Developmental Factors:</strong> Fluorosis or tetracycline antibiotic exposure during childhood odontogenesis.</span>
            </li>
          </ul>

          <div className="mt-5 pt-3 border-t border-slate-200 text-xs text-slate-800 font-medium">
            <strong>Typical Management:</strong> Oxidative peroxide bleaching, internal bleaching, or restorative dentistry (composite bonding, veneers).
          </div>
        </div>
      </div>
    </div>
  );
}
