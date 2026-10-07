export interface Category {
  slug: string;
  name: string;
  href: string;
  description: string;
  longDescription: string;
  tagline: string;
  iconName: "tech" | "business" | "services" | "home-decor" | "healthcare";
  articleCount: number;
  featuredTopics: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "tech",
    name: "Tech",
    href: "/tech",
    tagline: "Digital Innovations & Analysis Tools",
    description: "In-depth explorations of artificial intelligence, digital imaging, software tools, and emerging technical architectures.",
    longDescription: "The technology landscape moves fast. In the BrassSmile Tech hub, we break down AI smile analysis algorithms, computer vision systems, digital health diagnostics, and the engineering behind modern informational platforms.",
    iconName: "tech",
    articleCount: 4,
    featuredTopics: ["AI Smile Analysis", "Computer Vision", "Digital Health Imaging", "Platform Architecture"],
  },
  {
    slug: "business",
    name: "Business",
    href: "/business",
    tagline: "Publishing Models & Consumer Trends",
    description: "Analysis of online publishing economics, digital brand positioning, domain identity, and consumer trust.",
    longDescription: "Understanding how modern digital brands operate requires examining publishing models, entity authority, editorial independence, and the business strategies that shape multi-topic online magazines.",
    iconName: "business",
    articleCount: 3,
    featuredTopics: ["Publishing Economics", "Brand Positioning", "Domain Strategy", "Consumer Trust"],
  },
  {
    slug: "services",
    name: "Services",
    href: "/services",
    tagline: "Consumer Navigation & Professional Care",
    description: "Guidance on evaluating professional services, choosing licensed providers, and understanding consultation frameworks.",
    longDescription: "Navigating professional services—especially in healthcare and specialized consulting—demands transparency. Our guides explain consultation standards, provider vetting, diagnostic questions, and consumer rights.",
    iconName: "services",
    articleCount: 3,
    featuredTopics: ["Clinical Consultation", "Provider Verification", "Service Navigation", "Patient Advocacy"],
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    href: "/home-decor",
    tagline: "Wellness Environments & Daily Ergonomics",
    description: "Functional living design, grooming station ergonomics, task lighting, and spaces created for daily care.",
    longDescription: "A healthy daily routine is supported by thoughtful home spaces. We explore lighting color temperature (CRI) for grooming, vanity ergonomics, sanitary design principles, and calming aesthetic spaces.",
    iconName: "home-decor",
    articleCount: 3,
    featuredTopics: ["Grooming Ergonomics", "Vanity Task Lighting", "Sanitary Design", "Aesthetic Spaces"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    href: "/healthcare",
    tagline: "Evidence-Informed Oral Health & Wellness",
    description: "Authoritative educational resources covering tooth anatomy, enamel health, discoloration causes, and preventative care.",
    longDescription: "Rooted in clinical dental literature, our Healthcare section clarifies tooth anatomy, the biological differences between enamel and dentin, extrinsic vs. intrinsic staining mechanisms, and safe oral hygiene practices.",
    iconName: "healthcare",
    articleCount: 5,
    featuredTopics: ["Enamel & Dentin Biology", "Tooth Discoloration", "Preventative Care", "Clinical vs. At-Home Care"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
