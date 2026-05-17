import type { MetadataRoute } from "next";

const SITE_URL = "https://gateofwisdom.com.iq";

const pages = [
  "",
  "services",
  "services/project-management",
  "services/market-studies",
  "services/feasibility-studies",
  "services/performance-efficiency",
  "services/human-resources",
  "services/marketing-sales",
  "services/crm",
  "knowledge-hub",
  "knowledge-hub/lectures",
  "bi-center",
  "bi-center/economic-insights",
  "bi-center/international-indicators",
  "bi-center/investment-study",
  "legislation-library",
  "legislation-library/engineering-standards",
  "legislation-library/environmental-determinants",
  "legislation-library/laws-regulations",
  "legislation-library/statistics-reports",
  "success-stories",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["en", "ar"];

  return pages.flatMap((page) =>
    langs.map((lang) => ({
      url: `${SITE_URL}/${lang}/${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "monthly" : "weekly" as const,
      priority: page === "" ? 1 : page.split("/").length === 1 ? 0.8 : 0.6,
    }))
  );
}