import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterProps {
  lang: "en" | "ar";
  dictionary: any;
}

export function Footer({ lang, dictionary }: FooterProps) {
  const { navigation, footer } = dictionary;

  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950">
      <Separator />
      <div className="container mx-auto px-4 py-12">
        {/* Top Section: Newsletter subscription */}
        {/* <div className="mb-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary/5 p-8 md:flex-row md:px-12 border border-primary/10">
          <div className="flex-1 text-start">
            <h3 className="text-2xl font-bold text-foreground">{footer.newsletter.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {footer.newsletter.description}
            </p>
          </div>
          <div className="flex w-full flex-1 max-w-md flex-col sm:flex-row items-center gap-2">
            <Input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="bg-background"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <Send className="h-4 w-4 me-2 rtl:rotate-180" />
              {footer.newsletter.button}
            </Button>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">{footer.about.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {footer.about.description}
            </p>
            <div className="flex space-s-4 pt-2">
              <a href="https://www.instagram.com/_gateofwisdom/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full inline-flex items-center justify-center text-primary hover:text-[#E4405F] transition-colors">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/gateofwisdom/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full inline-flex items-center justify-center text-primary hover:text-[#0A66C2] transition-colors">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {footer.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {dictionary.services_hub.services.slice(0, 5).map((svc: any, i: number) => (
                <li key={i}>
                  <Link
                    href={`/${lang}/services/${svc.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {footer.quickLinks.resources}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/knowledge-hub`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {navigation.knowledgeHub}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legislation-library`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {navigation.legislationLibrary}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/bi-center`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {navigation.biCenter}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/success-stories`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {navigation.successStories}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {footer.contact.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 me-3 mt-0.5 shrink-0 text-primary" />
                <span className="whitespace-pre-line" dir={lang === "ar" ? "rtl" : "ltr"}>{footer.contact.address}</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 me-3 shrink-0 text-primary" />
                <span dir="ltr">{footer.contact.phone}</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Link href={`mailto:${footer.contact.email}`} className="hover:text-primary transition-colors">
                  <span className="flex items-center">
                    <Mail className="h-4 w-4 me-3 shrink-0 text-primary" />
                    {footer.contact.email}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {footer.legal.copyright}</p>
          {/* <div className="flex space-s-4">
            <Link href={`/${lang}/privacy`} className="hover:text-primary transition-colors">{footer.legal.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-primary transition-colors">{footer.legal.terms}</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
