import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { LeadMagnet } from "@/components/LeadMagnet";

interface ServicePageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export default async function ServicePage(props: ServicePageProps) {
  const params = await props.params;
  const { lang, slug } = params;
  
  const filePath = path.join(process.cwd(), "content", lang, "services", `${slug}.md`);
  
  let content = "";
  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 md:py-24 bg-background">
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
