import React from "react";
import { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategoryBySlug } from "@/data/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Professional Services & Provider Navigation",
  description:
    "Expert consumer guidance on navigating professional services, clinical dental consultations, fee transparency, and provider vetting.",
  canonicalPath: "/services",
});

export default function ServicesCategoryPage() {
  const category = getCategoryBySlug("services")!;
  return <CategoryTemplate category={category} />;
}
