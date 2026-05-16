import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Briefcase, Lightbulb, Activity, Layers, Goal, Rocket, Users, Target, AlertTriangle } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function MarketStudiesPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { market_studies } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader 
        title={market_studies.hero.title}
        description={market_studies.hero.subtitle}
        bgImageUrl="/images/services/market-studies.jpg"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {market_studies.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <BoldText text={p} />
            </p>
          ))}
          
          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">{market_studies.intro.services_intro}</h3>
            <ul className="space-y-4">
              {market_studies.intro.services.map((svc: any, idx: number) => (
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
            {market_studies.target_audience.subtitle && (
              <span className="text-sm font-semibold uppercase tracking-wider text-primary block">{market_studies.target_audience.subtitle}</span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">{market_studies.target_audience.title}</h2>
            <p className="text-lg text-muted-foreground">{market_studies.target_audience.intro}</p>
            <p className="text-lg font-medium text-foreground mt-4">{market_studies.target_audience.ideal_audience_intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {market_studies.target_audience.audiences.map((aud: any, idx: number) => (
              <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
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

      {/* 4. Case Studies */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 end-0 -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{market_studies.cases.title}</h2>
            <p className="text-xl opacity-90">{market_studies.cases.subtitle}</p>
          </div>

          <div className="space-y-8">
            {market_studies.cases.items.map((cs: any, idx: number) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">{cs.title}</h3>
                <h4 className="text-lg opacity-90 mb-6">{cs.subtitle}</h4>
                
                <div className="mb-6">
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span className="opacity-80 uppercase tracking-wider text-xs">{lang === 'ar' ? 'المشكلة / الحالة' : 'Issue / Situation'}</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Market Entry Guide */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{market_studies.market_entry_guide.title}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {market_studies.market_entry_guide.phases.map((phase: any, idx: number) => (
              <Card key={idx} className="border-border flex flex-col h-full bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                      {idx + 1}
                    </span>
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-5">
                    {phase.points.map((pt: any, i: number) => (
                      <li key={i} className="flex gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-foreground text-base mb-1">{pt.title}</strong>
                          <span className="text-muted-foreground text-sm leading-relaxed block">{pt.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "Market Entry Strategy Checklist",
          ar: "قائمة تدقيق استراتيجية دخول السوق"
        }}
        giftDescription={{
          en: "Get Your Market Entry Strategy Checklist.",
          ar: "احصل على قائمة تدقيق استراتيجية دخول السوق."
        }}
        downloadUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/services-gifts/02-market-research-checklist.pdf`}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - Market Entry Strategy Checklist",
          ar: "بوابة الحكمة - قائمة تدقيق استراتيجية دخول السوق"
        }}
        emailMessage={{
          en: "Thank you for downloading the Market Entry Strategy Checklist. Please find the attachment below.",
          ar: "شكراً لتحميلك قائمة تدقيق استراتيجية دخول السوق. تجد المرفق أدناه."
        }}
      />

      {/* 7. Final Call to Action */}
      <section className="bg-background py-16 md:py-24 border-t flex items-center">
        <div className="container mx-auto px-4 text-center max-w-3xl bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{market_studies.cta.title}</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {market_studies.cta.description}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-white text-primary hover:bg-gray-100 text-lg py-4 px-10 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              {market_studies.cta.button}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
