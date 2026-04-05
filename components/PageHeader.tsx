import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  bgImageUrl: string;
  className?: string;
}

export function PageHeader({ title, description, bgImageUrl, className }: PageHeaderProps) {
  return (
    <div className={cn("relative min-h-[40vh] w-full flex items-center justify-center text-center", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-zinc-200 sm:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
