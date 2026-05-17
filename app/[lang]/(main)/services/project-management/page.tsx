import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { JsonLd } from "@/components/JsonLd";
import ProjectManagementContent from "./ProjectManagementContent";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("project_management", lang as "en" | "ar", "services/project-management");
}

export default async function ProjectManagementPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const schemas = getPageJsonLd("project_management", lang, "services/project-management");

  return (
    <>
      <JsonLd schemas={schemas} />
      <ProjectManagementContent lang={lang} dictionary={dictionary} />
    </>
  );
}
