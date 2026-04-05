import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PageProps {
  params: Promise<{ lang: "en" | "ar" }>;
}

export default async function HomePage(props: PageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { home } = dictionary;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Gate of Wisdom Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
              {home.hero.companyName}
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium text-white/90 md:text-2xl">
              {home.hero.slogan}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: About */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-start">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {home.about.subtitle}
            </h2>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {home.about.title}
            </h1>
            <div className="relative space-y-6 pt-6 text-lg leading-relaxed text-muted-foreground md:pt-8 md:text-xl">
              <p>{home.about.p1}</p>
              <p>{home.about.p2}</p>
              <p>{home.about.p3}</p>
              <p>{home.about.p4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-start">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-primary">
              {home.vision.title}
            </h2>
            <div className="space-y-6 pt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>{home.vision.p1}</p>
              <p>{home.vision.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission */}
      <section className="w-full bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-start">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {home.mission.title}
            </h2>
            <div className="space-y-6 pt-4 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              <p>{home.mission.p1}</p>
              <p>{home.mission.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Core Values */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-start">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-4 text-center md:mb-16 mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {home.values.subtitle}
              </h3>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {home.values.title}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {home.values.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {home.values.list.map((value, index) => (
                <Card 
                  key={index} 
                  className="flex h-full flex-col border-primary/10 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardHeader className="pb-4 text-start">
                    <CardTitle className="text-xl font-bold text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 text-start">
                    <p className="leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
