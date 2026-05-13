"use client";

import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Briefcase, Lightbulb, Activity, Layers, Goal, Rocket, Users, Target, AlertTriangle, BookOpen, BarChart, Globe, Download } from "lucide-react";
import Link from "next/link";
import { BoldText } from "@/components/BoldText";
import { ServiceGiftSection } from "@/components/ServiceGiftSection";

interface ProjectManagementContentProps {
  lang: "en" | "ar";
  dictionary: any;
}

export default function ProjectManagementContent({ lang, dictionary }: ProjectManagementContentProps) {
  const { project_management } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader
        title={project_management.hero.title}
        description={project_management.hero.subtitle}
        bgImageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {project_management.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <BoldText text={p} />
            </p>
          ))}

          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">{project_management.intro.services_intro}</h3>
            <ul className="space-y-4">
              {project_management.intro.services.map((svc: any, idx: number) => (
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
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">{project_management.target_audience.subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">{project_management.target_audience.title}</h2>
            <p className="text-lg text-muted-foreground">{project_management.target_audience.intro}</p>
            <p className="text-lg font-medium text-foreground mt-4">{project_management.target_audience.ideal_audience_intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project_management.target_audience.audiences.map((aud: any, idx: number) => (
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
        </div>
      </section>

      {/* 4. Related Links Section */}
      <section className="bg-muted/50 py-16 md:py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              {lang === 'ar' ? 'موارد ذات صلة' : 'Related Resources'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Legal Library Link */}
              <Link
                href={`/${lang}/legislation-library/laws-regulations`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'المكتبة القانونية' : 'Legal Library'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'اطلع على أحدث القوانين والتشريعات في مكتبتنا'
                    : 'Access the latest laws and regulations in our comprehensive library'
                  }
                </p>
              </Link>

              {/* Statistics & Reports Link */}
              <Link
                href={`/${lang}/legislation-library/statistics-reports`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <BarChart className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'مركز المصادر' : 'Resource Centre'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'استكشف أحدث الإحصائيات والتقارير الوطنية في مكتبتنا'
                    : 'Explore the latest national statistics and reports in our library'
                  }
                </p>
              </Link>

              {/* Success Stories Link */}
              <Link
                href={`/${lang}/success-stories`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang === 'ar' ? 'قصص من واقعنا' : 'Real-World Stories'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === 'ar'
                    ? 'تجارب إقليمية ورؤى استراتيجية'
                    : 'Regional Successes & Strategic Insights'
                  }
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Case Studies */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 end-0 -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-white" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-12 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project_management.cases.title}</h2>
            <p className="text-xl opacity-90">{project_management.cases.subtitle}</p>
          </div>

          <div className="space-y-8">
            {project_management.cases.items.map((cs: any, idx: number) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">{cs.title}</h3>
                <h4 className="text-lg opacity-90 mb-6">{cs.subtitle}</h4>

                <div className="mb-6">
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span className="opacity-80 uppercase tracking-wider text-xs">{lang === 'ar' ? 'المشكلة / القضية' : 'Issue / Problem'}</span>
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

      {/* 6. Gift / Lead Magnet Section */}
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
    </main>
  );
}
