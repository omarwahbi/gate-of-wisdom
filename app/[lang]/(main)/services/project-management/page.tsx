import { getDictionary } from "@/lib/get-dictionary";
import ProjectManagementContent from "./ProjectManagementContent";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function ProjectManagementPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return <ProjectManagementContent lang={lang} dictionary={dictionary} />;
}
