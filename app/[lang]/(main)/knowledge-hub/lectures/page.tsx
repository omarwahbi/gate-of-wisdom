import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Target, Video, Users, BookOpen, Gift, Map, Bookmark, LayoutTemplate, Briefcase, FileText, CheckSquare, BarChart, CalendarClock, Presentation } from "lucide-react";
import { cn } from "@/lib/utils";

interface KnowledgeHubLecturesProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function LecturesPage(props: KnowledgeHubLecturesProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { lectures: pageData } = dictionary;

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* 1. Hero Section */}
      <PageHeader 
        title={pageData.hero.title}
        description={pageData.hero.subtitle}
        bgImageUrl="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. Introduction & Features */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6 mb-16 max-w-4xl text-start">
            {pageData.intro.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          
          <div className="border-t border-border pt-12">
            <h3 className="text-2xl font-bold mb-8 text-foreground">{pageData.intro.features_intro}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.intro.features.map((feat: any, idx: number) => (
                <div key={idx} className="bg-muted/50 p-6 rounded-2xl border flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 flex-shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-lg mb-1">{feat.title}</strong>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Target Audience */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12 text-start">
            {pageData.target_audience.subtitle && (
              <span className="text-sm font-semibold uppercase tracking-wider text-primary block">{pageData.target_audience.subtitle}</span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">{pageData.target_audience.title}</h2>
            <p className="text-lg text-muted-foreground">{pageData.target_audience.intro}</p>
            <p className="text-lg font-medium text-foreground mt-4">{pageData.target_audience.ideal_audience_intro}</p>
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

      {/* 4. The Consulting Guide (Why Start Here?) */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 end-0 -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{pageData.guide.title}</h2>
            <p className="text-xl opacity-90">{pageData.guide.subtitle}</p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
             <p className="text-lg md:text-xl leading-relaxed opacity-95 mb-10 text-center font-medium max-w-4xl mx-auto">
                {pageData.guide.why_start_intro}
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {pageData.guide.points.map((pt: any, idx: number) => (
                 <div key={idx} className="bg-black/10 rounded-2xl p-6 border border-white/5">
                    <div className="h-10 w-10 bg-white text-primary rounded-full flex items-center justify-center font-bold mb-4 shadow-sm">
                       {idx + 1}
                    </div>
                    <strong className="block text-xl mb-2">{pt.title}</strong>
                    <p className="leading-relaxed opacity-80 text-sm">{pt.desc}</p>
                 </div>
               ))}
             </div>

             <div className="flex flex-col md:flex-row gap-6 border-t border-white/20 pt-8">
                <div className="flex-1 bg-white/5 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3 text-amber-300">
                     <Map className="w-6 h-6" />
                     <strong className="uppercase tracking-wider text-sm">{lang === 'ar' ? 'ماذا بعد المحاضرات؟' : 'What is next?'}</strong>
                   </div>
                   <p className="opacity-90 leading-relaxed text-sm md:text-base">{pageData.guide.what_is_next}</p>
                </div>
                <div className="flex-1 bg-white text-primary p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02]">
                   <div className="flex items-center gap-3 mb-3 text-primary">
                     <Gift className="w-6 h-6" />
                     <strong className="uppercase tracking-wider text-sm">{lang === 'ar' ? 'هدية الحضور' : 'Joining Gift'}</strong>
                   </div>
                   <p className="font-medium leading-relaxed text-sm md:text-base">{pageData.guide.gift}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Webinar Titles & Structure */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
               <Video className="w-8 h-8 text-primary" />
               {pageData.topics.title}
            </h2>
            <p className="text-xl text-muted-foreground">{pageData.topics.subtitle}</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-4 rounded-xl border border-blue-200 dark:border-blue-900 mb-10 text-center max-w-3xl mx-auto flex gap-3 items-start justify-center text-sm md:text-base font-medium">
             <Bookmark className="w-5 h-5 flex-shrink-0 mt-0.5" />
             <p>{pageData.topics.registration_note}</p>
          </div>

          <div className="space-y-6">
            {pageData.topics.items.map((item: any, idx: number) => (
              <div key={idx} className="group border border-border bg-card rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-muted px-6 py-4 border-b flex items-center justify-between">
                   <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-primary/10 rounded-full">
                     {item.service}
                   </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                   <div className="h-12 w-12 bg-secondary text-secondary-foreground rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                   </div>
                   <div className="space-y-4 flex-1 w-full">
                     <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                        {item.title}
                     </h3>
                     <div className="bg-muted p-4 rounded-xl border">
                        <strong className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">{lang === 'ar' ? 'هيكلية الجلسة' : 'Session Structure'}</strong>
                        <p className="text-sm font-medium text-foreground leading-relaxed flex items-start gap-2">
                          <LayoutTemplate className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {item.structure}
                        </p>
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Free Incentive Materials */}
      <section className="bg-muted py-16 md:py-24 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{pageData.free_materials.title}</h2>
             <p className="text-xl text-muted-foreground">{pageData.free_materials.subtitle}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {pageData.free_materials.items.map((item: any, i: number) => {
               // Assign dynamic icons based on mapping
               const icons = [FileText, CheckSquare, BarChart, CalendarClock];
               const Icon = icons[i] || Briefcase;
               
               return (
                 <Card key={i} className="border-border hover:border-primary/30 transition-colors shadow-sm bg-card h-full flex flex-col">
                   <CardHeader className="pb-4">
                     <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                     </div>
                     <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                   </CardHeader>
                   <CardContent className="flex-1">
                     <ul className="space-y-3">
                       {item.details.map((det: string, idx: number) => (
                         <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed items-start">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                           <span>{det}</span>
                         </li>
                       ))}
                     </ul>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="bg-background pb-16 pt-8 md:pb-24">
        <div className="container mx-auto px-4 text-center max-w-3xl bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
               <Presentation className="w-8 h-8" />
               {pageData.cta.title}
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {pageData.cta.description}
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 text-lg py-4 px-10 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-md">
              {pageData.cta.button}
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
