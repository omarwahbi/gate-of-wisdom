import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Lightbulb, Target, Users, BookOpen, AlertTriangle, Crosshair, Map, Activity, ShieldAlert, Cpu } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function CRMPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { crm: serviceData } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader 
        title={serviceData.hero.title}
        description={serviceData.hero.subtitle}
        bgImageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. Introduction & Services */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <div className="max-w-4xl space-y-6 mb-12">
            {serviceData.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          
          <div className="bg-muted rounded-3xl p-8 md:p-12 shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Crosshair className="h-8 w-8 text-primary" />
              {serviceData.intro.services_intro}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.intro.services.map((svc: any, idx: number) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border shadow-sm flex flex-col gap-3">
                  <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                    <span className="font-bold">{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{svc.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {svc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Target Audience */}
      <section className="bg-background py-16 md:py-24">
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

      {/* 4. Strategic Insights (Careem Case) */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 end-0 -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.cases.title}</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{serviceData.cases.subtitle}</p>
          </div>

          <div className="space-y-8">
            {serviceData.cases.items.map((cs: any, idx: number) => (
              <div key={idx} className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Map className="h-10 w-10 opacity-80" />
                  <div>
                    <h3 className="text-2xl font-bold">{cs.title}</h3>
                    <h4 className="text-lg opacity-90 font-medium tracking-wide">{cs.subtitle}</h4>
                  </div>
                </div>
                
                <div className="mb-8 bg-black/15 rounded-2xl p-6 border border-white/5">
                  <p className="font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span className="opacity-80 uppercase tracking-wider text-sm">The Situation</span>
                  </p>
                  <p className="text-lg leading-relaxed">{cs.issue}</p>
                </div>
                
                <div className="mb-8 border-s-4 border-white/40 ps-5 py-2">
                   <strong className="block mb-3 font-medium opacity-80 uppercase tracking-wider text-sm">The Solution & Action</strong>
                   {cs.analysis.map((an: string, i: number) => (
                      <p key={i} className="opacity-95 leading-relaxed text-lg">{an}</p>
                   ))}
                </div>

                <div className="bg-white text-primary rounded-2xl p-6 flex gap-5 w-full text-start items-start shadow-xl shadow-black/10 transition-transform hover:scale-[1.01]">
                  <Lightbulb className="h-10 w-10 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1 text-sm uppercase tracking-wider text-muted-foreground">The Lesson</strong>
                    <p className="text-xl font-bold leading-relaxed">{cs.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRM Retention Guide */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
               {serviceData.growth_guide.title}
            </h2>
            <p className="text-xl text-muted-foreground">{serviceData.growth_guide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.growth_guide.phases.map((phase: any, idx: number) => (
              <Card key={idx} className="border-border flex flex-col h-full bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                     <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground font-bold leading-tight">
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-6 mt-2">
                    {phase.points.map((pt: any, i: number) => (
                      <li key={i} className="flex gap-4">
                        <div>
                          <strong className="block text-foreground text-sm uppercase tracking-wider mb-2 text-primary">{pt.title}</strong>
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

      {/* 6. CRM System Checklist Table */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.checklist.title}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-xl border border-border overflow-hidden shadow-sm bg-card">
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="w-[180px] text-start font-bold uppercase tracking-wider">{serviceData.checklist.headers[0]}</TableHead>
                  <TableHead className="text-start font-bold uppercase tracking-wider">{serviceData.checklist.headers[1]}</TableHead>
                  <TableHead className="w-[80px] text-center font-bold uppercase tracking-wider">{serviceData.checklist.headers[2]}</TableHead>
                  <TableHead className="w-[80px] text-center font-bold uppercase tracking-wider">{serviceData.checklist.headers[3]}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceData.checklist.items.map((item: any, idx: number) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium text-start align-top border-e">
                       <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/10">
                        {item.phase}
                      </span>
                    </TableCell>
                    <TableCell className="text-start text-base border-e font-medium">{item.question}</TableCell>
                    <TableCell className="text-center align-middle border-e bg-secondary/20">
                      <div className="mx-auto h-6 w-6 rounded-md border border-input shadow-sm bg-background" />
                    </TableCell>
                    <TableCell className="text-center align-middle bg-destructive/5">
                      <div className="mx-auto h-6 w-6 rounded-md border border-input shadow-sm bg-background" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 7. Consulting Insights (Why CRM Fails) */}
      <section className="bg-muted py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <span className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-900/30 px-4 py-2 text-sm font-bold tracking-wider uppercase text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 mb-6">
                <ShieldAlert className="h-5 w-5" /> Warning Insights
             </span>
             <h2 className="text-3xl md:text-5xl font-bold mb-4">{serviceData.insights.title}</h2>
             <p className="text-xl text-muted-foreground">{serviceData.insights.subtitle}</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
             {/* Left Column: Reasons for failure */}
             <div className="lg:col-span-4 space-y-6">
               <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2"><AlertTriangle className="text-primary w-6 h-6"/> Failure Triggers</h3>
               {serviceData.insights.failure_reasons.map((reason: any, idx: number) => (
                 <div key={idx} className="bg-card border-s-4 border-s-destructive p-5 rounded-r-xl shadow-sm">
                   <strong className="block text-foreground mb-1">{reason.title}</strong>
                   <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                 </div>
               ))}
             </div>
             
             {/* Middle Column: Visual Real-World Case Examples */}
             <div className="lg:col-span-4 space-y-6">
               <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2"><BookOpen className="text-primary w-6 h-6"/> Real Examples</h3>
               {serviceData.insights.examples.map((ex: any, idx: number) => (
                 <div key={idx} className="bg-secondary/40 border border-border p-6 rounded-xl relative overflow-hidden h-[calc(50%-12px)] flex flex-col justify-center">
                    <div className="absolute top-0 end-0 p-4 opacity-10">
                       <Cpu className="w-16 h-16" />
                    </div>
                    <strong className="block text-lg text-primary mb-3 relative z-10">{ex.title}</strong>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{ex.desc}</p>
                 </div>
               ))}
             </div>

             {/* Right Column: The Roadmap */}
             <div className="lg:col-span-4">
                <div className="bg-primary text-primary-foreground p-8 rounded-2xl h-full shadow-lg relative overflow-hidden">
                   <div className="absolute top-0 end-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                   <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                     <Map className="w-6 h-6" /> Roadmap to Success
                   </h3>
                   <ul className="space-y-6">
                     {serviceData.insights.roadmap.map((step: string, idx: number) => (
                       <li key={idx} className="flex gap-4 items-start">
                         <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                           {idx + 1}
                         </div>
                         <p className="text-sm font-medium leading-relaxed opacity-90">{step}</p>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 8. Top CRM Platforms Matrix Comparison */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{serviceData.comparison.title}</h2>
          </div>
          
          <div className="w-full overflow-x-auto rounded-xl border border-border shadow-md bg-white dark:bg-card">
            <Table className="w-full min-w-[1000px]">
              <TableHeader className="bg-primary hover:bg-primary">
                <TableRow>
                  <TableHead className="w-[180px] font-bold text-start text-primary-foreground border-e border-primary-foreground/20 sticky start-0 bg-primary z-10">{serviceData.comparison.headers[0]}</TableHead>
                  {serviceData.comparison.headers.slice(1).map((header: string, i: number) => (
                    <TableHead key={i} className="font-bold text-start text-primary-foreground border-e border-primary-foreground/20 min-w-[200px]">{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceData.comparison.items.map((item: any, idx: number) => (
                  <TableRow key={idx} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-bold text-start align-top border-e bg-muted/40 sticky start-0 z-10">
                       {item.feature}
                    </TableCell>
                    <TableCell className="text-start text-sm border-e p-4 leading-relaxed bg-background">{item.hubspot}</TableCell>
                    <TableCell className="text-start text-sm border-e p-4 leading-relaxed bg-background">{item.zoho}</TableCell>
                    <TableCell className="text-start text-sm border-e p-4 leading-relaxed bg-background">{item.salesforce}</TableCell>
                    <TableCell className="text-start text-sm border-e p-4 leading-relaxed bg-background">{item.dynamics}</TableCell>
                    <TableCell className="text-start text-sm p-4 leading-relaxed bg-background font-medium text-emerald-700 dark:text-emerald-400">{item.odoo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="bg-background pb-16 md:pb-24">
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
