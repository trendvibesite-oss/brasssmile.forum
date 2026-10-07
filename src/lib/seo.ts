import { Metadata } from "next";

export const SITE_URL = "https://brasssmile.forum";
export const SITE_NAME = "BrassSmile";

export interface PageMetadataProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
}: PageMetadataProps): Metadata {
  const url = `${SITE_URL}${canonicalPath}`;
  const fullTitle = canonicalPath === "" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authorName && { authors: [authorName] }),
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Educational Resource and Knowledge Platform`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-default.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      caption: "BrassSmile Logo",
    },
    description:
      "BrassSmile is an independent multi-topic digital publication and educational resource clearinghouse providing guidance across technology, business, services, home decor, and healthcare.",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getWebPageSchema(url: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    inLanguage: "en-US",
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  publishedDate,
  modifiedDate,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  modifiedDate: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: `${SITE_URL}/og-default.png`,
    inLanguage: "en-US",
  };
}
