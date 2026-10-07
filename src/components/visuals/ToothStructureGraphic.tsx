import React from "react";

export default function ToothStructureGraphic() {
  return (
    <div className="rounded-2xl border border-amber-950/10 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
          Anatomical Cross-Section
        </span>
        <h4 className="text-lg font-bold text-slate-900 mt-1">
          The Optical Interaction: Enamel &amp; Dentin
        </h4>
        <p className="text-sm text-slate-600">
          Natural tooth color is not an opaque white shell; it is the optical result of translucent crystalline enamel revealing the warm yellow dentin beneath.
        </p>
      </div>

      <svg
        viewBox="0 0 600 340"
        className="w-full h-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cross-section diagram comparing tooth enamel, dentin, and light reflection"
      >
        <defs>
          <linearGradient id="enamelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="dentinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCEFC7" />
            <stop offset="60%" stopColor="#F6DC8A" />
            <stop offset="100%" stopColor="#E5C158" />
          </linearGradient>

          <linearGradient id="pulpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCA5A5" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>

          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#C59B27" />
          </marker>
        </defs>

        {/* Outer Gumline Reference */}
        <path d="M 40 250 Q 150 220 200 250" stroke="#FDA4AF" strokeWidth="14" strokeLinecap="round" opacity="0.6" />
        <path d="M 400 250 Q 450 220 560 250" stroke="#FDA4AF" strokeWidth="14" strokeLinecap="round" opacity="0.6" />

        {/* 1. Enamel Layer Outer Outline */}
        <path
          d="M 180 250 C 170 140, 220 50, 300 50 C 380 50, 430 140, 420 250 Z"
          fill="url(#enamelGrad)"
          stroke="#94A3B8"
          strokeWidth="2"
        />

        {/* 2. Dentin Layer Inner */}
        <path
          d="M 210 250 C 200 160, 240 90, 300 90 C 360 90, 400 160, 390 250 Z"
          fill="url(#dentinGrad)"
          stroke="#C59B27"
          strokeWidth="1.5"
        />

        {/* 3. Dental Pulp Chamber */}
        <path
          d="M 270 250 C 265 190, 285 140, 300 140 C 315 140, 335 190, 330 250 Z"
          fill="url(#pulpGrad)"
          stroke="#DC2626"
          strokeWidth="1.2"
        />

        {/* Callout Pointer 1: Enamel */}
        <line x1="130" y1="90" x2="220" y2="80" stroke="#475569" strokeWidth="1.5" />
        <circle cx="220" cy="80" r="3" fill="#475569" />
        <text x="50" y="86" fill="#0F172A" fontSize="13" fontWeight="bold">
          Enamel (Outer)
        </text>
        <text x="50" y="104" fill="#64748B" fontSize="11">
          96% mineral, semi-translucent
        </text>

        {/* Callout Pointer 2: Dentin */}
        <line x1="130" y1="160" x2="250" y2="160" stroke="#B45309" strokeWidth="1.5" />
        <circle cx="250" cy="160" r="3" fill="#B45309" />
        <text x="50" y="156" fill="#92400E" fontSize="13" fontWeight="bold">
          Dentin (Core)
        </text>
        <text x="50" y="174" fill="#64748B" fontSize="11">
          Organic, natural yellow-amber hue
        </text>

        {/* Callout Pointer 3: Pulp */}
        <line x1="470" y1="200" x2="320" y2="200" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="320" cy="200" r="3" fill="#DC2626" />
        <text x="480" y="196" fill="#991B1B" fontSize="13" fontWeight="bold">
          Dental Pulp
        </text>
        <text x="480" y="214" fill="#64748B" fontSize="11">
          Nerves &amp; blood vessels
        </text>

        {/* Optical Light Path Representation */}
        <g transform="translate(370, 60)">
          <path d="M 50 10 L 0 50" stroke="#C59B27" strokeWidth="2.5" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <text x="60" y="16" fill="#B45309" fontSize="12" fontWeight="bold">
            Incident Light
          </text>
          <text x="60" y="32" fill="#64748B" fontSize="10">
            Penetrates translucent enamel;
          </text>
          <text x="60" y="46" fill="#64748B" fontSize="10">
            reflects yellow dentin chroma
          </text>
        </g>

        {/* Bottom Anatomy Note Box */}
        <rect x="150" y="285" width="300" height="34" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="300" y="306" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="500">
          Thinning enamel reveals more yellow dentin over time
        </text>
      </svg>
    </div>
  );
}
