import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lightbulb, AlertTriangle, Users, BookOpen, ChartBar, Briefcase, Factory } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";
import { FinalCTA } from "@/components/FinalCTA";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function PerformanceEfficiencyPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { performance_efficiency: serviceData } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader 
        title={serviceData.hero.title}
        description={serviceData.hero.subtitle}
        bgImageUrl="/images/services/performance-efficiency.jpg"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {serviceData.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <BoldText text={p} />
            </p>
          ))}
          
          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">{serviceData.intro.services_intro}</h3>
            <ul className="space-y-4">
              {serviceData.intro.services.map((svc: any, idx: number) => (
                <li key={idx} className="flex flex-col md:flex-row md:items-start gap-4 p-4 rounded-xl bg-card border shadow-sm">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ChartBar className="h-5 w-5" />
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
            {serviceData.target_audience.subtitle && (
              <span className="text-sm font-semibold uppercase tracking-wider text-primary block">{serviceData.target_audience.subtitle}</span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">{serviceData.target_audience.title}</h2>
            <p className="text-lg text-muted-foreground">{serviceData.target_audience.intro}</p>
            <p className="text-lg font-medium text-foreground mt-4">{serviceData.target_audience.ideal_audience_intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.target_audience.audiences.map((aud: any, idx: number) => (
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
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.cases.title}</h2>
            <p className="text-xl opacity-90">{serviceData.cases.subtitle}</p>
          </div>

          <div className="space-y-8">
            {serviceData.cases.items.map((cs: any, idx: number) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">{cs.title}</h3>
                <h4 className="text-lg opacity-90 mb-6">{cs.subtitle}</h4>
                
                <div className="mb-6">
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span className="opacity-80 uppercase tracking-wider text-xs">{lang === 'ar' ? 'الحالة / المشكلة' : 'Situation / Issue'}</span>
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

                <div className="bg-primary-foreground text-primary rounded-xl p-6 mt-6 flex gap-4 w-full text-start items-start">
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

      {/* 5. Diagnosis Guide */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.diagnosis_guide.title}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.diagnosis_guide.phases.map((phase: any, idx: number) => (
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

      {/* 6. Lessons from Failure */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{serviceData.lessons.title}</h2>
             <p className="text-xl text-muted-foreground">{serviceData.lessons.subtitle}</p>
          </div>
          <div className="space-y-6">
            {serviceData.lessons.items.map((lesson: any, i: number) => (
              <div key={i} className="flex gap-4 p-6 bg-card border rounded-2xl shadow-sm text-start border-red-500/20">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{lesson.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{lesson.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Precise Diagnosis (10 Hidden Reasons) */}
      <section className="bg-background py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{serviceData.precise_diagnosis.title}</h2>
            <p className="text-xl text-muted-foreground">{serviceData.precise_diagnosis.subtitle}</p>
          </div>
          
          <div className="space-y-16">
            {serviceData.precise_diagnosis.sectors.map((sector: any, sIdx: number) => (
              <div key={sIdx}>
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                  {sIdx === 0 ? <Factory className="w-8 h-8 text-primary" /> : <Briefcase className="w-8 h-8 text-primary" />}
                  <h3 className="text-2xl md:text-3xl font-bold">{sector.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sector.points.map((pt: any, i: number) => (
                    <Card key={i} className="border-border shadow-none hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex gap-3 text-foreground">
                           <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                             {i + 1}
                           </span>
                           {pt.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed ps-9">{pt.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "Performance Efficiency Assessment Checklist",
          ar: "قائمة تدقيق تقييم كفاءة الأداء"
        }}
        giftDescription={{
          en: "Get Your Performance Efficiency Assessment Checklist.",
          ar: "احصل على قائمة تدقيق تقييم كفاءة الأداء."
        }}
        downloadUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/services-gifts/04-performance-efficiency-evaluation-checklist.pdf`}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - Performance Efficiency Assessment Checklist",
          ar: "بوابة الحكمة - قائمة تدقيق تقييم كفاءة الأداء"
        }}
        emailMessage={{
          en: "Thank you for downloading the Performance Efficiency Assessment Checklist. Please find the attachment below.",
          ar: "شكراً لتحميلك قائمة تدقيق تقييم كفاءة الأداء. تجد المرفق أدناه."
        }}
      />

      {/* 9. Final Call to Action */}
      <FinalCTA lang={lang} title={serviceData.cta.title} description={serviceData.cta.description} buttonLabel={serviceData.cta.button} />
    </main>
  );
}
