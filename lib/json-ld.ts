const SITE_URL = "https://gateofwisdom.com.iq";
const SITE_NAME_EN = "Gate of Wisdom Consulting Engineers";
const SITE_NAME_AR = "بوابة الحكمة للاستشارات الهندسية";

type Lang = "en" | "ar";

export function organizationJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      lang === "ar"
        ? "شركة استشارية عراقية متخصصة في دراسات الجدوى، بحوث السوق، إدارة المشاريع، والذكاء الأعمالي."
        : "Iraqi consulting firm specializing in feasibility studies, market research, project management, and business intelligence.",
    address: {
      "@type": "PostalAddress",
      streetAddress: lang === "ar" ? "بغداد، المنصور، شارع 14 رمضان" : "Baghdad, Mansour, 14 Ramadan St.",
      addressLocality: "Baghdad",
      addressCountry: "IQ",
    },
    telephone: "+9647901869682",
    email: "info@gateofwisdom.com.iq",
    sameAs: [
      "https://www.instagram.com/gateofwisdom.iq/",
      "https://www.linkedin.com/company/gate-of-wisdom-consulting-engineers/",
    ],
  };
}

export function webSiteJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN,
    url: `${SITE_URL}/${lang}`,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/${lang}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  lang: Lang,
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function localBusinessJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN,
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
    telephone: "+9647901869682",
    email: "info@gateofwisdom.com.iq",
    address: {
      "@type": "PostalAddress",
      streetAddress: lang === "ar" ? "بغداد، المنصور، شارع 14 رمضان" : "Baghdad, Mansour, 14 Ramadan St.",
      addressLocality: "Baghdad",
      addressCountry: "IQ",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
  };
}

export function serviceJsonLd(
  lang: Lang,
  data: {
    name: string;
    nameAr: string;
    description: string;
    descriptionAr: string;
    slug: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lang === "ar" ? data.nameAr : data.name,
    description: lang === "ar" ? data.descriptionAr : data.description,
    provider: {
      "@type": "Organization",
      name: lang === "ar" ? SITE_NAME_AR : SITE_NAME_EN,
      url: SITE_URL,
    },
    url: `${SITE_URL}/${lang}/services/${data.slug}`,
    areaServed: {
      "@type": "Country",
      name: "Iraq",
    },
  };
}