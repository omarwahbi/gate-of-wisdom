"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Check, X, Mail, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnvironmentalLaw {
  number: number;
  title: string;
  title_ar: string;
  source: string;
  source_ar: string;
  year: string;
}

interface LeadMagnetModalProps {
  lang: "en" | "ar";
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
}

const STORAGE_KEY = "gow_environmental_laws_submissions";

export function LeadMagnetModal({ lang }: LeadMagnetModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLaw, setSelectedLaw] = useState<EnvironmentalLaw | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleDownloadClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest(".download-btn");
      if (!button) return;

      e.preventDefault();
      const lawData = button.getAttribute("data-law");
      if (lawData) {
        setSelectedLaw(JSON.parse(lawData));
        setIsOpen(true);
        // Check if user already submitted
        const existingSubmission = localStorage.getItem(STORAGE_KEY);
        if (existingSubmission) {
          setSubmitted(true);
        }
      }
    };

    document.addEventListener("click", handleDownloadClick);
    return () => document.removeEventListener("click", handleDownloadClick);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Validate - only name and phone required
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError(lang === "ar" ? "يرجى ملء الحقول المطلوبة" : "Please fill in the required fields");
      setIsLoading(false);
      return;
    }

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email || "Not provided",
            company: formData.company || "Not provided",
            phone: formData.phone,
            gift: selectedLaw ? `Environmental Law #${selectedLaw.number}` : "Environmental Laws",
            lang,
            _host: window.location.hostname,
            _subject: "Gate of Wisdom - Environmental Laws Download",
          }),
        });
      }

      // Store in localStorage to track submitted users
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          gift: selectedLaw?.title || "Environmental Laws",
        })
      );

      setSubmitted(true);
    } catch (err) {
      setError(lang === "ar" ? "حدث خطأ، يرجى المحاولة مرة أخرى" : "An error occurred, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const fileMap: Record<number, string> = {
    1: "01-national-environmental-strategy-2024-2030.pdf",
    2: "03-hazardous-waste-management-no3-2015.pdf",
    3: "04-treated-wastewater-irrigation-no3-2012.pdf",
    4: "05-document-preservation-ministry-environment-no1-2025.pdf",
    5: "10-chemical-substances-storage-safety-no4-1989.pdf",
    6: "06-environmental-determinants-projects-no3-2011.pdf",
    7: "07-communicable-diseases-identification-no1-2007.pdf",
    8: "08-pesticides-manufacture-handling-no2-1990.pdf",
    9: "09-municipal-waste-environmental-protection-no2-2014.pdf",
    10: "11-consulting-offices-laboratories-accreditation-no3-2014.pdf",
    11: "12-environmental-protection-fund-no1-2013.pdf",
    12: "13-national-emission-determinants-no3-2012.pdf",
    13: "02-environmental-impact-assessment-guide-duqm.pdf",
    14: "14-environmental-courses-seminars-regulations-no1-2018.pdf",
    15: "15-environmental-approval-world-heritage-projects-no1-2017.pdf",
    16: "16-plant-quarantine-law-no76-2012.pdf",
    17: "17-noise-control-law-no41-2015.pdf",
    18: "18-animal-health-law-no32-2013.pdf",
    19: "19-public-health-law-no89-1981.pdf",
    20: "20-forests-woodlands-law-no30-2009.pdf",
    21: "21-natural-reserves-law-no2-2014.pdf",
    22: "22-environmental-protection-improvement-law-no27-2009.pdf",
    23: "23-ministry-of-environment-law-no37-2008.pdf",
    24: "24-national-emission-determinants-activities-no3-2012.pdf",
    25: "25-water-resources-preservation-system-no2-2001.pdf",
    26: "26-ambient-air-pollution-protection-system-no4-2012.pdf",
  };

  const content = {
    en: {
      title: "Download Environmental Laws",
      subtitle: "Get the complete Iraqi Environmental Regulations Framework",
      name: "Full Name",
      email: "Work Email",
      company: "Company / Organization",
      phone: "Phone Number",
      submit: "Download Now",
      thankYou: "Thank you! Your download will start shortly.",
      close: "Close",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "email@example.com",
      companyPlaceholder: "Company Name",
      phonePlaceholder: "Phone Number",
    },
    ar: {
      title: "تحميل القوانين البيئية",
      subtitle: "احصل على الإطار الكامل للأنظمة البيئية العراقية",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني للعمل",
      company: "الشركة / المؤسسة",
      phone: "رقم الهاتف",
      submit: "تنزيل الآن",
      thankYou: "شكراً لك! سيبدأ التحميل قريباً.",
      close: "إغلاق",
      namePlaceholder: "أدخل اسمك",
      emailPlaceholder: "البريد الإلكتروني",
      companyPlaceholder: "اسم الشركة",
      phonePlaceholder: "رقم الهاتف",
    },
  };

  const t = content[lang];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg bg-card rounded-2xl shadow-2xl border border-border overflow-hidden",
          lang === "ar" ? "text-right" : "text-left"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-20"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="bg-primary/10 px-6 py-8 border-b border-border">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
              <Download className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-foreground">
            {t.title}
          </h2>
          <p className="text-sm text-muted-foreground text-center mt-2">{t.subtitle}</p>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {submitted ? (
            <div className="text-center space-y-6">
              <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto flex items-center justify-center">
                <svg
                  className="h-10 w-10 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{t.thankYou}</h3>
              </div>

              <a
                href={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/environmental-laws/${fileMap[selectedLaw!.number]}`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Download className="h-5 w-5" />
                {lang === "ar" ? "حمّل الآن" : "Download Now"}
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor={`name-${lang}`} className="block text-sm font-medium mb-2 text-foreground">
                  {t.name}
                </label>
                <div className={cn("relative", lang === "ar" ? "flex flex-row-reverse" : "")}>
                  <User className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                    lang === "ar" ? "end-3" : "start-3"
                  )} />
                  <input
                    id={`name-${lang}`}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                      lang === "ar" ? "pe-10 text-right" : "ps-10"
                    )}
                    placeholder={t.namePlaceholder}
                    disabled={isLoading}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`email-${lang}`} className="block text-sm font-medium mb-2 text-foreground">
                  {t.email}
                </label>
                <div className={cn("relative", lang === "ar" ? "flex flex-row-reverse" : "")}>
                  <Mail className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                    lang === "ar" ? "end-3" : "start-3"
                  )} />
                  <input
                    id={`email-${lang}`}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                      lang === "ar" ? "pe-10 text-right" : "ps-10"
                    )}
                    placeholder={t.emailPlaceholder}
                    disabled={isLoading}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`company-${lang}`} className="block text-sm font-medium mb-2 text-foreground">
                  {t.company}
                </label>
                <input
                  id={`company-${lang}`}
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                    lang === "ar" ? "text-right" : "text-left"
                  )}
                  placeholder={t.companyPlaceholder}
                  disabled={isLoading}
                  dir={lang === "ar" ? "rtl" : "ltr"}
                />
              </div>

              <div>
                <label htmlFor={`phone-${lang}`} className="block text-sm font-medium mb-2 text-foreground">
                  {t.phone} <span className="text-destructive">*</span>
                </label>
                <div className={cn("relative", lang === "ar" ? "flex flex-row-reverse" : "")}>
                  <Phone className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                    lang === "ar" ? "end-3" : "start-3"
                  )} />
                  <input
                    id={`phone-${lang}`}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                      lang === "ar" ? "pe-10 text-right" : "ps-10"
                    )}
                    placeholder={t.phonePlaceholder}
                    disabled={isLoading}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                  isLoading && "animate-pulse"
                )}
              >
                {isLoading ? (
                  lang === "ar" ? <span>جاري الإرسال...</span> : <span>Submitting...</span>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    {t.submit}
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                {lang === "ar"
                  ? "بمجرد تعبئة النموذج، سيتم فتح رابط التحميل فوراً"
                  : "Once you fill out the form, the download link will open immediately"
                }
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
