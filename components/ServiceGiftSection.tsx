"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { LeadMagnetModal } from "@/components/LeadMagnetModal";
import { BoldText } from "@/components/BoldText";

interface ServiceGiftSectionProps {
  lang: "en" | "ar";
  giftTitle: {
    en: string;
    ar: string;
  };
  giftDescription: {
    en: string;
    ar: string;
  };
  downloadUrl?: string;
  formEndpoint?: string;
  useEnvEndpoint?: boolean; // If true, uses NEXT_PUBLIC_FORMSPREE_ENDPOINT from env
  emailSubject?: {
    en: string;
    ar: string;
  };
  emailMessage?: {
    en: string;
    ar: string;
  };
}

export function ServiceGiftSection({
  lang,
  giftTitle,
  giftDescription,
  downloadUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL || "#",
  formEndpoint,
  emailSubject,
  emailMessage,
  useEnvEndpoint = true,
}: ServiceGiftSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use env var endpoint if enabled
  const endpoint = useEnvEndpoint ? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT : formEndpoint;

  return (
    <>
      {/* Gift / Lead Magnet Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {lang === "ar"
                ? "امتلك أدوات النجاح الآن"
                : "Master the Tools of Success Today"
              }
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <BoldText text={lang === "ar"
                ? `حمّل "هدية **بوابة الحكمة**" الحصرية المجانية القابلة للتنزيل الآن. ${giftDescription.ar}`
                : `Download Your Exclusive, Free "Gate of Wisdom" Gift Now. ${giftDescription.en}`
              } />
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              <Download className="h-5 w-5" />
              {lang === "ar" ? "احصل على الهدية الآن" : "Get the Gift Now"}
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        giftTitle={lang === "ar" ? giftTitle.ar : giftTitle.en}
        giftDescription={lang === "ar" ? giftDescription.ar : giftDescription.en}
        downloadUrl={downloadUrl}
        formEndpoint={endpoint}
        emailSubject={lang === "ar" ? emailSubject?.ar : emailSubject?.en}
        emailMessage={lang === "ar" ? emailMessage?.ar : emailMessage?.en}
      />
    </>
  );
}
