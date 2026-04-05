import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const futura = localFont({
  src: "../../fonts/FuturaStdMedium.otf",
  variable: "--font-futura",
});

const calibri = localFont({
  src: "../../fonts/Calibri.ttf",
  variable: "--font-calibri",
});

export const metadata: Metadata = {
  title: "Gate of Wisdom Consulting Engineers",
  description: "Bilingual Corporate Consulting Website",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const fontClass = lang === "ar" ? calibri.variable : futura.variable;

  return (
    <html lang={lang} dir={dir} className={`${futura.variable} ${calibri.variable}`}>
      <body className={`${fontClass} font-sans min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
