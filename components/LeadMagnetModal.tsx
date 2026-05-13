"use client";

import { useState, useEffect } from "react";
import { X, Download, Mail, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { BoldText } from "@/components/BoldText";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "ar";
  giftTitle: string;
  giftDescription: string;
  downloadUrl: string;
  formEndpoint?: string; // Formspree endpoint (optional, falls back to env var)
  emailSubject?: string; // Custom email subject for Formspree
  emailMessage?: string; // Custom email body for Formspree
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const STORAGE_KEY = "gate_of_wisdom_lead_submissions";

export function LeadMagnetModal({
  isOpen,
  onClose,
  lang,
  giftTitle,
  giftDescription,
  downloadUrl,
  formEndpoint,
  emailSubject,
  emailMessage,
}: LeadMagnetModalProps) {
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen && !hasOpenedBefore) {
      setHasOpenedBefore(true);
      // Check if user already submitted (for returning visitors)
      const existingSubmission = localStorage.getItem(STORAGE_KEY);
      if (existingSubmission) {
        setIsSubmitted(true);
      }
    }
    // Reset form when modal is closed and reopened
    if (!isOpen) {
      setFormData({ name: "", phone: "", email: "" });
      setError(null);
      setIsSubmitting(false);
    }
  }, [isOpen, hasOpenedBefore]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError(lang === "ar" ? "يرجى ملء جميع الحقول" : "Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(lang === "ar" ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Use provided endpoint or fall back to env var
      const endpoint = formEndpoint || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            gift: giftTitle,
            lang,
            _host: window.location.hostname,
            _next: window.location.href,
            _subject: emailSubject || `Gate of Wisdom - ${giftTitle} Download`,
          }),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }
      }

      // Save to localStorage to prevent duplicate submissions
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          gift: giftTitle,
        })
      );

      setIsSubmitted(true);
    } catch (err) {
      setError(
        lang === "ar"
          ? "حدث خطأ، يرجى المحاولة مرة أخرى"
          : "An error occurred, please try again"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
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
          onClick={onClose}
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
            {giftTitle}
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {!isSubmitted ? (
            <>
              <p className="text-muted-foreground text-center mb-6">
                {giftDescription}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor={`name-${lang}`}
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    {lang === "ar" ? "الاسم الكامل" : "Full Name"}
                  </label>
                  <div className={cn(
                    "relative",
                    lang === "ar" ? "flex flex-row-reverse" : ""
                  )}>
                    <User className={cn(
                      "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                      lang === "ar" ? "end-3" : "start-3"
                    )} />
                    <input
                      id={`name-${lang}`}
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                        lang === "ar" ? "pe-10 text-right" : "ps-10"
                      )}
                      placeholder={
                        lang === "ar" ? "أدخل اسمك" : "Enter your name"
                      }
                      disabled={isSubmitting}
                      dir={lang === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={`email-${lang}`}
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    {lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <div className={cn(
                    "relative",
                    lang === "ar" ? "flex flex-row-reverse" : ""
                  )}>
                    <Mail className={cn(
                      "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                      lang === "ar" ? "end-3" : "start-3"
                    )} />
                    <input
                      id={`email-${lang}`}
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                        lang === "ar" ? "pe-10 text-right" : "ps-10"
                      )}
                      placeholder={
                        lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"
                      }
                      disabled={isSubmitting}
                      dir={lang === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={`phone-${lang}`}
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <div className={cn(
                    "relative",
                    lang === "ar" ? "flex flex-row-reverse" : ""
                  )}>
                    <Phone className={cn(
                      "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                      lang === "ar" ? "end-3" : "start-3"
                    )} />
                    <input
                      id={`phone-${lang}`}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50",
                        lang === "ar" ? "pe-10 text-right" : "ps-10"
                      )}
                      placeholder={
                        lang === "ar" ? "أدخل رقم هاتفك" : "Enter your phone"
                      }
                      disabled={isSubmitting}
                      dir={lang === "ar" ? "rtl" : "ltr"}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-destructive text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                    isSubmitting && "animate-pulse"
                  )}
                >
                  {isSubmitting ? (
                    lang === "ar" ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <span>Submitting...</span>
                    )
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      {lang === "ar" ? "احصل على الهدية الآن" : "Get the Gift Now"}
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  {lang === "ar"
                    ? "بمجرد تعبئة النموذج، سيتم فتح رابط التحميل فوراً"
                    : "Once you submit the form, the download link will open immediately"}
                </p>
              </form>
            </>
          ) : (
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
                <h3 className="text-xl font-bold text-foreground">
                  <BoldText text={lang === "ar"
                    ? "شكراً لاهتمامك بالرؤى الهندسية والاستشارية من **بوابة الحكمة**!"
                    : "Thank You for Your Interest in Engineering & Consulting Insights from Gate of Wisdom!"
                  } />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {lang === "ar"
                    ? "نأمل أن تكون هذه المادة بمثابة الأداة الفورية التي تحتاجها لبدء رحلتك نحو الكفاءة والنمو."
                    : "We hope this material serves as the immediate tool you need to start your journey toward efficiency and growth."
                  }
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Download className="h-5 w-5" />
                {lang === "ar" ? "حمّل الآن" : "Download Now"}
              </button>

              <button
                onClick={onClose}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {lang === "ar" ? "إغلاق" : "Close"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
