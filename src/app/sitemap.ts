import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raphaelejeogo.com";

  const caseStudies = [
    "local-law-firm",
    "boutique-hotel",
    "healthcare-clinic",
    "ecommerce-retail",
    "education-platform",
    "trades-construction",
  ];

  const caseStudyUrls = caseStudies.map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudyUrls,
  ];
}