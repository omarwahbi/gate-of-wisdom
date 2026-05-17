import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Target, PieChart, Coins, Briefcase, Landmark, ExternalLink, ShieldCheck, Download, BarChart, Database, Target as TargetIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";
import { FinalCTA } from "@/components/FinalCTA";

interface EconomicInsightsProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("economic_insights", lang as "en" | "ar", "bi-center/economic-insights");
}

export default async function EconomicInsightsPage(props: EconomicInsightsProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { economic_insights: pageData } = dictionary;
  const schemas = getPageJsonLd("economic_insights", lang, "bi-center/economic-insights");

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      <JsonLd schemas={schemas} />
      {/* 1. Hero Section */}
      <PageHeader
        title={pageData.hero.title}
        description={pageData.hero.subtitle}
        bgImageUrl="/images/bi-center/economic-insights.jpg"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6 max-w-4xl text-start">
            {pageData.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                <BoldText text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Axes (Analysis Pillars) */}
      <section className="bg-muted py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{pageData.intro.axes_title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageData.intro.axes.map((axis: any, i: number) => {
              const axisIcons = [PieChart, Landmark, Briefcase, Coins];
              const Icon = axisIcons[i] || LineChart;
              return (
                <div key={i} className="bg-card p-8 rounded-2xl border flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 end-0 p-6 opacity-3 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-40 h-40" />
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center relative z-10">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="relative z-10 mt-2">
                    <strong className="block text-2xl font-bold text-foreground mb-3">{axis.title}</strong>
                    <p className="text-muted-foreground leading-relaxed">{axis.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Target Audience */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-start">
            {pageData.target_audience.subtitle && (
              <span className="text-sm font-semibold uppercase tracking-wider text-primary block">{pageData.target_audience.subtitle}</span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">{pageData.target_audience.title}</h2>
            <p className="text-lg text-muted-foreground mb-4">{pageData.target_audience.intro}</p>
            <p className="text-lg font-medium text-foreground">{pageData.target_audience.ideal_audience_intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.target_audience.audiences.map((aud: any, idx: number) => (
              <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary flex-shrink-0" />
                    {aud.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {aud.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Data Hub Free Materials */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Database className="h-4 w-4" /> {lang === 'ar' ? 'مركز البيانات' : 'BI DATA CENTER'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{pageData.free_materials.title}</h2>
            <p className="text-xl opacity-90">{pageData.free_materials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.free_materials.items.map((item: any, i: number) => {
              const repIcons = [BarChart, Database, TargetIcon, Briefcase];
              const Icon = repIcons[i] || Download;

              return (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors shadow-lg">
                  <div className="h-12 w-12 rounded-xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <strong className="block text-xl font-bold mb-4 leading-tight">{item.title}</strong>
                  <div className="flex-1 space-y-3">
                    {item.details.map((det: string, idx: number) => (
                      <p key={idx} className="opacity-90 leading-relaxed text-sm">
                        {det}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Related Links */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">{pageData.related_links.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {pageData.related_links.links.map((link: any, i: number) => (
              <Link key={i} href={link.href} className="inline-flex items-center bg-card border border-border px-6 py-4 rounded-xl font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm gap-3">
                <ExternalLink className="w-4 h-4" />
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "Economic Performance Table",
          ar: "جدول الأداء الاقتصادي"
        }}
        giftDescription={{
          en: "Get Your Economic Performance Table.",
          ar: "احصل على جدول الأداء الاقتصادي."
        }}
        downloadUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/bi-center-gifts/01-economic-performance-table.pdf`}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - Economic Performance Table",
          ar: "بوابة الحكمة - جدول الأداء الاقتصادي"
        }}
        emailMessage={{
          en: "Thank you for downloading the Economic Performance Table. Please find the attachment below.",
          ar: "شكراً لتحميلك جدول الأداء الاقتصادي. تجد المرفق أدناه."
        }}
      />

      {/* 8. Final Call to Action */}
      <FinalCTA lang={lang} title={pageData.cta.title} description={pageData.cta.description} buttonLabel={pageData.cta.button} />

    </main>
  );
}
