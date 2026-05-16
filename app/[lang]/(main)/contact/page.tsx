import { getDictionary } from "@/lib/get-dictionary";
import { ContactPageContent } from "./ContactPageContent";

export default async function ContactPage(props: { params: Promise<{ lang: "en" | "ar" }> }) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { contact_page: pageData, footer } = dictionary;

  return <ContactPageContent lang={lang} pageData={pageData} footer={footer} />;
}
