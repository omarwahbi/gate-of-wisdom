import { getDictionary } from "@/lib/get-dictionary";
import { ContactPageContent } from "./ContactPageContent";

export default async function ContactPage(props: { params: Promise<{ lang: "en" | "ar" }> }) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return <ContactPageContent lang={lang} pageData={dictionary.contact_page} footer={dictionary.footer} />;
}