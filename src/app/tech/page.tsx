import React from "react";
import { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategoryBySlug } from "@/data/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Technology & AI Diagnostics Hub",
  description:
    "Explore how artificial intelligence, computer vision, and digital health software evaluate smiles, and understand the technical limits of 2D image analysis.",
  canonicalPath: "/tech",
});

export default function TechCategoryPage() {
  const category = getCategoryBySlug("tech")!;
  return <CategoryTemplate category={category} />;
}
