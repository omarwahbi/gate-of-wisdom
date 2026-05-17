import type { Metadata } from "next";
import localFont from "next/font/local";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/json-ld";
import "../globals.css";

const futura = localFont({
  src: "../../fonts/FuturaStdMedium.otf",
  variable: "--font-futura",
});

const tajawal = localFont({
  src: [
    { path: "../../fonts/Tajawal-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/Tajawal-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/Tajawal-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-calibri",
});

const SITE_URL = "https://gateofwisdom.com.iq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: isAr
        ? "بوابة الحكمة للاستشارات الهندسية"
        : "Gate of Wisdom Consulting Engineers",
      template: isAr
        ? "%s | بوابة الحكمة للاستشارات الهندسية"
        : "%s | Gate of Wisdom Consulting Engineers",
    },
    description: isAr
      ? "بوابة الحكمة للاستشارات الهندسية — شركة استشارية عراقية متخصصة في دراسات الجدوى، بحوث السوق، إدارة المشاريع، والذكاء الأعمالي."
      : "Gate of Wisdom Consulting Engineers — Iraqi consulting firm specializing in feasibility studies, market research, project management, and business intelligence.",
    keywords: isAr
      ? "استشارات هندسية العراق، دراسات جدوى، بحوث سوق، إدارة مشاريع، ذكاء أعمالي"
      : "consulting engineers Iraq, feasibility studies, market research, project management, business intelligence",
    authors: [{ name: isAr ? "بوابة الحكمة للاستشارات الهندسية" : "Gate of Wisdom Consulting Engineers" }],
    creator: isAr ? "بوابة الحكمة للاستشارات الهندسية" : "Gate of Wisdom Consulting Engineers",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_IQ" : "en_US",
      url: `${SITE_URL}/${lang}`,
      siteName: isAr
        ? "بوابة الحكمة للاستشارات الهندسية"
        : "Gate of Wisdom Consulting Engineers",
      title: isAr
        ? "بوابة الحكمة للاستشارات الهندسية"
        : "Gate of Wisdom Consulting Engineers",
      description: isAr
        ? "شركة استشارية عراقية متخصصة في دراسات الجدوى، بحوث السوق، إدارة المشاريع، والذكاء الأعمالي."
        : "Iraqi consulting firm specializing in feasibility studies, market research, project management, and business intelligence.",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isAr ? "بوابة الحكمة للاستشارات الهندسية" : "Gate of Wisdom Consulting Engineers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isAr
        ? "بوابة الحكمة للاستشارات الهندسية"
        : "Gate of Wisdom Consulting Engineers",
      description: isAr
        ? "شركة استشارية عراقية متخصصة في دراسات الجدوى، بحوث السوق، إدارة المشاريع، والذكاء الأعمالي."
        : "Iraqi consulting firm specializing in feasibility studies, market research, project management, and business intelligence.",
      images: [`${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
      },
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}

export const viewport = {
  themeColor: "#c49a6c",
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
  const fontClass = lang === "ar" ? tajawal.variable : futura.variable;

  return (
    <html lang={lang} dir={dir} className={`${futura.variable} ${tajawal.variable}`}>
      <body className={`${fontClass} font-sans min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd(lang as "en" | "ar"),
              webSiteJsonLd(lang as "en" | "ar"),
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}