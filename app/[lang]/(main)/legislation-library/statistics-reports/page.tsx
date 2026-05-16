import { getDictionary } from "@/lib/get-dictionary";
import { StatisticsReportsContent } from "./StatisticsReportsContent";

interface StatisticsReportsPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function StatisticsReportsPage(props: StatisticsReportsPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return <StatisticsReportsContent lang={lang} dictionary={dictionary} />;
}
