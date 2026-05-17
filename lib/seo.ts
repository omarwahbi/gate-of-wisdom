import type { Metadata } from "next";
import { getDictionary } from "./get-dictionary";

const SITE_URL = "https://gateofwisdom.com.iq";
const SITE_NAME_EN = "Gate of Wisdom Consulting Engineers";
const SITE_NAME_AR = "بوابة الحكمة للاستشارات الهندسية";

type Lang = "en" | "ar";

interface SeoPageData {
  title: string;
  description: string;
  keywords: string;
}

type SeoPageKey =
  | "home"
  | "services"
  | "project_management"
  | "market_studies"
  | "feasibility_studies"
  | "performance_efficiency"
  | "human_resources"
  | "marketing_sales"
  | "crm"
  | "knowledge_hub"
  | "lectures"
  | "bi_center"
  | "economic_insights"
  | "international_indicators"
  | "investment_study"
  | "legislation_library"
  | "engineering_standards"
  | "environmental_determinants"
  | "laws_regulations"
  | "statistics_reports"
  | "contact"
  | "success_stories";

export async function generatePageMetadata(
  pageKey: SeoPageKey,
  lang: Lang,
  pathSegment: string
): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  const seo = dictionary.seo?.[pageKey] as SeoPageData | undefined;

  const title = seo?.title ?? SITE_NAME_EN;
  const description = seo?.description ?? "";
  const keywords = seo?.keywords ?? "";
  const siteName = lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN;
  const altLang: Lang = lang === "en" ? "ar" : "en";
  const altPath = `/${altLang}/${pathSegment}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteName }],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${lang}/${pathSegment}`,
      siteName,
      locale: lang === "ar" ? "ar_IQ" : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/${pathSegment}`,
      languages: {
        en: `${SITE_URL}/en/${pathSegment}`,
        ar: `${SITE_URL}/ar/${pathSegment}`,
      },
    },
  };
}