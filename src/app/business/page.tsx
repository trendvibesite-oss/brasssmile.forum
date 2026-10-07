import React from "react";
import { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategoryBySlug } from "@/data/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Business & Digital Publishing Strategy",
  description:
    "Insights into multi-topic digital publishing models, domain identity, entity SEO, and the economics of online media authority.",
  canonicalPath: "/business",
});

export default function BusinessCategoryPage() {
  const category = getCategoryBySlug("business")!;
  return <CategoryTemplate category={category} />;
}
