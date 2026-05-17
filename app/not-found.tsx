import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="max-w-lg text-center space-y-8">
            <div className="mb-8">
              <Link href="/en" className="text-2xl font-bold text-primary">
                Gate of Wisdom
              </Link>
            </div>

            <div className="space-y-2">
              <h1 className="text-8xl font-bold text-primary">404</h1>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Page Not Found
              </h2>
              <p className="text-muted-foreground text-lg">
                The page you are looking for does not exist or has been moved.
              </p>
              <p className="text-muted-foreground" dir="rtl">
                الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link
                href="/en"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Go to Home
              </Link>
              <Link
                href="/ar"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                الذهاب للرئيسية
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}