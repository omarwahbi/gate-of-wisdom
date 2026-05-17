import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { JsonLd } from "@/components/JsonLd";
import { ContactPageContent } from "./ContactPageContent";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("contact", lang as "en" | "ar", "contact");
}

export default async function ContactPage(props: { params: Promise<{ lang: "en" | "ar" }> }) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { contact_page: pageData, footer } = dictionary;
  const schemas = getPageJsonLd("contact", lang, "contact");

  return (
    <>
      <JsonLd schemas={schemas} />
      <ContactPageContent lang={lang} pageData={pageData} footer={footer} />
    </>
  );
}
