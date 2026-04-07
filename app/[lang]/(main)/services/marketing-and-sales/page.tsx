import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Lightbulb, Target, Users, BookOpen, AlertTriangle, TrendingUp, Store, Globe, Goal, PieChart, ShoppingCart } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function MarketingAndSalesPage(props: ServicePageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { marketing_and_sales: serviceData } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader 
        title={serviceData.hero.title}
        description={serviceData.hero.subtitle}
        bgImageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {serviceData.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          
          <div className="pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">{serviceData.intro.services_intro}</h3>
            <ul className="space-y-4 shadow-sm border rounded-2xl overflow-hidden bg-card divide-y">
              {serviceData.intro.services.map((svc: any, idx: number) => (
                <li key={idx} className="flex flex-col md:flex-row md:items-start gap-4 p-6">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{svc.title}</h4>
                    <p className="text-muted-foreground mt-2">{svc.description}</p>
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

      {/* 4. Strategic Insights (Cases) */}
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
                <h3 className="text-2xl font-bold mb-2 flex flex-wrap items-center gap-2">
                   {idx === 0 && <Store className="h-6 w-6" />}
                   {idx === 1 && <Globe className="h-6 w-6" />}
                   {idx === 2 && <ShoppingCart className="h-6 w-6" />}
                   {cs.title}
                </h3>
                <h4 className="text-lg opacity-90 mb-6 font-medium">{cs.subtitle}</h4>
                
                <div className="mb-6 bg-black/10 rounded-xl p-5 border border-white/5">
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-300" />
                    <span className="opacity-80 uppercase tracking-wider text-xs">The Situation</span>
                  </p>
                  <p className="text-lg leading-relaxed">{cs.issue}</p>
                </div>
                
                <div className="mb-6 border-s-4 border-white/30 ps-4 py-2">
                   <strong className="block mb-2 font-medium opacity-80 uppercase tracking-wider text-xs">The Solution</strong>
                   {cs.analysis.map((an: string, i: number) => (
                      <p key={i} className="opacity-90 leading-relaxed text-lg mb-2">{an}</p>
                   ))}
                </div>

                <div className="bg-primary-foreground text-primary rounded-xl p-6 mt-8 flex gap-4 w-full text-start items-start shadow-xl shadow-black/10">
                  <Lightbulb className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1 text-sm uppercase tracking-wide">The Lesson</strong>
                    <p className="text-lg font-medium leading-relaxed">{cs.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Growth Engineering Guide */}
      <section className="bg-muted py-16 md:py-24 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center text-balance max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground opacity-90">
               <PieChart className="inline-block me-3 h-8 w-8 text-primary -mt-1" />
               {serviceData.growth_guide.title}
            </h2>
            <p className="text-xl text-muted-foreground">{serviceData.growth_guide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.growth_guide.phases.map((phase: any, idx: number) => (
              <Card key={idx} className="border-border flex flex-col h-full bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <CardHeader className="bg-secondary/30 border-b">
                  <CardTitle className="text-xl text-foreground flex items-center gap-3 leading-tight">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {idx + 1}
                    </span>
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-5">
                    {phase.points.map((pt: any, i: number) => (
                      <li key={i} className="flex gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-foreground text-base mb-1 leading-snug">{pt.title}</strong>
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

      {/* 6. Growth Engineering Checklist */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{serviceData.checklist.title}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-xl border border-border overflow-hidden shadow-sm bg-card">
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="w-[200px] text-start font-bold uppercase tracking-wider">{serviceData.checklist.headers[0]}</TableHead>
                  <TableHead className="text-start font-bold uppercase tracking-wider">{serviceData.checklist.headers[1]}</TableHead>
                  <TableHead className="w-[100px] text-center font-bold uppercase tracking-wider">{serviceData.checklist.headers[2]}</TableHead>
                  <TableHead className="w-[100px] text-center font-bold uppercase tracking-wider">{serviceData.checklist.headers[3]}</TableHead>
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

      {/* 7. Marketing vs Sales (Operational Chaos Comparison) */}
      <section className="bg-muted py-16 md:py-24 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{serviceData.comparison.title}</h2>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-xl border border-border overflow-hidden shadow-md bg-white dark:bg-card">
            <Table>
              <TableHeader className="bg-primary hover:bg-primary">
                <TableRow>
                  <TableHead className="w-[200px] text-start font-bold uppercase tracking-wider text-primary-foreground">{serviceData.comparison.headers[0]}</TableHead>
                  <TableHead className="text-start font-bold uppercase tracking-wider text-primary-foreground border-s border-primary-foreground/20">{serviceData.comparison.headers[1]}</TableHead>
                  <TableHead className="text-start font-bold uppercase tracking-wider text-primary-foreground border-s border-primary-foreground/20">{serviceData.comparison.headers[2]}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceData.comparison.items.map((item: any, idx: number) => (
                  <TableRow key={idx} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-bold text-start align-top border-e bg-muted/30">
                       {item.feature}
                    </TableCell>
                    <TableCell className="text-start text-base border-e font-medium p-6 leading-relaxed">
                       {item.marketing}
                    </TableCell>
                    <TableCell className="text-start text-base font-medium p-6 leading-relaxed">
                       {item.sales}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 8. Food Case Study (Survival Tomorrow) */}
      <section className="bg-background py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-10 start-10 text-red-500/5 -rotate-12 pointer-events-none">
          <AlertTriangle className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-sm font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 mb-6">
               <AlertTriangle className="h-4 w-4" /> Warning Case Study
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground leading-tight">{serviceData.food_case.title}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">{serviceData.food_case.subtitle}</p>
          </div>

          <div className="space-y-6 mb-12">
            {serviceData.food_case.sections.map((sec: any, idx: number) => (
              <div key={idx} className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                <h4 className="text-xl font-bold mb-3 text-primary">{sec.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-500 text-white rounded-2xl p-8 md:p-10 shadow-lg text-center mx-auto border border-red-600">
             <h4 className="text-lg uppercase tracking-widest font-bold opacity-80 mb-4">The Universal Lesson</h4>
             <p className="text-2xl font-bold leading-tight">"{serviceData.food_case.lesson}"</p>
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
