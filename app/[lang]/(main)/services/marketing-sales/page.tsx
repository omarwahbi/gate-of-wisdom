import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lightbulb, AlertTriangle, Users, Target, BookOpen, Download } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";

interface MarketingSalesPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("marketing_sales", lang as "en" | "ar", "services/marketing-sales");
}

export default async function MarketingSalesPage(props: MarketingSalesPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { marketing_and_sales } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader
        title={marketing_and_sales.hero.title}
        description={marketing_and_sales.hero.subtitle}
        bgImageUrl="/images/services/marketing-sales.jpg"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {marketing_and_sales.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <BoldText text={p} />
            </p>
          ))}

          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">{marketing_and_sales.intro.services_intro}</h3>
            <ul className="space-y-4">
              {marketing_and_sales.intro.services.map((svc: any, idx: number) => (
                <li key={idx} className="flex flex-col md:flex-row md:items-start gap-4 p-4 rounded-xl bg-card border shadow-sm">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{svc.title}</h4>
                    <p className="text-muted-foreground mt-1">{svc.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Target Audience */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-start">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">{marketing_and_sales.target_audience.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">{marketing_and_sales.target_audience.title}</h2>
            <p className="text-lg text-muted-foreground"><BoldText text={marketing_and_sales.target_audience.intro} /></p>
            <p className="text-lg font-medium text-foreground mt-4"><BoldText text={marketing_and_sales.target_audience.ideal_audience_intro} /></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketing_and_sales.target_audience.audiences.map((aud: any, idx: number) => (
              <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
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

          {/* CTA */}
          {/* <div className="max-w-3xl mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {lang === 'ar'
                ? "دعونا نساعدكم على إعادة رسم مسار شركتكم نحو ريادة السوق وتحقيق أهداف المبيعات المستهدفة. تواصلوا معنا اليوم لمناقشة كيف يمكننا تحويل أساليب التسويق والمبيعات لديكم إلى محرك أساسي للنمو."
                : "Let us help you redraw your company's path toward market leadership and achieve targeted sales objectives. Contact us today to discuss how we can transform your marketing and sales approaches into a key engine for growth."
              }
            </p>
          </div> */}
        </div>
      </section>

      {/* 4. Case Studies - Real World Stories */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 end-0 -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{marketing_and_sales.cases.title}</h2>
            <p className="text-xl opacity-90">{marketing_and_sales.cases.subtitle}</p>
          </div>

          <div className="space-y-8">
            {marketing_and_sales.cases.items.map((cs: any, idx: number) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">{cs.title}</h3>
                <h4 className="text-lg opacity-90 mb-6">{cs.subtitle}</h4>

                <div className="mb-6">
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span className="opacity-80 uppercase tracking-wider text-xs">
                      {lang === 'ar' ? 'الحالة' : 'The Situation'}
                    </span>
                  </p>
                  <p className="text-lg leading-relaxed">{cs.issue}</p>

                  {cs.analysis && (
                    <ul className="mt-4 space-y-2 list-disc ps-6">
                      {cs.analysis.map((an: string, i: number) => (
                        <li key={i} className="opacity-90">{an}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="bg-primary-foreground text-primary rounded-xl p-6 mt-6 flex gap-4">
                  <Lightbulb className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1 text-sm uppercase tracking-wide">
                      {lang === 'ar' ? 'الدرس المستفاد' : 'The Lesson'}
                    </strong>
                    <p className="text-lg font-medium leading-relaxed">{cs.lesson}</p>
                  </div>
                </div>

                {/* Sources */}
                {cs.sources && (
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h5 className="font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider opacity-80">
                      <BookOpen className="h-4 w-4" />
                      {lang === 'ar' ? 'المصادر' : 'Sources'}
                    </h5>
                    <ul className="space-y-2 text-sm opacity-90">
                      {cs.sources.map((source: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-foreground flex-shrink-0" />
                          <span>{source}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Additional Case Studies - From Insight to Impact */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {lang === 'ar'
                ? "من الفكرة إلى الأثر: دراسات حالة تجسد حلولنا في مواجهة تحديات الميدان"
                : "From Insight to Impact: Case Studies Embodying Our Solutions Against Real-World Challenges"
              }
            </h2>
          </div>

          <div className="space-y-8">
            {marketing_and_sales.additional_cases?.map((cs: any, idx: number) => (
              <div key={idx} className="rounded-2xl p-8 border bg-card shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{cs.title}</h3>
                <h4 className="text-lg text-muted-foreground mb-6">{cs.subtitle}</h4>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2 text-primary uppercase tracking-wider text-xs">
                      {lang === 'ar' ? 'الحالة' : 'The Case'}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{cs.case}</p>
                  </div>

                  {cs.failure_points && (
                    <div>
                      <p className="font-semibold mb-2 text-primary uppercase tracking-wider text-xs">
                        {lang === 'ar' ? 'الفشل' : 'The Failure'}
                      </p>
                      <ul className="space-y-2 list-disc ps-6">
                        {cs.failure_points.map((point: string, i: number) => (
                          <li key={i} className="text-muted-foreground leading-relaxed">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-muted rounded-xl p-6 mt-4">
                    <p className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      {lang === 'ar' ? 'الخلاصة' : 'The Summary'}
                    </p>
                    <p className="text-foreground leading-relaxed">{cs.summary}</p>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-4">
                    <strong className="block mb-2 text-primary font-bold">
                      {lang === 'ar' ? 'الدرس المستفاد' : 'The Lesson'}
                    </strong>
                    <p className="text-foreground leading-relaxed">{cs.lesson}</p>
                  </div>
                </div>

                {/* Sources */}
                {cs.sources && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h5 className="font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      {lang === 'ar' ? 'المصادر' : 'Sources'}
                    </h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {cs.sources.map((source: any, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span><strong className="text-foreground">{source.name}:</strong> {source.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "Marketing & Sales Growth Checklist",
          ar: "قائمة تدقيق نمو المبيعات والتسويق"
        }}
        giftDescription={{
          en: "Get Your Marketing & Sales Growth Checklist.",
          ar: "احصل على قائمة تدقيق نمو المبيعات والتسويق."
        }}
        downloadUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/services-gifts/06-marketing-sales-checklist.pdf`}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - Marketing & Sales Growth Checklist",
          ar: "بوابة الحكمة - قائمة تدقيق نمو المبيعات والتسويق"
        }}
        emailMessage={{
          en: "Thank you for downloading the Marketing & Sales Growth Checklist. Please find the attachment below.",
          ar: "شكراً لتحميلك قائمة تدقيق نمو المبيعات والتسويق. تجد المرفق أدناه."
        }}
      />
    </main>
  );
}
