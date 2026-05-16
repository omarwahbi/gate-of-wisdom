import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lightbulb, AlertTriangle, Users, BookOpen, CloudDownload, FileText, Target, HelpCircle, Briefcase, Building } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function HumanResourcesPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { human_resources: serviceData } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader 
        title={serviceData.hero.title}
        description={serviceData.hero.subtitle}
        bgImageUrl="/images/services/human-resources.jpg"
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
                    <Users className="h-5 w-5" />
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

      {/* 4. Real-World Case Studies */}
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
                    <strong className="block mb-1 text-sm uppercase tracking-wide">{lang === 'ar' ? 'الدرس المستفاد' : 'The Lesson'}</strong>
                    <p className="text-lg font-medium leading-relaxed">{cs.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Institutional Building Guide */}
      <section className="bg-muted py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{serviceData.building_guide.title}</h2>
            <p className="text-xl text-muted-foreground">{serviceData.building_guide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.building_guide.phases.map((phase: any, idx: number) => (
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

      {/* 6. Chaos Diagnosis (Warning Signs) */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{serviceData.chaos_diagnosis.title}</h2>
             <p className="text-xl text-muted-foreground">{serviceData.chaos_diagnosis.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.chaos_diagnosis.signs.map((sign: any, i: number) => (
              <Card key={i} className="border-red-500/20 shadow-sm bg-card hover:bg-red-500/5 transition-colors">
                <CardHeader className="pb-3 flex flex-row items-start gap-4 space-y-0">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">{sign.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="ps-[3.25rem]">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {sign.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HR Toolkit */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 max-w-3xl">
             <div className="flex items-center gap-3 mb-4">
                <CloudDownload className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{serviceData.hr_toolkit.title}</h2>
             </div>
             <p className="text-xl text-muted-foreground">{serviceData.hr_toolkit.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.hr_toolkit.tools.map((tool: any, idx: number) => (
              <div key={idx} className="bg-secondary/40 rounded-2xl p-6 border border-border flex flex-col items-start h-full">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                   <FileText className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-foreground mb-4">{tool.title}</h3>
                 
                 <div className="space-y-4 flex-1 w-full text-sm">
                   <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
                      <strong className="block text-primary mb-1 uppercase tracking-wider text-xs">{lang === 'ar' ? 'الفائدة' : 'Benefit'}</strong>
                      <p className="text-muted-foreground leading-relaxed">{tool.benefit}</p>
                   </div>
                   <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
                      <strong className="block text-primary mb-1 uppercase tracking-wider text-xs">{lang === 'ar' ? 'المحتوى' : 'Included'}</strong>
                      <p className="text-muted-foreground leading-relaxed">{tool.included}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Interview Questions */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center gap-3">
               <HelpCircle className="w-8 h-8 text-primary" />
               {serviceData.interview_questions.title}
             </h2>
          </div>

          <div className="space-y-6">
            {serviceData.interview_questions.questions.map((q: any, i: number) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-card border rounded-2xl shadow-sm text-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {i + 1}
                </div>
                <div className="space-y-3 flex-1">
                  <h4 className="text-xl font-semibold text-foreground leading-relaxed">"{q.q}"</h4>
                  <div className="flex items-start gap-2 bg-secondary/30 p-3 rounded-lg border">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">{lang === 'ar' ? 'الهدف:' : 'Objective:'}</strong> {q.aim}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Secondary Case Study (Iraq Unemployment) */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-primary/20">
              <Building className="w-10 h-10 text-primary flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {serviceData.unemployment_case.title}
              </h2>
            </div>
            
            <div className="space-y-8">
              {serviceData.unemployment_case.content.map((item: any, i: number) => (
                <div key={i}>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {item.heading}
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed border-s-4 border-primary/30 ps-4 py-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "HR Management Best Practices Guide",
          ar: "دليل أفضل ممارسات إدارة الموارد البشرية"
        }}
        giftDescription={{
          en: "Get Your HR Management Best Practices Guide.",
          ar: "احصل على دليل أفضل ممارسات إدارة الموارد البشرية."
        }}
        downloadUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_URL}/files/services-gifts/05-hr-system-checklist.pdf`}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - HR Management Best Practices Guide",
          ar: "بوابة الحكمة - دليل أفضل ممارسات إدارة الموارد البشرية"
        }}
        emailMessage={{
          en: "Thank you for downloading the HR Management Best Practices Guide. Please find the attachment below.",
          ar: "شكراً لتحميلك دليل أفضل ممارسات إدارة الموارد البشرية. تجد المرفق أدناه."
        }}
      />

      {/* 11. Final Call to Action */}
      <section className="bg-background py-16 md:py-24 flex items-center">
        <div className="container mx-auto px-4 text-center max-w-3xl bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{serviceData.cta.title}</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {serviceData.cta.description}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-white text-primary hover:bg-gray-100 text-lg py-4 px-10 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              {serviceData.cta.button}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
