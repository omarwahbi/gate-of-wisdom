"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, User, Loader2 } from "lucide-react";
import { BoldText } from "@/components/BoldText";

interface ContactPageProps {
  lang: "en" | "ar";
  pageData: any;
  footer: any;
}

export function ContactPageContent({ lang, pageData, footer }: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORMSPREE_ENDPOINT!, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          ...Object.fromEntries(
            Object.entries({
              name: data.name as string,
              email: data.email as string,
              phone: data.phone as string,
              company: data.company as string,
              service: data.service as string,
              message: data.message as string,
              lang,
            }).filter(([_, v]) => v && v.trim() !== "")
          ),
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

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

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader
        title={pageData.hero.title}
        description={pageData.hero.description}
        bgImageUrl="/images/contact/contact-hero.jpg"
      />

      {/* 2. Contact Form & Info */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form / Success */}
            <div>
              {isSubmitted ? (
                <div className="text-center space-y-6 pt-8">
                  <div className="relative inline-block mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping" />
                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {lang === "ar" ? "شكراً لتواصلك معنا!" : "Thank You for Contacting Us!"}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {lang === "ar"
                      ? "تم استلام رسالتك وسيتواصل معك فريقنا خلال 24 ساعة عمل"
                      : "Your message has been received and our team will contact you within 24 business hours"
                    }
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg">
                    {lang === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
                  </Button>
                </div>
              ) : (
              <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {pageData.form.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {pageData.form.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      {pageData.form.labels.name} <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 -translate-y-1/2 start-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        className="w-full ps-10 pe-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={pageData.form.placeholders.name}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      {pageData.form.labels.phone} <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-1/2 -translate-y-1/2 start-3 h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        className="w-full ps-10 pe-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={pageData.form.placeholders.phone}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {pageData.form.labels.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 -translate-y-1/2 start-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      className="w-full ps-10 pe-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={pageData.form.placeholders.email}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {lang === 'ar' ? "اسم الشركة / المؤسسة" : "Company / Organization"}
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={lang === 'ar' ? "أدخل اسم الشركة" : "Enter your company name"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {pageData.form.labels.service} <span className="text-destructive">*</span>
                  </label>
                  <select name="service" required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">
                      {pageData.form.placeholders.service}
                    </option>
                    <option value="project-management">
                      {lang === 'ar' ? "إدارة المشاريع" : "Project Management"}
                    </option>
                    <option value="market-studies">
                      {lang === 'ar' ? "دراسات السوق" : "Market Studies"}
                    </option>
                    <option value="feasibility-studies">
                      {lang === 'ar' ? "دراسات الجدوى" : "Feasibility Studies"}
                    </option>
                    <option value="performance-efficiency">
                      {lang === 'ar' ? "كفاءة الأداء" : "Performance Efficiency"}
                    </option>
                    <option value="human-resources">
                      {lang === 'ar' ? "الموارد البشرية" : "Human Resources"}
                    </option>
                    <option value="marketing-sales">
                      {lang === 'ar' ? "التسويق والمبيعات" : "Marketing & Sales"}
                    </option>
                    <option value="crm">
                      {lang === 'ar' ? "إدارة علاقات العملاء" : "CRM"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {pageData.form.labels.message} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder={pageData.form.placeholders.message}
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {lang === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {pageData.form.submit}
                    </>
                  )}
                </Button>
              </form>
              </>
              )}
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {pageData.info.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {pageData.info.subtitle}
              </p>

              {/* Address Card */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{pageData.info.address_label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed whitespace-pre-line" dir={lang === "ar" ? "rtl" : "ltr"}>
                    {footer.contact.address}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{pageData.info.phone_label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    <a href={`tel:${footer.contact.phone}`} className="text-primary hover:underline font-medium" dir="ltr">
                      {footer.contact.phone}
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{pageData.info.email_label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    <a href={`mailto:${footer.contact.email}`} className="text-primary hover:underline font-medium">
                      {footer.contact.email}
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{pageData.info.hours_label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {pageData.info.hours_value}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{pageData.info.follow_label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/_gateofwisdom/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/gateofwisdom/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
