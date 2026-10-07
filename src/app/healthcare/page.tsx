import React from "react";
import { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategoryBySlug } from "@/data/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Healthcare, Oral Biology & Smile Science",
  description:
    "Evidence-informed educational guides on tooth anatomy, enamel and dentin biology, causes of discoloration, and clinical smile care.",
  canonicalPath: "/healthcare",
});

export default function HealthcareCategoryPage() {
  const category = getCategoryBySlug("healthcare")!;
  return <CategoryTemplate category={category} />;
}
