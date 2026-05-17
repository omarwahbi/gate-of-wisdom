import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LeadMagnet } from "@/components/LeadMagnet";
import { generatePageMetadata, getPageJsonLd } from "@/lib/seo";
import type { SeoPageKey } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

const SLUG_TO_SEO_KEY: Record<string, SeoPageKey> = {
  "project-management": "project_management",
  "market-studies": "market_studies",
  "feasibility-studies": "feasibility_studies",
  "performance-efficiency": "performance_efficiency",
  "human-resources": "human_resources",
  "marketing-sales": "marketing_sales",
  "crm": "crm",
};

interface ServicePageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const seoKey = SLUG_TO_SEO_KEY[slug];
  if (!seoKey) return {};
  return generatePageMetadata(seoKey, lang as "en" | "ar", `services/${slug}`);
}

export async function generateStaticParams() {
  return Object.keys(SLUG_TO_SEO_KEY).flatMap((slug) => [
    { lang: "en", slug },
    { lang: "ar", slug },
  ]);
}

export default async function ServicePage(props: ServicePageProps) {
  const params = await props.params;
  const { lang, slug } = params;
  const seoKey = SLUG_TO_SEO_KEY[slug];
  const schemas = seoKey ? getPageJsonLd(seoKey, lang as "en" | "ar", `services/${slug}`) : [];

  const filePath = path.join(process.cwd(), "content", lang, "services", `${slug}.md`);
  
  let content = "";
  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 md:py-24 bg-background">
      {schemas.length > 0 && <JsonLd schemas={schemas} />}
      <div className="container mx-auto px-4">
        {/* Markdown Content Wrapper with explicit logical properties to support RTL Arabic smoothly */}
        <div className="prose prose-stone dark:prose-invert max-w-4xl mx-auto prose-p:text-start prose-headings:text-start prose-ul:text-start prose-ul:ps-6 prose-ol:ps-6 prose-ol:text-start prose-blockquote:border-s-4 prose-blockquote:border-primary prose-blockquote:ps-4 text-start">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
        
        {/* Call to Action Section */}
        <section className="max-w-4xl mx-auto">
          <LeadMagnet serviceType={slug} />
        </section>
      </div>
    </main>
  );
}
