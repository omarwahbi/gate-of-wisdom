"use client";

import { useState } from "react";
import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, User, CheckCircle2, Loader2 } from "lucide-react";
import { BoldText } from "@/components/BoldText";

interface ContactPageProps {
  lang: "en" | "ar";
  dictionary: any;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdwppgn";

export function ContactPageContent({ lang, dictionary }: ContactPageProps) {
  const { contact_page: pageData, footer } = dictionary;
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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: data.name as string,
          email: data.email as string || "Not provided",
          phone: data.phone as string,
          company: data.company as string || "Not provided",
          service: data.service as string || "Not specified",
          message: data.message as string || "No message",
          lang,
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

  if (isSubmitted) {
    return (
      <main className="flex min-h-screen flex-col w-full text-start">
        <PageHeader
          title={pageData.hero.title}
          description={pageData.hero.description}
          bgImageUrl="/images/contact/contact-hero.jpg"
        />
        <section className="bg-background py-16 md:py-24 flex-1 flex items-center">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
              <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary to-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-primary/30">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {lang === "ar" ? "شكراً لتواصلك معنا!" : "Thank You for Contacting Us!"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {lang === "ar"
                ? "تم استلام رسالتك وسيتواصل معك فريقنا خلال 24 ساعة عمل"
                : "Your message has been received and our team will contact you within 24 business hours"
              }
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg">
              {lang === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
            </Button>
          </div>
        </section>
      </main>
    );
  }

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
            {/* Contact Form */}
            <div>
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
                    {pageData.form.labels.service}
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
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
                    {pageData.form.labels.message}
                  </label>
                  <textarea
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
                  <CardDescription className="text-base leading-relaxed">
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
                    <a href={`tel:${footer.contact.phone}`} className="text-primary hover:underline font-medium">
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
                    <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Thank You / CTA Section */}
      {/* <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <BoldText text={lang === 'ar'
                ? "شكراً لاهتمامك بالرؤى الهندسية والاستشارية من **بوابة الحكمة**!"
                : "Thank You for Your Interest in Engineering & Consulting Insights from Gate of Wisdom!"
              } />
            </h2>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {lang === 'ar'
                  ? "نأمل أن تكون هذه المواد بمثابة الأدوات الفورية التي تحتاجها لبدء رحلتك نحو الكفاءة والنمو."
                  : "We hope these materials serve as the immediate tools you need to start your journey toward efficiency and growth."
                }
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium text-foreground">
                {lang === 'ar'
                  ? "تواصل مع خبرائنا لمناقشة كيف يمكن لهذه الدروس أن تؤثر على استراتيجياتكم الاستثمارية"
                  : "Connect with Our Experts to Discuss How These Lessons Impact Your Investment Strategy"
                }
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  {lang === 'ar' ? 'اكتب لنا' : 'Write Us'}
                </button>
                <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors">
                  {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </button>
                <a
                  href={`/${lang}/services`}
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors"
                >
                  {lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                </a>
              </div>

              <div className="pt-6 border-t border-border mt-8">
                <a
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                >
                  {lang === 'ar' ? 'احجز استشارة أولية مجانية' : 'Book a Free Initial Consultation'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default async function ContactPage(props: { params: Promise<{ lang: "en" | "ar" }> }) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return <ContactPageContent lang={lang} dictionary={dictionary} />;
}
