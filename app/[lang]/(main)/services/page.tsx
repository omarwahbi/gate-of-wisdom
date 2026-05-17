import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/get-dictionary";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  LineChart,
  Target,
  Layers,
  Users,
  BarChart,
  HeartHandshake
} from "lucide-react";
import { BoldText } from "@/components/BoldText";

interface ServicesPageProps {
  params: Promise<{ lang: "en" | "ar" }>;
}

const icons = [Briefcase, LineChart, Target, Layers, Users, BarChart, HeartHandshake];

// Geometry configurations mapped to service indices
const geometries = [
  "rounded-full", // Circle
  "rounded-2xl rotate-45", // Diamond
  "rounded-[40px]", // Soft shape
  "rounded-full", // Circle
  "rounded-2xl rotate-12", // Tilted Square
  "rounded-2xl", // Soft Square
  "rounded-full" // Circle
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return generatePageMetadata("services", lang as "en" | "ar", "services");
}

export default async function ServicesPage(props: ServicesPageProps) {
  const params = await props.params;
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { services_hub } = dictionary;

  return (
    <main className="flex min-h-screen flex-col bg-background py-16 md:py-24">
      {/* Header Section */}
      <section className="container mx-auto px-4 text-start">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            {services_hub.title}
          </h2>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-5xl">
            {services_hub.subtitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <BoldText text={services_hub.intro} />
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-items-center">
          {services_hub.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            const baseShape = geometries[index % geometries.length];
            const isLastCard = index === services_hub.services.length - 1;

            return (
              <Link
                key={service.slug}
                href={`/${lang}/services/${service.slug}`}
                className={cn(
                  "group relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-transparent",
                  isLastCard && "lg:col-start-2"
                )}
              >
                {/* Kinetic Geometric Shape - covers entire card on hover */}
                <div
                  className={cn(
                    "absolute z-0 flex items-center justify-center bg-primary/10 transition-all duration-500 ease-out",
                    baseShape,
                    // Initial: large shape covering most of card
                    "h-[240px] w-[240px]",
                    // Hover: expands to cover full card area
                    "group-hover:h-[400px] group-hover:w-[400px] group-hover:bg-primary"
                  )}
                />

                {/* Content Layer */}
                <div className="relative z-10 flex h-full w-full flex-col items-center text-center">
                  {/* Initial State: Icon + Short Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-6 group-hover:scale-90 group-hover:opacity-0">
                    <Icon className="mb-4 h-12 w-12 text-primary" strokeWidth={1.5} />
                    <span className="max-w-[200px] text-xl font-bold leading-snug text-card-foreground">
                      {service.title}
                    </span>
                  </div>

                  {/* Hover State: Revealed Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 px-4 pt-8 text-primary-foreground opacity-0 transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <div className="h-px w-12 bg-primary-foreground/30" />
                    <p className="max-w-[220px] text-[14px] font-medium leading-relaxed text-primary-foreground/95">
                      {service.description}
                    </p>
                    <span className="mt-2 inline-flex items-center text-sm font-semibold tracking-wider text-primary-foreground">
                      <span className="me-2 rtl:hidden">Explore &rarr;</span>
                      <span className="hidden rtl:inline">اكتشف &larr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
