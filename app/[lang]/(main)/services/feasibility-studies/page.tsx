import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import FeasibilityStudiesContent from "./FeasibilityStudiesContent";
import { JsonLd } from "@/components/JsonLd";

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
  const schemas = getPageJsonLd("feasibility_studies", lang, "services/feasibility-studies");

  return (
    <>
      <JsonLd schemas={schemas} />
      <FeasibilityStudiesContent lang={lang} serviceData={serviceData} />
    </>
  );
}
