import { getDictionary } from "@/lib/get-dictionary";
import { LawsRegulationsContent } from "./LawsRegulationsContent";

interface LawsRegulationsPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function LawsRegulationsPage(props: LawsRegulationsPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return <LawsRegulationsContent lang={lang} dictionary={dictionary} />;
}
