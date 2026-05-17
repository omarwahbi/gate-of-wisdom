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
  return pages.map((page) => ({
    url: `${SITE_URL}/en/${page}`,
    lastModified: "2025-05-18",
    changeFrequency: page === "" ? ("monthly" as const) : ("weekly" as const),
    priority: page === "" ? 1 : page.split("/").length === 1 ? 0.8 : 0.6,
    alternates: {
      languages: {
        en: `${SITE_URL}/en/${page}`,
        ar: `${SITE_URL}/ar/${page}`,
      },
    },
  }));
}