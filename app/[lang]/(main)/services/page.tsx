import Link from "next/link";
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

interface ServicesPageProps {
  params: Promise<{ lang: "en" | "ar" }>;
}

const icons = [Briefcase, LineChart, Target, Layers, Users, BarChart, HeartHandshake];

// Geometry configurations mapped to service indices
const geometries = [
  "rounded-full", // Circle
  "rounded-2xl rotate-45 scale-90", // Diamond
  "rounded-tr-[50px] rounded-bl-[50px] rounded-tl-xl rounded-br-xl", // Leaf
  "rounded-full", // Circle
  "rounded-none rotate-12 scale-90", // Tilted Square
  "rounded-2xl", // Soft Square
  "rounded-full scale-95" // Circle
];

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
            {services_hub.intro}
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services_hub.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            const baseShape = geometries[index % geometries.length];

            return (
              <Link
                key={service.slug}
                href={`/${lang}/services/service-${index + 1}`}
                className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-transparent"
              >
                {/* 
                  The Kinetic Geometric Shape 
                  Starts as a stylized geometric polygon/circle in the center with bg-primary/10
                  On hover: scales to cover the entire container (200%), snaps back to standard un-rotated bounds, and turns into bg-primary.
                */}
                <div
                  className={cn(
                    "absolute inset-0 z-0 m-auto flex h-[120px] w-[120px] items-center justify-center bg-primary/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    baseShape,
                    // Hover overrides to unrotate and scale up radically
                    "group-hover:h-[250%] group-hover:w-[250%] group-hover:rotate-0 group-hover:rounded-none group-hover:bg-primary"
                  )}
                />

                {/* Content Layer (z-10 guarantees it stays above the shape) */}
                <div className="relative z-10 flex h-full w-full flex-col items-center text-center">
                  
                  {/* Initial State: Icon + Short Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:scale-95 group-hover:opacity-0">
                    <Icon className="mb-4 h-12 w-12 text-primary" strokeWidth={1.5} />
                    <span className="max-w-[200px] text-xl font-bold leading-snug text-card-foreground">
                      {service.title}
                    </span>
                  </div>

                  {/* Hover State: Revealed Text & Kinetic Sentence */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-2 pt-8 text-primary-foreground opacity-0 transition-all duration-500 ease-out translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <div className="h-px w-12 bg-primary-foreground/30" />
                    <p className="max-w-[240px] text-[15px] font-medium leading-relaxed text-primary-foreground/95">
                      {service.description}
                    </p>
                    {/* Fake action arrow pointing matching LTR/RTL dir */}
                    <span className="mt-4 inline-flex items-center text-sm font-semibold tracking-wider text-primary-foreground">
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
