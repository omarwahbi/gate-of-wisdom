"use client";

import { useEffect } from "react";

interface LanguageHtmlProps {
  lang: string;
}

export function LanguageHtml({ lang }: LanguageHtmlProps) {
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  return null;
}
