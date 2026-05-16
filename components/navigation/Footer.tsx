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
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <span className="sr-only">{footer.social.twitter}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <span className="sr-only">{footer.social.linkedin}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </Button>
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
                <span className="whitespace-pre-line">{footer.contact.address}</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 me-3 shrink-0 text-primary" />
                <span>{footer.contact.phone}</span>
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
