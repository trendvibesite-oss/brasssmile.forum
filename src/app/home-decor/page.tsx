import React from "react";
import { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategoryBySlug } from "@/data/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Home Decor & Wellness Environments",
  description:
    "Functional vanity design, color rendering index (CRI) task lighting for grooming, and aesthetic wellness spaces.",
  canonicalPath: "/home-decor",
});

export default function HomeDecorCategoryPage() {
  const category = getCategoryBySlug("home-decor")!;
  return <CategoryTemplate category={category} />;
}
