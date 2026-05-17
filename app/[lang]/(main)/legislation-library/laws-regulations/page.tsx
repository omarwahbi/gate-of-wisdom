import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { LawsRegulationsContent } from "./LawsRegulationsContent";

interface LawsRegulationsPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("laws_regulations", lang as "en" | "ar", "legislation-library/laws-regulations");
}

export default async function LawsRegulationsPage(props: LawsRegulationsPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return <LawsRegulationsContent lang={lang} dictionary={dictionary} />;
}
