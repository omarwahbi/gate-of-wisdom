"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lightbulb, AlertTriangle, Users, BookOpen, ChartBar } from "lucide-react";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";

interface FeasibilityStudiesContentProps {
  lang: "en" | "ar";
  serviceData: any;
}

export default function FeasibilityStudiesContent({ lang, serviceData }: FeasibilityStudiesContentProps) {
  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader
        title={serviceData.hero.title}
        description={serviceData.hero.subtitle}
        bgImageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-12 text-start">
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

      {/* 5. The Informed Investor's Guide */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.investor_guide.title}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.investor_guide.phases.map((phase: any, idx: number) => (
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

      {/* 6. Cautionary Tales */}
      <section className="bg-background py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.cautionary_tales.title}</h2>
            <p className="text-xl text-muted-foreground">{serviceData.cautionary_tales.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.cautionary_tales.tales.map((tale: any, idx: number) => (
              <Card key={idx} className="border-red-500/20 shadow-none hover:border-red-500 bg-red-500/5 transition-colors text-start">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600 flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    {tale.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <strong className="text-foreground block mb-1">Scenario / السيناريو</strong>
                    <p className="text-muted-foreground">{tale.scenario}</p>
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Hidden Risk / المخاطرة الخفية</strong>
                    <p className="text-muted-foreground">{tale.hidden_risk}</p>
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">Result / النتيجة</strong>
                    <p className="text-muted-foreground">{tale.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gift / Lead Magnet Section */}
      <ServiceGiftSection
        lang={lang}
        giftTitle={{
          en: "Project Launch Readiness Checklist",
          ar: "قائمة تدقيق جاهزية إطلاق المشروع"
        }}
        giftDescription={{
          en: "Get Your Project Launch Readiness Checklist.",
          ar: "احصل على قائمة تدقيق جاهزية إطلاق المشروع."
        }}
        useEnvEndpoint={true}
        emailSubject={{
          en: "Gate of Wisdom - Project Launch Readiness Checklist",
          ar: "بوابة الحكمة - قائمة تدقيق جاهزية إطلاق المشروع"
        }}
        emailMessage={{
          en: "Thank you for downloading the Project Launch Readiness Checklist. Please find the attachment below.",
          ar: "شكراً لتحميلك قائمة تدقيق جاهزية إطلاق المشروع. تجد المرفق أدناه."
        }}
      />

      {/* 8. Lessons from Failure */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.lessons.title}</h2>
            <p className="text-xl text-muted-foreground">{serviceData.lessons.subtitle}</p>
          </div>
          <div className="space-y-6">
            {serviceData.lessons.items.map((lesson: any, i: number) => (
              <div key={i} className="flex gap-4 p-6 bg-card border rounded-2xl shadow-sm text-start">
                <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">{lesson.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{lesson.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="bg-background py-16 md:py-24 border-t">
        <div className="container mx-auto px-4 text-center max-w-3xl bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{serviceData.cta.title}</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {serviceData.cta.description}
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 text-lg py-4 px-10 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-md">
              {serviceData.cta.button}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
