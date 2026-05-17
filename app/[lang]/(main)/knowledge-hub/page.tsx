import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, BookOpen, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BoldText } from "@/components/BoldText";

interface KnowledgeHubPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("knowledge_hub", lang as "en" | "ar", "knowledge-hub");
}

export default async function KnowledgeHubPage(props: KnowledgeHubPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { knowledge_hub: hubData } = dictionary;
  const schemas = getPageJsonLd("knowledge_hub", lang, "knowledge-hub");

  // Map icon names to actual Lucide components
  const iconMap: Record<string, any> = {
    Video: Video,
    BookOpen: BookOpen,
    Users: Users
  };

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      <JsonLd schemas={schemas} />
      {/* Hero Section */}
      <PageHeader
        title={hubData.hero.title}
        description={hubData.hero.subtitle}
        bgImageUrl="/images/knowledge-hub/knowledge-hub-hero.jpg"
      />

      {/* Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
             {hubData.intro.heading}
          </h2>
          {hubData.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <BoldText text={p} />
            </p>
          ))}
        </div>
      </section>

      {/* Categories Cards Section */}
      <section className="bg-muted py-16 md:py-24 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubData.categories.map((cat: any, idx: number) => {
              const Icon = iconMap[cat.icon] || BookOpen;
              const isReady = cat.slug === 'lectures';

              const CardBody = (
                  <Card className={cn("h-full border-border transition-all duration-300 flex flex-col relative overflow-hidden group/card", isReady ? "hover:border-primary/50 hover:shadow-lg bg-card hover:-translate-y-1" : "bg-muted/50 cursor-not-allowed")}>
                    <div className={cn("absolute top-0 end-0 p-6 opacity-5 transition-transform duration-500", isReady ? "group-hover/card:opacity-10 group-hover/card:scale-110" : "")}>
                      <Icon className={cn("w-32 h-32", isReady ? "text-primary" : "text-muted-foreground")} />
                    </div>
                    <CardHeader className="relative z-10 pb-4">
                      <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300", isReady ? "bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-primary-foreground" : "bg-secondary text-muted-foreground")}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className={cn("text-2xl font-bold leading-tight transition-colors", isReady ? "text-foreground group-hover/card:text-primary" : "text-muted-foreground")}>
                        {cat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 flex flex-col flex-1 justify-between">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                        {cat.description}
                      </CardDescription>
                      
                      <div className="flex items-center font-semibold text-sm mt-auto capitalize pt-4 border-t border-border">
                         {isReady ? (
                           <div className="flex items-center text-primary opacity-80 group-hover/card:opacity-100 transition-opacity">
                             <span className="me-2">{lang === 'ar' ? 'استكشف المزيد' : 'Explore More'}</span>
                             <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", lang === 'ar' ? 'rotate-180 group-hover/card:-translate-x-1' : 'group-hover/card:translate-x-1')} />
                           </div>
                         ) : (
                           <span className="text-muted-foreground inline-flex items-center gap-2">
                             {lang === 'ar' ? 'تتوفر قريباً' : 'Coming Soon'}
                           </span>
                         )}
                      </div>
                    </CardContent>
                  </Card>
              );

              return isReady ? (
                <Link key={idx} href={`/${lang}/knowledge-hub/${cat.slug}`} className="h-full block">
                  {CardBody}
                </Link>
              ) : (
                <div key={idx} className="h-full relative group">
                  {CardBody}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
