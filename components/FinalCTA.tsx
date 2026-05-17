import { Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FinalCTAProps {
  lang: "en" | "ar";
  title: string;
  description: string;
  buttonLabel?: string;
  icon?: React.ReactNode;
  className?: string;
  border?: boolean;
}

export function FinalCTA({
  lang,
  title,
  description,
  buttonLabel,
  icon,
  className,
  border,
}: FinalCTAProps) {
  const defaultButtonLabel =
    lang === "ar" ? "احجز استشارة أولية مجانية" : "Book a Free Initial Consultation";

  return (
    <section
      className={cn(
        "bg-background py-16 md:py-24 flex items-center",
        border && "border-t",
        className
      )}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 shadow-xl shadow-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 end-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="relative z-10">
          {icon && <div className="w-12 h-12 mx-auto mb-6 opacity-80">{icon}</div>}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 text-base md:text-lg py-3.5 px-8 md:py-4 md:px-10 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-md whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            {buttonLabel || defaultButtonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}