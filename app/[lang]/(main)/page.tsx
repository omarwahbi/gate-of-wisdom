import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import { PageHeader } from "@/components/PageHeader";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "ar");

  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title={dictionary.navigation.home}
        description="Gate of Wisdom Consulting Engineers: Strategic Engineering and Management Solutions."
        bgImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">{dictionary.navigation.services}</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
          Providing high-standard consulting services in engineering, project management, and strategic development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Core Service {i}</h3>
              <p className="text-muted-foreground">Expert solutions for large-scale engineering projects and municipal consulting.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
