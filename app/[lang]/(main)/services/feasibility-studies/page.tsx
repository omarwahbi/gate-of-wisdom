import { getDictionary } from "@/lib/get-dictionary";
import FeasibilityStudiesContent from "./FeasibilityStudiesContent";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function FeasibilityStudiesPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { feasibility_studies: serviceData } = dictionary;

  return <FeasibilityStudiesContent lang={lang} serviceData={serviceData} />;
}
