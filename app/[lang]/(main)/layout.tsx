import * as React from "react";
import { getDictionary } from "@/lib/get-dictionary";
import { Navbar } from "../../../components/navigation/Navbar";
import { Footer } from "../../../components/navigation/Footer";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "ar");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} dictionary={dictionary} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  );
}
