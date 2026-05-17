import type { Metadata } from "next";
import { getDictionary } from "./get-dictionary";
import { breadcrumbJsonLd, serviceJsonLd, localBusinessJsonLd } from "./json-ld";

const SITE_URL = "https://gateofwisdom.com.iq";
const SITE_NAME_EN = "Gate of Wisdom Consulting Engineers";
const SITE_NAME_AR = "بوابة الحكمة للاستشارات الهندسية";

type Lang = "en" | "ar";

interface SeoPageData {
  title: string;
  description: string;
  keywords: string;
}

export type SeoPageKey =
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

const BREADCRUMB_LABELS: Record<SeoPageKey, { en: string; ar: string }> = {
  home: { en: "Home", ar: "الرئيسية" },
  services: { en: "Services", ar: "خدماتنا" },
  project_management: { en: "Project Management", ar: "إدارة المشاريع" },
  market_studies: { en: "Market Studies", ar: "دراسات السوق" },
  feasibility_studies: { en: "Feasibility Studies", ar: "دراسات الجدوى" },
  performance_efficiency: { en: "Performance Efficiency", ar: "كفاءة الأداء" },
  human_resources: { en: "Human Resources", ar: "الموارد البشرية" },
  marketing_sales: { en: "Marketing & Sales", ar: "التسويق والمبيعات" },
  crm: { en: "CRM Solutions", ar: "حلول إدارة علاقات العملاء" },
  knowledge_hub: { en: "Knowledge Hub", ar: "مركز المعرفة" },
  lectures: { en: "Lectures", ar: "محاضرات" },
  bi_center: { en: "Business Intelligence", ar: "الذكاء الأعمالي" },
  economic_insights: { en: "Economic Insights", ar: "رؤى اقتصادية" },
  international_indicators: { en: "International Indicators", ar: "مؤشرات دولية" },
  investment_study: { en: "Investment Study", ar: "دراسة استثمارية" },
  legislation_library: { en: "Legislation Library", ar: "مكتبة التشريعات" },
  engineering_standards: { en: "Engineering Standards", ar: "المعايير الهندسية" },
  environmental_determinants: { en: "Environmental Determinants", ar: "المحددات البيئية" },
  laws_regulations: { en: "Laws & Regulations", ar: "القوانين والتشريعات" },
  statistics_reports: { en: "Statistics & Reports", ar: "الإحصائيات والتقارير" },
  contact: { en: "Contact Us", ar: "اتصل بنا" },
  success_stories: { en: "Success Stories", ar: "قصص نجاح" },
};

const PARENT_MAP: Record<string, SeoPageKey> = {
  project_management: "services",
  market_studies: "services",
  feasibility_studies: "services",
  performance_efficiency: "services",
  human_resources: "services",
  marketing_sales: "services",
  crm: "services",
  lectures: "knowledge_hub",
  economic_insights: "bi_center",
  international_indicators: "bi_center",
  investment_study: "bi_center",
  engineering_standards: "legislation_library",
  environmental_determinants: "legislation_library",
  laws_regulations: "legislation_library",
  statistics_reports: "legislation_library",
};

const SERVICE_JSONLD_DATA: Record<string, { name: string; nameAr: string; description: string; descriptionAr: string }> = {
  project_management: { name: "Project Management Consulting", nameAr: "استشارات إدارة المشاريع", description: "Expert project management consulting in Iraq", descriptionAr: "استشارات إدارة مشاريع احترافية في العراق" },
  market_studies: { name: "Market Studies & Research", nameAr: "دراسات وبحوث السوق", description: "In-depth market studies and research for the Iraqi market", descriptionAr: "دراسات سوق معمقة للسوق العراقي" },
  feasibility_studies: { name: "Technical & Economic Feasibility Studies", nameAr: "دراسات الجدوى الفنية والاقتصادية", description: "Rigorous technical and economic feasibility studies for investment projects in Iraq", descriptionAr: "دراسات جدوى فنية واقتصادية دقيقة للمشاريع الاستثمارية في العراق" },
  performance_efficiency: { name: "Performance Efficiency Assessment", nameAr: "تقييم كفاءة الأداء", description: "Organizational performance efficiency assessment and optimization", descriptionAr: "تقييم كفاءة الأداء المؤسسي وتحسين العمليات" },
  human_resources: { name: "Human Resources Management", nameAr: "إدارة الموارد البشرية", description: "Strategic human resources management consulting", descriptionAr: "استشارات إدارة الموارد البشرية الاستراتيجية" },
  marketing_sales: { name: "Marketing & Sales Strategy", nameAr: "استراتيجية التسويق والمبيعات", description: "Data-driven marketing and sales strategy consulting", descriptionAr: "استشارات تسويق ومبيعات مبنية على البيانات" },
  crm: { name: "CRM Solutions", nameAr: "حلول إدارة علاقات العملاء", description: "Customer Relationship Management solutions", descriptionAr: "حلول إدارة علاقات العملاء" },
};

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

  // Home page uses absolute title to avoid duplication with layout template
  const titleMeta: Metadata["title"] = pageKey === "home"
    ? { absolute: title }
    : title;

  return {
    title: titleMeta,
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

export function getPageJsonLd(
  pageKey: SeoPageKey,
  lang: Lang,
  pathSegment: string
): object[] {
  const schemas: object[] = [];
  const labels = BREADCRUMB_LABELS[pageKey];
  const breadcrumbItems = [
    { name: lang === "ar" ? "الرئيسية" : "Home", href: `/${lang}` },
  ];

  const parent = PARENT_MAP[pageKey];
  if (parent) {
    const parentLabel = BREADCRUMB_LABELS[parent];
    breadcrumbItems.push({
      name: lang === "ar" ? parentLabel.ar : parentLabel.en,
      href: `/${lang}/${parent === "services" ? "services" : parent === "knowledge_hub" ? "knowledge-hub" : parent === "bi_center" ? "bi-center" : parent === "legislation_library" ? "legislation-library" : parent}`,
    });
  }

  breadcrumbItems.push({
    name: lang === "ar" ? labels.ar : labels.en,
    href: `/${lang}/${pathSegment}`,
  });

  schemas.push(breadcrumbJsonLd(lang, breadcrumbItems));

  if (SERVICE_JSONLD_DATA[pageKey]) {
    schemas.push(serviceJsonLd(lang, { ...SERVICE_JSONLD_DATA[pageKey], slug: pathSegment.replace("services/", "") }));
  }

  if (pageKey === "contact") {
    schemas.push(localBusinessJsonLd(lang));
  }

  return schemas;
}