import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  lang: string;
  dictionary: any;
}

export function Footer({ lang, dictionary }: FooterProps) {
  const { navigation } = dictionary;

  return (
    <footer className="w-full border-t bg-zinc-50 py-12 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">Gate of Wisdom</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Consolidated Engineering & Management Services providing expert consulting with a vision for excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {navigation.services}
            </h3>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <Link
                    href={`/${lang}/services/service-${i}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Service {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {navigation.knowledgeHub}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/knowledge-hub`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {navigation.knowledgeHub}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legislation-library`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {navigation.legislationLibrary}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/bi-center`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {navigation.biCenter}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 me-3 text-primary" />
                <span>Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 me-3 text-primary" />
                <span>+966 12 345 6789</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 me-3 text-primary" />
                <span>info@gow.com.sa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gate of Wisdom Consulting Engineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
