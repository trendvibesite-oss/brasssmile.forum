import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
}

export default function Logo({ className = "", size = "md", withLink = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl sm:text-3xl",
  };

  const svgDimensions = {
    sm: { width: 28, height: 28 },
    md: { width: 34, height: 34 },
    lg: { width: 44, height: 44 },
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Brand Icon SVG */}
        <svg
          width={svgDimensions[size].width}
          height={svgDimensions[size].height}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Subtle Outer Enclosing Squircle */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill="#0F172A"
            stroke="#C59B27"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          {/* Geometric Inner Glow */}
          <circle cx="20" cy="20" r="14" fill="#1E293B" />
          
          {/* Refined Brass Smile Arc */}
          <path
            d="M 12 21 C 15 28, 25 28, 28 21"
            stroke="#C59B27"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Upper Accent Dot / Sparkle */}
          <circle cx="20" cy="13" r="2.2" fill="#F4E0A5" />
          <path
            d="M 11 19 Q 12 18, 13 19"
            stroke="#C59B27"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 27 19 Q 28 18, 29 19"
            stroke="#C59B27"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span className={`flex items-baseline font-extrabold tracking-tight ${sizeClasses[size]}`}>
        <span className="text-slate-900">Brass</span>
        <span className="text-amber-700">Smile</span>
      </span>
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-lg p-1"
        aria-label="BrassSmile Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
