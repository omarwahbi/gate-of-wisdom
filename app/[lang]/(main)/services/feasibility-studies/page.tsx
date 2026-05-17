import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import FeasibilityStudiesContent from "./FeasibilityStudiesContent";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("feasibility_studies", lang as "en" | "ar", "services/feasibility-studies");
}

export default async function FeasibilityStudiesPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { feasibility_studies: serviceData } = dictionary;

  return <FeasibilityStudiesContent lang={lang} serviceData={serviceData} />;
}
