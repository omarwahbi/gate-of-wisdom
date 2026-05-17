import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { JsonLd } from "@/components/JsonLd";
import { StatisticsReportsContent } from "./StatisticsReportsContent";

interface StatisticsReportsPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("statistics_reports", lang as "en" | "ar", "legislation-library/statistics-reports");
}

export default async function StatisticsReportsPage(props: StatisticsReportsPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const schemas = getPageJsonLd("statistics_reports", lang, "legislation-library/statistics-reports");

  return (
    <>
      <JsonLd schemas={schemas} />
      <StatisticsReportsContent lang={lang} dictionary={dictionary} />
    </>
  );
}
