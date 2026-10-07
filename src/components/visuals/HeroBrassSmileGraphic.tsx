import React from "react";

export default function HeroBrassSmileGraphic() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-200/20 via-amber-100/10 to-transparent blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 500 420"
        className="w-full h-auto drop-shadow-xl select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="BrassSmile visual identity graphic illustrating smile geometry, optics, and editorial clarity"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBF6D" />
            <stop offset="45%" stopColor="#C59B27" />
            <stop offset="70%" stopColor="#967417" />
            <stop offset="100%" stopColor="#DFBF6D" />
          </linearGradient>

          <linearGradient id="darkCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="softLightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Editorial Backdrop Frame */}
        <rect
          x="30"
          y="30"
          width="440"
          height="360"
          rx="24"
          fill="url(#darkCardGrad)"
          stroke="#C59B27"
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />

        {/* Subtle Geometric Grid Lines */}
        <line x1="30" y1="120" x2="470" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
        <line x1="30" y1="300" x2="470" y2="300" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
        <line x1="250" y1="30" x2="250" y2="390" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />

        {/* Golden Focal Orbit Rings */}
        <circle cx="250" cy="210" r="130" stroke="url(#brassMetallic)" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="250" cy="210" r="95" stroke="url(#brassMetallic)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 8" />

        {/* Editorial Pill Badge at Top */}
        <rect x="165" y="55" width="170" height="30" rx="15" fill="#0F172A" stroke="#C59B27" strokeWidth="1.2" />
        <circle cx="182" cy="70" r="4" fill="#C59B27" />
        <text x="195" y="75" fill="#E2E8F0" fontSize="11" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">
          BRASS-SMILE.FORUM
        </text>

        {/* Central Anatomical Smile Curve */}
        <path
          d="M 130 195 C 170 295, 330 295, 370 195"
          stroke="url(#brassMetallic)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#softGlow)"
        />

        {/* Upper Arch Alignment Guide */}
        <path
          d="M 155 175 Q 250 230 345 175"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
          opacity="0.8"
        />

        {/* Focal Landmark Accent Nodes */}
        <circle cx="130" cy="195" r="7" fill="#DFBF6D" stroke="#0F172A" strokeWidth="2" />
        <circle cx="370" cy="195" r="7" fill="#DFBF6D" stroke="#0F172A" strokeWidth="2" />
        <circle cx="250" cy="265" r="8" fill="#DFBF6D" stroke="#0F172A" strokeWidth="2" />
        <circle cx="250" cy="202" r="5" fill="#FFFFFF" />

        {/* Left Information Card Floating */}
        <g transform="translate(50, 240)">
          <rect width="130" height="64" rx="12" fill="#0F172A" stroke="#475569" strokeWidth="1" />
          <text x="14" y="24" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" fontWeight="500">
            Enamel Clarity
          </text>
          <text x="14" y="44" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="700">
            96% Hydroxyapatite
          </text>
          <circle cx="114" cy="22" r="3" fill="#10B981" />
        </g>

        {/* Right Information Card Floating */}
        <g transform="translate(320, 240)">
          <rect width="130" height="64" rx="12" fill="#0F172A" stroke="#475569" strokeWidth="1" />
          <text x="14" y="24" fill="#94A3B8" fontSize="10" fontFamily="sans-serif" fontWeight="500">
            Dentin Tone
          </text>
          <text x="14" y="44" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="700">
            Natural Warmth
          </text>
          <circle cx="114" cy="22" r="3" fill="#C59B27" />
        </g>

        {/* Bottom Editorial Caption */}
        <text x="250" y="355" textAnchor="middle" fill="#CBD5E1" fontSize="12" fontFamily="sans-serif" fontWeight="500">
          Independent Knowledge Clearinghouse &amp; Smile Science Resource
        </text>
      </svg>
    </div>
  );
}
