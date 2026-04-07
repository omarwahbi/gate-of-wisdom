import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, BookOpen, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface KnowledgeHubPageProps {
  params: Promise<{
    lang: "en" | "ar";
  }>;
}

export default async function KnowledgeHubPage(props: KnowledgeHubPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { knowledge_hub: hubData } = dictionary;

  // Map icon names to actual Lucide components
  const iconMap: Record<string, any> = {
    Video: Video,
    BookOpen: BookOpen,
    Users: Users
  };

  return (
    <main className="flex min-h-screen flex-col w-full text-start">
      {/* Hero Section */}
      <PageHeader 
        title={hubData.hero.title}
        description={hubData.hero.subtitle}
        bgImageUrl="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
             {hubData.intro.heading}
          </h2>
          {hubData.intro.paragraphs.map((p: string, idx: number) => (
            <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {p}
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

              return (
                <Link key={idx} href={`/${lang}/knowledge-hub/${cat.slug}`} className="group h-full">
                  <Card className="h-full border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card flex flex-col group-hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 end-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                      <Icon className="w-32 h-32 text-primary" />
                    </div>
                    <CardHeader className="relative z-10 pb-4">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl text-foreground font-bold leading-tight group-hover:text-primary transition-colors">
                        {cat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 flex flex-col flex-1 justify-between">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                        {cat.description}
                      </CardDescription>
                      
                      <div className="flex items-center text-primary font-semibold text-sm mt-auto capitalize opacity-80 group-hover:opacity-100 transition-opacity pt-4 border-t border-border">
                         <span className="me-2">{lang === 'ar' ? 'استكشف المزيد' : 'Explore More'}</span>
                         <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1')} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
